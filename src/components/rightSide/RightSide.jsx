import DisplayMsg from "./DisplayMsg";
// import MessageBar from "./MessageBar";
import RightHeader from "./RightHeader";

function RightSide() {

  return (
    <div className=" relative xl:flex-[70%] sm:flex-[60%] flex[50%] bg-[#e5ddd5] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[100%] before:h-[100%]">
      <RightHeader />
      <DisplayMsg />
      {/* <MessageBar/> */}
    </div>
  )
}

export default RightSide;