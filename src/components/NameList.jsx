import React from "react";

function NameList() {
  // const name = ["Arpit", "Shubham", "Aman"];
  const person = [
    {
      id: 1,
      name: "sigma",
      age: 20,
      skill: "Technology",
    },
    {
      id: 2,
      name: "Shruti",
      age: 232,
      skill: "Passion",
    },
    {
      id: 3,
      name: "mooda",
      age: 2034,
      skill: "Fashion",
    },
    {
      id: 4,
      name: "doremolls",
      age: 34,
      skill: "E-Commerce",
    },
  ];
  const personList = person.map((person) => (
    // <person person={person} />
    <h2>
      I am {person.name}. I am of {person.age}. I know {person.skill}
    </h2>
  ));

  return <div>{personList}</div>;
}

export default NameList;
