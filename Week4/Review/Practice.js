// working with Complex Objects
const wizardSchool = {
  name: "Arcanum Academy",
  headmaster: "Professor Elara Moonsong",
  houses: [
    {
      name: "Drakeshade",
      animal: "Dragon",
      points: 425,
      students: [
        { name: "Mira Thornfield", year: 2 },
        { name: "Roland Vex", year: 4 },
      ],
    },
    {
      name: "Moonwell",
      animal: "Unicorn",
      points: 510,
      students: [
        { name: "Sylas Wren", year: 1 },
        { name: "Ilyra Dune", year: 3 },
      ],
    },
    {
      name: "Stonehart",
      animal: "Griffin",
      points: 475,
      students: [
        { name: "Darian Blackroot", year: 3 },
        { name: "Fiona Vale", year: 2 },
      ],
    },
  ],
  classes: [
    { name: "Alchemy", professor: "Thalia Emberflask" },
    { name: "Defense Against Dark Arts", professor: "Garrick Thorne" },
    { name: "Charms", professor: "Lira Fenwick" },
  ],
  events: [
    { name: "Midwinter Fair", date: "Dec 21" },
    { name: "House Cup Finals", date: "Jun 10" },
  ],
};

// print the moonwell points of the house
// console.log(wizardSchool.houses[1] = points);


//print the date of the Midwinter fair

// console.log(wizardSchool.classes[0].professor);


// print the name of all the classes; loop through
// for of loop

// //print the name of the house using the for of loop.

// for (let houses of wizardSchool.houses) {

//   console.log(houses.animal);
// }

// print the month of the year with the indext number by accessing the objects
console.log(month.indexOf("June"));



