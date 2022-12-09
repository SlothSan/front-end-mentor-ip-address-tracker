import './App.css';
import Container from "./Components/Container/Container";
import HeaderTitle from "./Components/HeaderTitle/HeaderTitle";
import SearchBar from "./Components/SearchBar/SearchBar";
import {useEffect, useState} from "react";
import InfoText from "./Components/InfoText/InfoText";
import Map from "./Components/Map/Map";

function App() {
    const [input, setInput] = useState('');
    const [apiData, setApiData] = useState({})
    const [ipAddress, setIpAddress] = useState('');
    const [location, setLocation] = useState('');
    const [timezone, setTimezone] = useState('');
    const [isp, setIsp] = useState('')


    const getInformationFromApi = async () => {
        let results = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_qPzluB4842JdQoj6K5UcpjbhrZr49');
        let resultsJson = await results.json();
        setApiData(resultsJson);
    }

    useEffect(() => {
        getInformationFromApi()
            .catch(console.error);
    }, [])

    useEffect(() => {
        if (Object.keys(apiData).length !== 0) {
            setIpAddress(apiData.ip)
            setLocation(`${apiData.location.city}, ${apiData.location.region} ${apiData.location.postalCode}`)
            setTimezone(`UTC ${apiData.location.timezone}`)
            setIsp(apiData.isp)
        }
    }, [apiData])

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
            <Map id={"map"}/>
        </div>
    );
}

export default App;
