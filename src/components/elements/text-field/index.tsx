import { useState } from "react"
import { FaEyeSlash } from "react-icons/fa"
import { FiEye } from "react-icons/fi"

export interface TextInputI{
    label?:string 
    errMessage?:string 
    err?:boolean 
    type?:string 
    name:string 
    placeHolder?:string 
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void 
    value:string
}
const TextInput = ({err,errMessage, label,type,name,placeHolder,onChange,value } : TextInputI) => {
    const[isDisclose, setIsDisclose] = useState(false)
  return (
    <div className='flex flex-col mt-2 mb-3'>
    {label && <label className='font-bold'>{label}</label>}
   <div className={`${type === 'password' && 'flex items-center pr-2 justify-between rounded-md bg-grey-100 w-full'}`}>
   <input type={isDisclose ? 'text' : type || 'text'} name={name} className='py-2 outline-none px-2 bg-grey-100  rounded-md w-full' placeholder={placeHolder} value={value} onChange={onChange} />
   {type === 'password' && <div className="cursor-pointer" onClick={() => setIsDisclose(!isDisclose)}>{isDisclose ? <FaEyeSlash/>:  <FiEye />}</div>}
   </div>
    {err && <p className="text-red-500"> {errMessage} </p>}
</div>
  )
}

export default TextInput