// This component is not rendering anywhere 
import { useSelector } from "react-redux";

function MyMsg() {
  const hour = new Date().getHours();
  const min = new Date().getMinutes();

  const data = useSelector((state) => {
    return state.whatsapp;
  });

  console.log(data);
  return (
    <div className="relative flex w-[100%] my-1 justify-end ">
      <p className="relative right-0 text-right max-w-[65%] p-3 rounded-xl text-sm bg-[#fff]">
        {data}
        <br />
        <span className=" text-xs text opacity-[0.5]">
          {hour} : {min}
        </span>
      </p>
    </div>
  );
}

export default MyMsg;
