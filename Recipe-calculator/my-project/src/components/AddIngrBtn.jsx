

const AddIngrBtn = ({onclick}) => {
  return (
    <div>
        <button onClick = {onclick} className="w-full md:w-[300px] p-2 border border-gray-200 rounded-lg font-semibold ">Add ingredient</button>
    </div>
  )
}

export default AddIngrBtn