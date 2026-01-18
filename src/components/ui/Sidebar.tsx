import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import {SidebarItem} from "./SidebarItem"


export const Sidebar = ()=>{
    return <div className="h-screen bg-white border-r fixed w-64 left-0 top-0">
        <div className="flex text-2xl pt-4 pl-2">
            BrainDB
        </div>
        <div className="pt-4">
                <SidebarItem text="Twitter"icon={<TwitterIcon/>}/>
                
                <SidebarItem  text="Youtube" icon={<YoutubeIcon/>}/>
                

        </div>
    </div>
}