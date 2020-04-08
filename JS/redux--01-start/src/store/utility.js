const updateObject = (oldState, updates) => { // update will be a obj ex-{counter: 1}
    return {
        ...oldState,
        ...updates
    };
};
export default updateObject;