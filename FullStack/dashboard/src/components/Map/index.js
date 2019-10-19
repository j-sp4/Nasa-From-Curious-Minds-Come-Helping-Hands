import React from "react";
import MapGl from "react-map-gl";
import Title from "../Title";
import { connect } from "react-redux";
import {setViewportAction} from "../../store/actions";

const Map = props => {
  return (
    <>
      <Title>Its the end of the wolrd as we know it</Title>

      <MapGl
        {...props.viewport}
        onViewportChange={props.setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      >
      </MapGl>
    </>
  );
};
const MapStateToProps = state => {
  return { viewport: state.map };
};
const MapDispatchToProps = dispatch => {
  return {
    setViewport: (viewport, ...args) => {
        console.log(args)
        return dispatch(setViewportAction(viewport))}
  };
};
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Map);
