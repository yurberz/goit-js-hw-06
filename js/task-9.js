import users from "./users.js";
// ВАРИАНТ Задание-9
const getNamesSortedByFriendsCount = (users) =>
  [...users]
    .sort((min, max) => min.friends.length - max.friends.length)
    .map(({ name }) => name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
