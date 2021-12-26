const defaultState = {
    statusL: "",
    statusR: "",
    gradientL: [],
    gradientR: [],
    distributeHexL: "",
    distributeHexR: ""
}
const STATUS_L = "STATUS_L"
const STATUS_R = "STATUS_R"
const ADD_GRADIENT_L = "ADD_GRADIENT_L"
const ADD_GRADIENT_R = "ADD_GRADIENT_R"
const DELETE_GRADIENT_L = "DELETE_GRADIENT_L"
const DELETE_GRADIENT_R = "DELETE_GRADIENT_R"
const DISTRIBUTE_HEX_L = "DISTRIBUTE_HEX_L"
const DISTRIBUTE_HEX_R = "DISTRIBUTE_HEX_R"

export const fillGradientReducer = (state = defaultState, action) => {
    switch (action.type) {
        case STATUS_L:
            return {...state, statusL: action.payload}
        case STATUS_R:
            return {...state, statusR: action.payload}
        case ADD_GRADIENT_L:
            return {...state, gradientL: [...state.gradientL, action.payload]}
        case ADD_GRADIENT_R:
            return {...state, gradientR: [...state.gradientR, action.payload]}
        case DELETE_GRADIENT_L:
            return {...state, gradientL: state.gradientL.filter(gradL => gradL.id !== action.payload)}
        case DELETE_GRADIENT_R:
            return {...state, gradientR: state.gradientR.filter(gradR => gradR.id !== action.payload)}
        case DISTRIBUTE_HEX_L:
            return {...state, distributeHexL: action.payload}
        case DISTRIBUTE_HEX_R:
            return {...state, distributeHexR: action.payload}

        default:
            return state
    }
}

export const addGradientActionL = (payload) => ({type: "ADD_GRADIENT_L", payload})
export const addGradientActionR = (payload) => ({type: "ADD_GRADIENT_R", payload})
export const deleteGradientActionL = (payload) => ({type: "DELETE_GRADIENT_L", payload})
export const deleteGradientActionR = (payload) => ({type: "DELETE_GRADIENT_R", payload})
