function SearchBar(props){
    const { SearchByContent, onChangeSearchInput } = props;
    return(
        <div>
            <nav className="d-flex" style={{borderBottom: '2px solid whitesmoke'}}>
                <input onChange={onChangeSearchInput} style={{border: 'none', fontSize: 18, outline: 'none'}} className="mx-3" placeholder="Search Twitter" ></input>
                <button onClick={SearchByContent} style={{color:'white', backgroundColor: '#1D9BF0', borderRadius:20, height:40, width:75, border:'none'}}>Search</button>    
            </nav>
        </div>
    );
}

export default SearchBar;