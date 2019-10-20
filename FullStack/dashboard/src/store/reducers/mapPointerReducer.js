const initialState = {
    longitude:0,
    latitude:0,
    marker:false

}
const mapPointerReducer = (state=initialState , action) =>{
    console.log('in the mapPointer reducer', state, action )
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
        default:{
            return state
        }
    }

}
export default mapPointerReducer