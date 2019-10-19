import React from "react";
import MapGl from "react-map-gl";
import Title from "../Title";
import { connect } from "react-redux";
import {setViewportAction} from "../../store/actions";
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import Geocoder from 'react-map-gl-geocoder'

class Map extends React.Component{
    mapRef = React.createRef()

    handleGeocoderViewportChange = (viewport) =>{
        return this.props.setViewport(viewport)
    }
    render(){
        return (
            <>
            <Title>Its the end of the wolrd as we know it</Title>

            <MapGl
                ref={this.mapRef}
                {...this.props.viewport}
                onViewportChange={this.props.setViewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
            >
                <Geocoder
                mapRef={this.mapRef}
                onViewportChange={this.handleGeocoderViewportChange}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
                />
            </MapGl>
            </>
    );}
};
const MapStateToProps = state => {
  return { viewport: state.map };
};
const MapDispatchToProps = dispatch => {
  return ({
        setViewport: (viewport, ...args) => {
            console.log(args)
            return dispatch(setViewportAction(viewport))},
  });
};
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Map);
