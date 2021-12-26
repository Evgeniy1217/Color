import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addGradientActionL, addGradientActionR} from "../../store/fillGradientReducer";
import "./new.css"

const New = () => {
    const dispatch = useDispatch()
    const gradientL = useSelector(state => state.gradient.statusL)
    const gradientR = useSelector(state => state.gradient.statusR)
    let navigate = useNavigate()

    const valid = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})"

    const setGradientL = (e) => {
        dispatch({type: "STATUS_L", payload: e.target.value})
    }
    const setGradientR = (e) => {
        dispatch({type: "STATUS_R", payload:e.target.value})
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
    return (
        <form className="was-validated" onSubmit={handleSubmit}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <input onChange={setGradientL} required
                               pattern={valid}
                               placeholder="hex-код в формате # и 3 или 6 цифр или aA-fF букв"
                               type="text"
                               className="form-control"
                        />

                    </div>
                    <div className="col-6">
                        <input onChange={setGradientR} required
                               pattern={valid}
                               placeholder="hex-код в формате # и 3 или 6 цифр или aA-fF букв"
                               type="text"
                               className="form-control"
                        />

                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button onClick={()=>navigate(-1)}
                                className="btn btn-info btn-lg"
                                type="submit">
                            add gradient
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default New