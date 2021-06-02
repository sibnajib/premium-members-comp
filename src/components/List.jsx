import React from "react";

const List = ({ poko }) => {
  return (
    <>
      {poko.map((person) => {
        const { id, name, age, bio } = person;
        return (
          <article className="person" key={id}>
            <img src={bio} alt="biopic" />
            <div className="perso">
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
