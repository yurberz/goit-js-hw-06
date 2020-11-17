import users from "./users.js";
// ВАРИАНТ Задание-7
const calculateTotalBalance = (users) =>
  users.reduce((totalBalance, { balance }) => (totalBalance += balance), 0);

console.log(calculateTotalBalance(users)); // 20916
