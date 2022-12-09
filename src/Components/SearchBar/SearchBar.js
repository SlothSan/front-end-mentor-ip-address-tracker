import arrow from '../../Assets/imgs/icon-arrow.svg'

const SearchBar = (props) => {

    const handleSearchInput = (event) => {
        event.preventDefault();
        props.setInput(event.target.value);
    }

    const handleSearchButtonClick = (event) => {
        event.preventDefault()
        props.setRunSearch(true);
    }

    return (
        <form className={"form-search"}>
            <input type={"text"} value={props.input} className={"input-search"}
                   placeholder={"Search for any IP address or domain"} onChange={handleSearchInput}/>
            <button onClick={handleSearchButtonClick} className={"button-search"}>
                <img src={arrow} alt={"arrow icon"}
                     className={"button-image"}/>
            </button>
        </form>
    )
}

export default SearchBar
