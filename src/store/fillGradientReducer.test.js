import fillGradientReducer, {addGradientActionL} from './fillGradientReducer'
import React from 'react';
import "../components/app/App"

const state = {
    statusL: "",
    statusR: "",
    gradientL: [],
    gradientR: [],
    distributeHexL: "",
    distributeHexR: ""
}
test('a new left-sided gradient should be added', () =>{
    let action = addGradientActionL("adf");
    let newState = fillGradientReducer(state, action);
    expect (newState.gradientL.length).toBe(1)
})


test('a new right-handed gradient should be added', () =>{
    let action = addGradientActionR(payload);
    let newState = fillGradientReducer(state, action);
    expect (newState.gradientR.length).toBe(1)
})
test('the left side gradient should be removed', () =>{
    const action = deleteGradientActionL(payload);
    const newState = fillGradientReducer(state, action);
    expect (newState.gradient.length).toBe(newState.gradient.length-1)
})
test('the right-hand gradient should be removed', () =>{
    const action = deleteGradientActionR(payload);
    const newState = fillGradientReducer(state, action);
    expect (newState.gradient.length).toBe(newState.gradient.length-1)
})

