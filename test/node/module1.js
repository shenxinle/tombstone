let name2 = 'jiujiu';

exports.name = 'hehe';
exports.name2 = name2;

exports.setName = (newName) => {
  exports.name = newName;
  name2 = newName;
}