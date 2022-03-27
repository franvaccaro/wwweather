const initialState = { location: [] };

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LOCATION':
            return {
                ...state,
                location: [{
                    city: action.payload.city,
                    country: action.payload.country,
                    coords: action.payload.coords[0]
                }]
            }
        default:
            return state;
    }
}

export default locationReducer;