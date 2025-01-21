

// eslint-disable-next-line react/prop-types
const GenerateBtn = ({onclick}) => {


  return (
    <div className="p-5">
      <button className="w-full md:w-[300px] p-2 text-white bg-black rounded-lg font-semibold " onClick={onclick}>
        Resize recipe
      </button>
    </div>
  );
};

export default GenerateBtn;
