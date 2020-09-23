export let name = 'hehe';

let name2 = 'jiujiu';

export function setName(newName) {
  name = newName;
  name2 = newName;
}

export { name2 }
