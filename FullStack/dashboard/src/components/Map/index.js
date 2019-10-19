import React from "react";
import {render} from 'react-dom';
import MapGl from "react-map-gl";
import Title from "../Title";
import { connect } from "react-redux";
import {setViewportAction, setMapStyleAction} from "../../store/actions";
import ControlPanel from './control-panel';


const Map = props => {

  console.log('in the Map')
  console.log(props.containerComponent)

  return (
    <>
      <Title>Its the end of the wolrd as we know it</Title>

      <MapGl
        {...props.viewport}
        onViewportChange={props.setViewport}
        mapStyle={props.mapStyle}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      >
        <ControlPanel
          onChange={props.setMapStyle}
        />
      </MapGl>
    </>
  );
};
const MapStateToProps = state => {
  return { 
    viewport: state.viewport,
    mapStyle: state.mapStyle
   };
};
const MapDispatchToProps = dispatch => {
  return {
    setViewport: (viewport) => {
        return dispatch(setViewportAction(viewport))
    },
    setMapStyle: (mapStyle) => {
      console.log('in the dispatch')
      console.log(mapStyle)
      return dispatch(setMapStyleAction(mapStyle))
    }
  };
};
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Map);