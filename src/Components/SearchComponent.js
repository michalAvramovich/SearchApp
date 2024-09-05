import React, { useState } from 'react';

import RowItem from './RowItem';
import CardItem from './CardItem';

/**
 * This component renders an input field and a button to perform a search & display the search results and filter them
 *
 * @returns {ReactNode} A React element that renders a search results.
 */

const SearchComponent = () => {

  const [searchVal, setSearchVal] = useState('')
  const [originalData, setOriginalData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [cardUI, setCardUI] = useState(false);

//This function  makes a call to the API to retrieve the search results of the entered value & save them by useState
  const handleSearch = async () => {
    try {
      const response = await fetch(`https://localhost:7073/api/Search?searchVal=${searchVal}`); 
      const data = await response.json();
      setOriginalData(data);
      setFilteredData(data);
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  //This function changes the search results view to cards
  const handleUIChange = () => {
    setCardUI(!cardUI);
  };

  //This function filters the search results according to Bing search results 
  const handleBingFilter = ()=> {
    if (!originalData) return; 

    const newFilteredData = originalData.filter(item => item.searchEngine ==='bing');
    setFilteredData(newFilteredData);
  };

 //This function filters the search results according to Google search results 
  const handleGoogleFilter = () => {
    if (!originalData) return; 

    const newFilteredData = originalData.filter(item => item.searchEngine ==='google');
    setFilteredData(newFilteredData);
  };

  //This function display all  search results
  const handleAllilter = () => {
    setFilteredData(originalData);
  };

  return (
    <div>
      <input  required="required" placeholder='Enter a value to search' value={searchVal} onChange={e => setSearchVal(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {filteredData &&
      <pre>
      <button onClick={handleGoogleFilter}>Filter google</button>
      <button onClick={handleBingFilter} disabled={!originalData}>Filter bing</button>
      <button onClick={handleAllilter} disabled={!originalData}>All</button>
      <label>
            <input type="checkbox" checked={cardUI} onChange={handleUIChange}/>
              cards ui
            </label> 
      </pre>
      }

      {filteredData &&
         <h3>Search results:</h3>
      }

        {cardUI === false && filteredData && filteredData.map((item, index)  => (
          <RowItem key={index} item={item} />
        ))}

        {cardUI && filteredData && filteredData.map((item, index)  => (
          <CardItem key={index} item={item} />
        ))}
    </div>
  );
};

export default SearchComponent;
