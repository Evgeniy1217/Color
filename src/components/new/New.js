import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {addGradientActionL, addGradientActionR} from "../../store/fillGradientReducer";
import './new.css'

const New = () => {
    const dispatch = useDispatch()
    const gradientL = useSelector(state => state.gradient.statusL)
    const gradientR = useSelector(state => state.gradient.statusR)
    const history = useHistory()

    const valid ="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})"

    const setGradientL = (e) => {
        const statusL = [e.target.value];
        dispatch({type: "STATUS_L", payload: statusL})
    }
    const setGradientR = (e) => {
        const statusR = e.target.value;
        dispatch({type: "STATUS_R", payload: statusR})
    }

    const addColorL = (gradientsL) => {
        const differentColorL = {
            gradientsL,
            id: Date.now()
        }
        dispatch(addGradientActionL(differentColorL))
    }

    const addColorR = (gradientsR) => {
        const differentColorR = {
            gradientsR,
            id: Date.now()
        }
        dispatch(addGradientActionR(differentColorR))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addColorL(gradientL)
        addColorR(gradientR)
    }

    const transition = () => {
        history.goBack()
    }

    return (
        <form className="was-validated" onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <input onChange={setGradientL} required
                               pattern={valid}
                               placeholder="hex-код в формате # и 3 или 6 цифр или a-f букв"
                               type="text" className="form-control"></input>
                    </div>
                    <div className="col-6">
                        <input onChange={setGradientR} required
                               pattern={valid}
                               placeholder="hex-код в формате # и 3 или 6 цифр или a-f букв"
                               type="text" className="form-control"></input>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button onClick={transition} className="btn btn-info btn-lg" type="submit">добавить градиент
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default New