const firstRenderState = ''

const mapStyleReducer = (state = firstRenderState, action) =>{
    //console.log('in the reducer', action )
    switch(action.type){
        case 'setMapStyle':{
            const newState = action.payload
            return newState
        }
        default:{
            return state
        }
    }

}
export default mapStyleReducer
