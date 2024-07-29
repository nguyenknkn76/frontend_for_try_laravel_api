import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setMsg } from "../../reducers/MessageReducer"

const Notification =  () => {
    const dispatch = useDispatch()
    const msg = useSelector(state => state.message)

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(setMsg(''))
        },3000)
    },[msg])

    return (
        <div>
            {msg}
        </div>
    )
}

export default Notification