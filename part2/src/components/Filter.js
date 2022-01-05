import React from 'react';

function Filter({handleFilter}) {
  return (
    <div>
      Filter: <input onChange={handleFilter}/>
    </div>
  );
}

export default Filter;