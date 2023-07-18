const CreateNewJobReducer = (state, action) => {
    switch (action.type) {
        case "SAVE": {
            return {
                data: [...state.data, ...action.payload],
            };
        }
        default:
            return state;
    }
};

export default CreateNewJobReducer;