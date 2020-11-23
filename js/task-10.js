import users from "./users.js";
// ВАРИАНТ Задание-10
const getSortedUniqueSkills = (users) =>
  users
    .reduce((totalSkills, { skills }) => [...totalSkills, ...skills], [])
    .filter((skill, index, skills) => skills.indexOf(skill) === index)
    .sort();

// {
//   const sortedSkills = users.reduce((totalSkills, user) => {
//     totalSkills.push(...user.skills);
//     return totalSkills;
//   }, []);

//   const set = new Set(sortedSkills);
//   const result = [...set];

//   return result.sort();
// };

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
