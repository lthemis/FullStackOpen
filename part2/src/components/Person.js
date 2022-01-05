import React from 'react';

const Person = (props) => {
  return (
    <div>
        <h2>Numbers</h2>
        {props.persons.filter(person => {
          if (props.filterVal.length > 0){
            return person.name.toLowerCase().includes(props.filterVal.toLowerCase())
          }
          return person
        }).map(person => {
          return <p key={person.id}>{person.name} {person.num}</p>
        })}
    </div>
  );
};

export default Person;