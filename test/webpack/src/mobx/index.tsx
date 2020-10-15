import { observable, autorun } from 'mobx';

const obj = observable({
  a: 1,
  b: 2
});

autorun(() => {
  console.log('----', obj.a)
});

obj.a = 2;
obj.b = 4;