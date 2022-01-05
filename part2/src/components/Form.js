import React from 'react';

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.addNewPerson}>
        <div>
          Name: <input onChange={props.handleNoteChange} value={props.newName}/>
        </div>
        <div>
          Phone number: <input onChange={props.handleNumChange} value={props.newNum}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      </div>
  );
};

export default Form;