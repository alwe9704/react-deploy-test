import React from 'react';
import './SearchField.css'

interface Props {
    handleChange: (a1: string) => void, 
};

function SearchField({handleChange} : Props)
{
    return (
    <input 
        className="searchField"
        type="text" 
        onChange={(element) => {handleChange(element.target.value as string);
    }}/>)
}
export default SearchField;
