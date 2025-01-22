/* eslint-disable react/prop-types */



const InputField = ({title ,name , value ,  onchange , placeholder}) => {
  return (
    <div className="flex flex-col flex-grow">
        <label className='font-semibold'>{title}</label>
        <input name={name} value={value} onChange={onchange}  type="text" placeholder={placeholder} className="w-full p-2 border border-gray-200 rounded-lg outline-none" />
    </div>
  )
}



export default InputField