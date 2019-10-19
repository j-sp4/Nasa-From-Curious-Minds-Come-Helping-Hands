import React from "react";
import MapGl from "react-map-gl";
import Title from "../Title";
import {connect} from 'react-redux'

const Map = props => {
  return (
    <>
      <Title>The wolrd as we know it</Title>

      <MapGl
        {...props.viewport}
        onViewportChange={props.setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      ></MapGl>
    </>
  );
};
const MapStateToProps = (state) => {
   return { viewport: state.map }
};
const MapDispatchToProps = (dispatch) => {
    return {
        setViewport: (viewport)=>{
            return(
                dispatch({type: 'setViewport', payload: viewport})
            )
        
    }}
};
export default connect(MapStateToProps, MapDispatchToProps)(Map);
