import users from "./users.js";
// ВАРИАНТ Задание-10
const getSortedUniqueSkills = (users) =>
  users
    .reduce((totalSkills, { skills }) => [...totalSkills, ...skills], [])
    .filter((skill, index, skills) => skills.indexOf(skill) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
