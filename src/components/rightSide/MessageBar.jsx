import { useState } from "react";

const MessageBar = () => {
  const [inputData, setInputData] = useState("");
  const [msg, setMsg] = useState([]);
  const hour = new Date().getHours();
  const min = new Date().getMinutes();

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputData(e.target.value);
  };

  const addMsg = () => {
      if (!inputData) {
        return;
      } else {
        setMsg([...msg, inputData]);
        setInputData("");
      }
    }
  document.addEventListener('keyup', (e) =>{
    if (e.key == "Enter") {
        addMsg()
    }

  })

  return (
    <>
      {msg.map((ele, index) => {
        return (
          <>
            <div
              className="relative flex w-[100%] my-1 justify-end"
              key={index}
            >
              <p className="relative right-0 text-right max-w-[65%] p-3 rounded-xl text-sm bg-[#fff]">
                {ele}
                <br />
                <span className=" text-xs text opacity-[0.5]">
                  {hour} : {min}
                </span>
              </p>
            </div>
          </>
        );
      })}
      <div className="absolute bottom-0 left-0 w-[100%] h-[60px] bg-[#f0f0f0] p-4 flex justify-between items-center ">
        <i className="fa-regular fa-face-smile cursor-pointer text-2xl text-[#51585c]"></i>
        <i className="fa-solid fa-paperclip cursor-pointer text-2xl text-[#51585c] mx-2"></i>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Type a message"
          className="relative w-[90%] m-5 h-[48px] px-5 py-5 border-none outline-0 rounded-[30px] text-base"
          onChange={handleChange}
          value={inputData}
        />
        <button onClick={addMsg}>
          <i className="fa-brands fa-telegram text-3xl"></i>
        </button>
      </div>
    </>
  );
};

export default MessageBar;
