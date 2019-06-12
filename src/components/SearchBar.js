import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="checkbox" value="Alphabetically" checked={null} 
        onChange={() => {props.sort("Alphabetically")}}/>
        Alphabetically
      </label>
      <label>
        <input type="checkbox" value="Price" checked={null} onChange={() => {props.sort("Price")}}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => {props.filter(event.target.value)}}>
          <option value=""> All </option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
