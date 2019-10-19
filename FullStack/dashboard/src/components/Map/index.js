import React from 'react'
import MapGl from 'react-map-gl'

const Map = (props) => {
    
    return (
        <MapGl {...props}
        mapboxApiAccessToken ={process.env.REACT_APP_MAPBOX_API_KEY}>
        </MapGl>
    )
}

export default Map