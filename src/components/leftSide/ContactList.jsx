import "./ContactList.css"


function ContactList(props) {
  
  return (
        <div className="relative w-[100%] flex items-center p-4 border-b-[1px] border-[rgba(0,0,0,0.06)] hover:bg-[#f5f5f5] ">
            <div className="relative min-w-[45px] h-11 overflow-hidden rounded-full cursor-pointer mr-1">
                <img src={props.img} alt="profile photo"  className=" absolute top-0 left-0 w-[100%] h-[100%] object-cover"/>
            </div>
            <div className=" relative w-[100%] ">
              <div className="flex justify-between mb-1">
                <h4 className=" text-lg text-black mess overflow-hidden text-ellipsis">{props.name}</h4>
                <p className="text-sm text-[#aaa]">{props.time}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#aaa] text-sm overflow-hidden text-ellipsis mess">{props.msg}</p>
              </div>
            </div>
        </div>
  )
}

export default ContactList;