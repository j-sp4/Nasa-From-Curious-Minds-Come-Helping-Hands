export const setViewportAction = (viewport)=>({type: 'setViewport', payload: viewport})

export const dragPointerAction = (lngLat) => ({type: 'dragPointerSet', payload: {longitude:lngLat[1], latitude:lngLat[0]}})

export const setPointerAction = (lngLat) => ({type:'setPointer', payload: {longitude:lngLat[1], latitude:lngLat[0]}})