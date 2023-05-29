function LeftHeader() {
  return (
    <div className=" relative w-[100%] h-[60px] bg-[#ededed]  flex justify-between items-center px-[15px]">
        <div className=" relative w-[40px] h-[40px] rounded-full overflow-hidden">
        <img src="src\Image\virat-kohli.webp" alt="profile_image" className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover"  />
        </div>
        <div className=" relative flex justify-around text-center w-[50%] h-[100%] md:text-xl items-center cursor-pointer text-[#51585c]">
            <i className="fa-solid fa-user-group"></i>            
            <i className ="fa-regular fa-circle"></i>
            <i className="fa-solid fa-message"></i>
            <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
    </div>
  )
}

export default LeftHeader;