import React from 'react'
import MapGl from 'react-map-gl'

const Map = (props) => {
    
    return (
        <MapGl 
        longitude={props.longitude}
        latitude={props.latitude}
        width={props.width}
        height={props.height}
        zoom={props.zoom}
        mapboxApiAccessToken ={process.env.REACT_APP_MAPBOX_API_KEY}
        >
        </MapGl>
    )
}
const MapStateToProps = () =>{

}
export default Map