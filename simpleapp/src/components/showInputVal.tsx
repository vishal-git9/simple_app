import { useAppSelector } from "../redux/hook"

export const ShowInputVal = () => {
    const storeVal = useAppSelector((store)=>store.data)
    console.log(storeVal)
  return (
    <div>{storeVal.length===0 && "No value found" || storeVal}</div>
  )
}
