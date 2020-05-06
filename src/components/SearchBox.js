import React from 'react';

// we pass the serchChange function as parameter 
const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type = 'search' 
                placeholder='search robots'
                onChange = {searchChange}
            />
        </div>
        
    );
}

export default SearchBox;