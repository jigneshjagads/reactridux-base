const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT" : return state + action.payloadCustomName;
        case "DECREMENT" : return state - action.payloadCustomName;
        default: return state;
    }
}

export default changeTheNumber;