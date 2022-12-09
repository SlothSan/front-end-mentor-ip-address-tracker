import './App.css';
import Container from "./Components/Container/Container";
import HeaderTitle from "./Components/HeaderTitle/HeaderTitle";
import SearchBar from "./Components/SearchBar/SearchBar";
import {useEffect, useState} from "react";
import InfoText from "./Components/InfoText/InfoText";
import Map from "./Components/Map/Map";

function App() {
    const [input, setInput] = useState('');
    const [runSearch, setRunSearch] = useState(false);
    const [apiData, setApiData] = useState({})
    const [ipAddress, setIpAddress] = useState('');
    const [location, setLocation] = useState('');
    const [timezone, setTimezone] = useState('');
    const [isp, setIsp] = useState('')
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);


    const getInformationFromApi = async (url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_qPzluB4842JdQoj6K5UcpjbhrZr49`) => {
        let results = await fetch(url);
        let resultsJson = await results.json();
        setApiData(resultsJson);
    }

    useEffect(() => {
        getInformationFromApi()
            .catch(console.error);
    }, [])

    useEffect(() => {
        //TODO needs error handling if it can't match a IP or a Domain :(
        if (runSearch) {
            const regexExpIp = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
            if (regexExpIp.test(input)) {
                let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_qPzluB4842JdQoj6K5UcpjbhrZr49&ipAddress=${input}`
                getInformationFromApi(url)
                    .catch(console.error);
            } else {
                let url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_qPzluB4842JdQoj6K5UcpjbhrZr49&domain=${input}`
                getInformationFromApi(url)
                    .catch(console.error);
            }
            setRunSearch(!runSearch)
        }
    }, [runSearch])

    useEffect(() => {
        if (Object.keys(apiData).length !== 0) {
            setIpAddress(apiData.ip)
            setLocation(`${apiData.location.city}, ${apiData.location.region} ${apiData.location.postalCode}`)
            setTimezone(`UTC ${apiData.location.timezone}`)
            setIsp(apiData.isp)
            setLat(apiData.location.lat);
            setLng(apiData.location.lng);
        }
    }, [apiData])

    return (
        <div className="App">
            <Container className={"header-container"}>
                <HeaderTitle title={"IP Address Tracker"} className={"header-title"}/>
                <SearchBar input={input} setInput={setInput} runSearch={runSearch} setRunSearch={setRunSearch}/>
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
            </Container>>
            <Map lat={lat} lng={lng}/>
        </div>
    );
}

export default App;
