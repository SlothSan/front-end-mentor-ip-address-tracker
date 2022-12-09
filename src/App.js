import './App.css';
import Container from "./Components/Container/Container";
import HeaderTitle from "./Components/HeaderTitle/HeaderTitle";

function App() {
    return (
        <div className="App">
            <Container className={"header-container"}>
                <HeaderTitle title={"IP Address Tracker"} className={"header-title"}/>
            </Container>
        </div>
    );
}

export default App;
