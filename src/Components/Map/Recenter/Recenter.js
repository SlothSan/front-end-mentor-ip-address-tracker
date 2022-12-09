import {useMap} from "react-leaflet";
import {useEffect} from "react";

const Recenter = (props) => {
    const map = useMap();
    useEffect(() => {
        map.setView([props.lat, props.lng])
        map.setZoom(14)
    }, [props.lat, props.lng]);
    return null;
}

export default Recenter
