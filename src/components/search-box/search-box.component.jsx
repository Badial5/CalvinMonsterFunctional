
import './search-box.styles.css'


const SearchBox = ({className, placeholder, onChangeHandler}) => {
  
    return (
      <div>
        <input type= 'search' 
        className={`search-box ${className}`}
        // placeholder='Search Monster'
        placeholder={placeholder}
        onChange={onChangeHandler}
        />
      </div>
    )
  }

export default SearchBox