import React, { useState } from "react";
import data from "./data";
const Birthday = () => {
  const [people, setPeople] = useState(data);
  return (
    <div className="container">
      <h1>{people.length} birthdays today</h1>
      <BirthdayComp people={people} />
      <button onClick={() => setPeople([])}>clear all</button>
    </div>
  );
};

const BirthdayComp = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { name, age, image } = person;
        return (
          <section className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Birthday;
