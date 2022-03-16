const initialState = {};

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADER':
            return {
                ...state,
                loader: action.payload.loader,
            }
        default:
            return state;
    }
}

export default loaderReducer;