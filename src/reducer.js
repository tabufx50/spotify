export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE after finishing developing
     // token: "BQBioqolesA5kFWJLJv5Ua9MNHAdU76Qz7fFIFtOIgATrXZxXStIEce7ltbwmZsxcILLX695h0FLu3HJqVcZPTrP5Fy1ksQVH4A7Qp_NRRfzhmT3mAG6dAEiwiALjd1tLDNDGj5c55Ia5YbHlge9CGZ_6cgS",
};

const reducer = (state, action) => {
console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token,
                };

            case 'SET_PLAYLISTS':
                return {
                    ...state,
                    playlists: action.playlists,
                };    

            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,   
                    discover_weekly: action.discover_weekly,

                };


            default: 
                return state;

    }
};

export default reducer;