import React from "react";
import MapGl , {Marker}from "react-map-gl";
import Title from "../Title";
import { connect } from "react-redux";
import { setViewportAction, dragPointerAction, setPointerAction } from "../../store/actions";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import Geocoder from "react-map-gl-geocoder";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button'

class Map extends React.Component {
  mapRef = React.createRef();
  handleGeocoderViewportChange = viewport => {
    return this.props.setViewport(viewport);
  };
  render() {
    return (
      <>
        <Title>Select Your Chosen Location</Title>

        <MapGl
          ref={this.mapRef}
          {...this.props.viewport}
          onViewportChange={this.props.setViewport}
          onClick={this.props.setMapPointer}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        >
          <Geocoder
            mapRef={this.mapRef}
            onViewportChange={this.handleGeocoderViewportChange}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
          />
          {this.props.pointer.marker ? <Marker latitude={this.props.pointer.longitude} longitude={this.props.pointer.latitude} offsetLeft={-20} offsetTop={-10} draggable={true}  onDragEnd={this.props.setMapPointer}>
          <SvgIcon color = 'primary'>
              <LocationOnIcon/>
            </SvgIcon>
              
        </Marker> : null}
        </MapGl>
        <Button variant="contained" color="primary" >
        Confirm
      </Button>
      </>
    );
  }
}
const MapStateToProps = state => {
  return { viewport: state.map,
            pointer: state.pointer };
};
const MapDispatchToProps = dispatch => {
  return {
    setViewport: (viewport, ...args) => {
      console.log(args);
      return dispatch(setViewportAction(viewport));
    },
    dragSetMapPointer: (event)=>{
        return dispatch(dragPointerAction(event.lngLat))
    },
    setMapPointer: (event)=>{
        return dispatch(setPointerAction(event.lngLat))
    }

  };
};
export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Map);
