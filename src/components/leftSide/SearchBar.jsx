function SearchBar() {
  return (
    <div className=" relative  w-[100%] h-[50px] bg-[#f6f6f6] flex justify-center items-center px-4 ">
        <div className="w-[100%]  ">
        <i className="fa-solid fa-magnifying-glass absolute left-7 top-3 text-lg  "></i>
        <input type="text" name="search" placeholder="search" className="  border-none w-[100%] outline-none bg-[#fff] p-[6px] h-[38px] rounded-3xl text-sm pl-10 " />
        </div>
    </div>
  )
}

export default SearchBar;