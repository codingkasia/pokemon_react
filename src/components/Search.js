import React from "react";

const Search = props => {
    
    return <input onChange={e => props.updateSearchTerm(e.target.value)} />;
};
export default Search;
