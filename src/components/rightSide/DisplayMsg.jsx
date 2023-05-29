import FriendMsg from "./FriendMsg";
import MessageBar from "./MessageBar";
// import MyMsg from "./MyMsg";


function DisplayMsg() {


  return (
    <>
     <div className="w-[100%] h-[calc(100%-120px)] p-12 overflow-y-auto ">
      <FriendMsg />
      {/* <MyMsg /> */}
      <MessageBar />
      </div>
    </>

  );
}

export default DisplayMsg;
