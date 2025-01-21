/* eslint-disable react/prop-types */


const ClearBtn = ({onclick} ) => {
  return (
    <div>
        <button onClick={onclick} className="w-full md:w-[200px] p-2 border border-gray-200 rounded-lg font-semibold ">Clear</button>
    </div>
  )
}

export default ClearBtn