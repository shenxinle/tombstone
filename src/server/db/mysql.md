# MySQL

## 启动
Mac上在系统偏好设置内启动MySQL，或者用下面的命令行
```shell
sudo /usr/local/mysql/support-files/mysql.server start
sudo /usr/local/mysql/support-files/mysql.server stop
sudo /usr/local/mysql/support-files/mysql.server restart
```
Windows: 控制面板 -> 管理工具 -> 服务 -> MySQL 

连接：`mysql -h host -u user -p` (如本地的 `mysql -u root -p`), 输入密码

查看端口号：`show global variables like ‘port’; `

修改端口号：`/Library/LaunchDaemons/com.oracle.oss.mysql.mysqld.plist ` 内

退出： `quit` or `exit`

## 基本使用

* 退出未写完的查询语句 `\c`

```sql
-- base query
select version(), user(), now(), current_timestamp(), curdate(), curtime(), current_date, current_time, SIN(PI()/4);

-- database, table
show databases; --查看数据库
select database(); -- 查看正在连接的数据库
use test_server; -- 连接数据库
show tables;
create database test_server; -- 创建数据库
drop database test_server; -- 删除数据库
drop table article; -- 删除表

CREATE TABLE 表的名字
(
列名a 数据类型(数据长度),
列名b 数据类型(数据长度),
列名c 数据类型(数据长度)
);

-- insert
INSERT INTO pet VALUES ('Puffball','Diane','hamster','f','1999-03-30',NULL);

-- select
select * from pet;
SELECT name, birth FROM pet;
SELECT DISTINCT owner FROM pet; -- owner去重
SELECT * FROM pet WHERE birth >= '1998-1-1' AND sex = 'f';  --  AND, OR
SELECT name, birth FROM pet ORDER BY birth;  -- ORDER BY 默认不区分大小写, 可以用 ORDER BY BINARY 来区分
                                             -- 默认 ASC, 倒序加 DESC
SELECT name, species, birth FROM pet ORDER BY species, birth DESC;  -- 多列排序, DESC 只影响 birth
select name, birth, current_date, timestampdiff(year, birth, current_date) as age from pet;  -- 日期计算
select name, birth, death, timestampdiff(year, birth, death) as age 
from pet
where death is not null
order by age;  -- 日期计算

-- update
update pet set birth = '1989-03-23' where name = 'bowser';

```

`status;`  连接状态

`desc <tableName>;` or `describe <tableName>;` or `show columns from <tableName>;`  显示表结构

`source ./sqlfile.sql;`  执行sql文件

## 使用

```sql
SELECT COUNT(*) FROM pet;  -- 计算行
SELECT owner, COUNT(*) FROM pet GROUP BY owner;  -- 分组计算行

-- 计算
SELECT species, sex, COUNT(*) FROM pet
WHERE species = 'dog' OR species = 'cat'
GROUP BY species, sex;

```

## 模式匹配
使用 `LIKE` , `NOT LIKE`  
* 使用 "_" 匹配任意单个字符  
* 使用 "%" 匹配任意数量字符（包括0个）  

使用正则表达式 `REGEXP` , `NOT REGEXP` (或者 `RLIKE`, `NOT RLIKE`)  
* "." 匹配任意单个字符
* "[abc]" 匹配括号内的任一字符， 可以用 "-" 指定范围， "[1-9]", "[a-z]"
* "*" 匹配0个或多个它前面的东西
* "{n}" 匹配n个它前面的东西
* 一个REGEXP模式匹配成功的条件是，模式在测试值中的任意地方匹配即可。（这与LIKE模式匹配不同，LIKE模式匹配成功需要匹配整个值）。
* "^" 匹配开头， "$" 匹配结尾


## 数据类型
数据类型 | 大小(字节) | 用途 | 格式
-- | -- | -- | --
INT | 4 | 整数 |  
FLOAT | 4 | 单精度浮点数 |  
DOUBLE | 8 | 双精度浮点数 |  
ENUM |   | 单选,比如性别 | ENUM('a','b','c')
SET |   | 多选 | SET('1','2','3')
DATE | 3 | 日期 | YYYY-MM-DD
TIME | 3 | 时间点或持续时间 | HH:MM:SS
YEAR | 1 | 年份值 | YYYY
CHAR | 0~255 | 定长字符串 |  
VARCHAR | 0~255 | 变长字符串 |  
TEXT | 0~65535 | 长文本数据 | 

整数除了 INT 外，还有 TINYINT、SMALLINT、MEDIUMINT、BIGINT。


## 约束
约束类型： | 主键 | 默认值 | 唯一 | 外键 | 非空
-- | -- | -- | -- | -- | --
关键字： | PRIMARY KEY | DEFAULT | UNIQUE | FOREIGN KEY | NOT NULL

```sql
CREATE TABLE department
(
    dpt_name   CHAR(20) PRIMARY KEY,
    people_num INT(10) DEFAULT 10
);
```

```sql
CREATE TABLE employee
(
    id      INT(10),
    name    CHAR(20),
    age     INT(10) DEFAULT 18,
    salary  INT(10) NOT NULL,
    phone   INT(12) NOT NULL,
    in_dpt  CHAR(20) NOT NULL,
    PRIMARY KEY (id, name),
    UNIQUE  KEY (phone),
    CONSTRAINT emp_fk FOREIGN KEY (in_dpt) REFERENCES department(dpt_name)
);
```


