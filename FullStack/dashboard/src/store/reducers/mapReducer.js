// import {mapStyle} from '../../components/Map/mapStyles/styles.js';

const firstRenderState ={
    longitude:47.3769,
    latitude:8.5417,
    width: '100%',
    height: '100%', 
    zoom: 5,
    // mapStyle: mapStyle
    
}

const mapReducer = (state = firstRenderState, action) =>{
    console.log('in the reducer', state )
    switch(action.type){
        case 'setViewport':{
            const newState = action.payload
            newState.width = '100%';
            newState.height = '100%';
            // newState.mapStyle = mapStyle
            return newState
        }
        case 2:{

        }
        default:{
            return state
        }
    }

}
export default mapReducer
