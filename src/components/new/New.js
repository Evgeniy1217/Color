
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {addGradientActionL, addGradientActionR} from "../../store/fillGradientReducer";
import './new.css'

const New = () =>{
    const dispatch = useDispatch()
    const gradientL = useSelector(state=>state.gradient.statusL)
    const gradientR = useSelector(state=>state.gradient.statusR)
    let history = useHistory()

    const setGradientL= (e) =>{
        const statusL = [e.target.value];
        dispatch({type:"STATUS_L", payload: statusL})
    }
    const setGradientR= (e) =>{
        const statusR = e.target.value;
        dispatch({type:"STATUS_R", payload: statusR})
    }

    const addColorL = (gradientsL)=>{
        const differentColorL = {
            gradientsL,
            id: Date.now()
        }
        dispatch(addGradientActionL(differentColorL))
    }

    const addColorR = (gradientsR)=>{
        const differentColorR = {
            gradientsR,
            id: Date.now()
        }
        dispatch(addGradientActionR(differentColorR))
    }

    const handleSubmitL = (e) =>{
        e.preventDefault()
        addColorL(gradientL)
        addColorR(gradientR)
     }

     const transition = () =>{
        history.goBack()
     }

    return (
        <form onSubmit={handleSubmitL}>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <input onChange={setGradientL} required
                        placeholder = "введите hex-код в формате # и 3 или 6 цифр или a-f букв"
                        type="text" className="form-control"></input>
                </div>
                <div className="col-6">
                    <input onChange={setGradientR} required
                        placeholder = "введите hex-код в формате # и 3 или 6 цифр или a-f букв"
                        type="text" className="form-control" ></input>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button onClick={transition} className="btn btn-info btn-lg" type="submit">добавить градиент</button>
                </div>
            </div>
        </div>
        </form>
    )
}

export default New