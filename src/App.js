import './App.css';
import Container from "./Components/Container/Container";
import HeaderTitle from "./Components/HeaderTitle/HeaderTitle";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
    return (
        <div className="App">
            <Container className={"header-container"}>
                <HeaderTitle title={"IP Address Tracker"} className={"header-title"}/>
                <SearchBar/>
            </Container>
        </div>
    );
}

export default App;
