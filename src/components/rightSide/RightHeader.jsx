import "./RightHeader.css"

function RightHeader() {
  return (
    <div className=" relative w-[100%] h-[60px] bg-[#ededed]  flex justify-between items-center px-[15px]">
      <div className="flex">
      <div className=" relative w-[40px] h-[40px] rounded-full overflow-hidden">
        <img
          src="src\Image\virat-kohli.webp"
          alt="profile_image"
          className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className=" mb-1 ml-2">
        <h4 className=" text-lg text-black mess overflow-hidden text-ellipsis">Anubhav Sharma</h4>
        <p className="text-sm text-[#aaa]">online</p>
      </div>
      </div>
      
      <div className=" relative flex justify-between h-[100%] md:text-xl items-center cursor-pointer text-[#51585c] mr-2">
        <i className="fa-solid fa-magnifying-glass text-lg mr-5"></i>
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>
  );
}

export default RightHeader;
