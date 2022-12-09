import './App.css';
import Container from "./Components/Container/Container";
import HeaderTitle from "./Components/HeaderTitle/HeaderTitle";
import SearchBar from "./Components/SearchBar/SearchBar";
import {useState} from "react";
import InfoText from "./Components/InfoText/InfoText";

function App() {
    const [input, setInput] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const [location, setLocation] = useState('');
    const [timezone, setTimezone] = useState('');
    const [isp, setIsp] = useState('')

    return (
        <div className="App">
            <Container className={"header-container"}>
                <HeaderTitle title={"IP Address Tracker"} className={"header-title"}/>
                <SearchBar/>
                <Container className={"information-container"}>
                    <Container className={"infotext-container"}>
                        <InfoText className={"infotext-header"} text={"IP ADDRESS"}/>
                        <InfoText className={"infotext"} text={ipAddress}/>
                    </Container>
                    <Container className={"infotext-container"}>
                        <InfoText className={"infotext-header"} text={"LOCATION"}/>
                        <InfoText className={"infotext"} text={location}/>
                    </Container>
                    <Container className={"infotext-container"}>
                        <InfoText className={"infotext-header"} text={"TIMEZONE"}/>
                        <InfoText className={"infotext"} text={timezone}/>
                    </Container>
                    <Container className={"infotext-container"}>
                        <InfoText className={"infotext-header"} text={"ISP"}/>
                        <InfoText className={"infotext"} text={isp}/>
                    </Container>
                </Container>
            </Container>
        </div>
    );
}

export default App;
