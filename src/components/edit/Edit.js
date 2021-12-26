import React from "react";
import {useDispatch, useSelector} from "react-redux";

const Edit = () => {
    const dispatch = useDispatch()
    const hexL = useSelector(state => state.gradient.distributeHexL)
    const hexR = useSelector(state => state.gradient.distributeHexR)

    const valid = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})"

    const setGradientL = (e) => {
        dispatch({type: "STATUS_L", payload: e.target.value})
    }
    const setGradientR = (e) => {
        dispatch({type: "STATUS_R", payload:e.target.value})
    }

    return (
            <div className="was-validated">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <input onChange={setGradientL} required
                                   pattern={valid}
                                   placeholder={hexL}
                                   type="text"
                                   className= { hexL ? "form-control" : "d-none"}
                            />

                        </div>
                        <div className="col-6">
                            <input onChange={setGradientR} required
                                   pattern={valid}
                                   placeholder={hexR}
                                   type="text"
                                   className={ hexR ? "form-control" : "d-none"}/>

                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-info btn-lg"
                            >
                                correct gradient
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Edit