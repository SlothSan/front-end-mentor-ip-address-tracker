import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import icon from '../../Assets/imgs/icon-location.svg'
import {useEffect, useState} from "react";
import Leaflet from "leaflet";
import Recenter from "./Recenter/Recenter";

const Map = (props) => {

    const [position, setPosition] = useState([51.505, -0.09])

    const newIcon = new Leaflet.Icon({
        iconUrl: (icon),
        iconSize: [45, 55],
    })


    return (
        <MapContainer
            center={[51.505, -0.09]}
            zoom={15}
            scrollWheelZoom={true}
            zoomControl={false}
            className={"map"}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[props.lat, props.lng]} icon={newIcon}>
            </Marker>
            <Recenter lat={props.lat} lng={props.lng}/>
        </MapContainer>
    )
}

export default Map;
