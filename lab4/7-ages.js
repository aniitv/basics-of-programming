"use strict";
const ages = (persons) => {
  const lifeAges = {};

  for (const personName in persons) {
    const birthDate = persons[personName].born;
    const deathDate = persons[personName].died;

    const age = deathDate - birthDate;
    lifeAges[personName] = age;
  }

  return lifeAges;
};
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
