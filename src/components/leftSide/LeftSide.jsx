import { contactList } from "../Data";
import ContactList from "./ContactList";
import LeftHeader from "./LeftHeader";
import SearchBar from "./SearchBar";

function LeftSide() {
  return (
    <div className=" relative bg-white border-r-2 border-[rgba(0,0,0,0.2)] xl:flex-[30%] sm:flex-[40%] flex[50%] w-[100%] h-[100%]">
      <LeftHeader />
      <SearchBar />
      <div className="flex flex-col overflow-y-auto h-[calc(100%-110px)] w-[100%]">
      {contactList.map((user) =>(
        // console.log(user.name);
        <ContactList key={user.id} name = {user.name} time = {user.lastTextTime} msg={user.lastText} img= {user.profilePic} />
      ))}
      {contactList.map((user) =>(
        // console.log(user.name);
        <ContactList key={user.id} name = {user.name} time = {user.lastTextTime} msg={user.lastText} img= {user.profilePic} />
      ))}
      </div>

    </div>
  )
}

export default LeftSide;