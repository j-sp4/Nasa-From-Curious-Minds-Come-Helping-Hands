const initialState = {
    longitude:19.78154169339535,
    latitude:47.05234925543335,
    marker:false

}
const mapPointerReducer = (state=initialState , action) =>{
    console.log('in the mapPointer reducer', state, action )
    if ( action.type === undefined ){
        return {
            longitude:19.78154169339535,
            latitude:47.05234925543335,
            marker:false
        }
    }

    switch(action.type){
        case 'setPointer':{
            const newState = {...state}
            newState.longitude = action.payload.longitude
            newState.latitude = action.payload.latitude
            newState.marker = true
            return newState
        }
        case 'dragPointerSet':{
            const newState = {...state}
            newState.longitude = action.payload.longitude
            newState.latitude = action.payload.latitude
            return newState
        }
        case 'reset':{
            return initialState
        }
        default:{
            return state
        }
    }

}
export default mapPointerReducer