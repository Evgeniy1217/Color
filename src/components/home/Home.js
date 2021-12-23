import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteGradientActionL, deleteGradientActionR} from "../../store/fillGradientReducer";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch()
    const gradientL = useSelector(state => state.gradient.gradientL)
    const gradientR = useSelector(state => state.gradient.gradientR)
    let navigate = useNavigate()

    let keysL = 10
    let keysR = 100

    const deleteGradientL = (gradL) => {
        dispatch(deleteGradientActionL(gradL.id))
    }

    const deleteGradientR = (gradR) => {
        dispatch(deleteGradientActionR(gradR.id))
    }

    const colorsL = gradientL.map((el) =>
        <div key={keysL++}
             style={{
                 backgroundColor: el.gradientsL,
                 height: 50,
                 border: '1px solid black',
                 marginTop: 2,
                 padding: 10
             }}>
            {el.gradientsL}
            <svg onClick={()=>navigate("/edit")}
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="rounded float-end bi bi-pencil-fill" viewBox="0 0 16 16">
                <path
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>

            <svg onClick={(() => deleteGradientL(el))}
                 xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="rounded float-end  bi bi-file-excel" viewBox="0 0 16 16">
                <path
                    d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z"/>
                <path
                    d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
            </svg>
        </div>)

    const colorsR = gradientR.map((el) =>
        <div key={keysR++}
             style={{
                 backgroundColor: el.gradientsR,
                 height: 50,
                 border: '1px solid black',
                 marginTop: 2,
                 padding: 10
             }}>
            {el.gradientsR}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="rounded float-end bi bi-pencil-fill" viewBox="0 0 16 16">
                <path
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>

            <svg onClick={(() => deleteGradientR(el))}
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