let defaultState = {
    sentfilterText:''
}

const reducer = (state = defaultState,action) => {
    console.log(state,action)
    switch (action.type) {
        case 'sentfilterText':
            return Object.assign({},state,action)
        default:
            return {}
    }
}

module.exports = {
    reducer
}