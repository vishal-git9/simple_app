import { handleComponentChange } from "../redux/change/change.actions"
import { useAppDispatch, useAppSelector } from "../redux/hook"

export const ChangeInput = () => {
    const storeVal = useAppSelector((store)=>store.data)
    const dispatch = useAppDispatch()
    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        dispatch(handleComponentChange(e.target.value))
    }
    
  return (
    <div>
        <input type="text" value={storeVal || ""} placeholder="Type something" onChange={handleChange} />
    </div>
  )
}
