import users from "./users.js";
// ВАРИАНТ Задание-3
const getUsersWithGender = (users, gender) =>
  users.filter((user) => user.gender === gender).map(({ name }) => name);

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
