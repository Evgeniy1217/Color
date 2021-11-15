import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteGradientActionL, deleteGradientActionR} from "../../store/fillGradientReducer"

const Home = () => {
    const dispatch = useDispatch()
    const gradientL = useSelector(state => state.gradient.gradientL)
    const gradientR = useSelector(state => state.gradient.gradientR)

    let keysL = 10
    let keysR = 100

    const deleteGradientL = (gradL) => {
        dispatch(deleteGradientActionL(gradL.id))
    }

    const deleteGradientR = (gradR) => {
        dispatch(deleteGradientActionR(gradR.id))
    }

    const colorsL = gradientL.map((arr) =>
        <div key={keysL++}
             style={{
                 backgroundColor: arr.gradientsL,
                 height: 50,
                 border: '1px solid black',
                 marginTop: 2,
                 padding: 10
             }}>
            {arr.gradientsL}
            <svg onClick={(() => deleteGradientL(arr))}
                 xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="rounded float-end  bi bi-file-excel" viewBox="0 0 16 16">
                <path
                    d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z"/>
                <path
                    d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
            </svg>
        </div>)

    const colorsR = gradientR.map((arr) =>
        <div key={keysR++}
             style={{
                 backgroundColor: arr.gradientsR,
                 height: 50,
                 border: '1px solid black',
                 marginTop: 2,
                 padding: 10
             }}>
            {arr.gradientsR}
            <svg onClick={(() => deleteGradientR(arr))}
                 xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="rounded float-end bi bi-file-excel" viewBox="0 0 16 16">
                <path
                    d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z"/>
                <path
                    d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
            </svg>
        </div>)

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {colorsL}
                </div>
                <div className="col-6">
                    {colorsR}
                </div>
            </div>
        </div>
    )
}

export default Home