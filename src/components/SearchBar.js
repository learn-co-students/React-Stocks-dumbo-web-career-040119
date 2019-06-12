import React from 'react';

const SearchBar = (props) => {

  const handleChange = (event) => {
    props.sort(event.target.value)
  }

  const handleFilter = (event) => {
    props.setFilter(event.target.value)
  }

  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input name="button" type="radio" value="Alphabetically"  onChange={handleChange}/>
        Alphabetically
      </label>
      <label>
        <input name="button" type="radio" value="Price" onChange={handleChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Type">Filter:</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
