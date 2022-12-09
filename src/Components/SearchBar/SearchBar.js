import arrow from '../../Assets/imgs/icon-arrow.svg'

const SearchBar = (props) => {
    return (
        <form className={"form-search"}>
            <input type={"text"} className={"input-search"} placeholder={"Search for any IP address or domain"}/>
            <button className={"button-search"}><img src={arrow} alt={"arrow icon"} className={"button-image"}/>
            </button>
        </form>
    )
}

export default SearchBar
