import { useState } from "react"
import { Button } from "./Button";
import { CrossIcon } from "../../icons/CrossIcon";
import { Input } from "./Input";


export const CreateContentModal = ({open, onClose})=>{
        const [modalOpen, setModalOpen] = useState(false);

        return <div>
            {open && <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-55 flex justify-center">
                        <div className="flex flex-col justify-center">
                                <span className="bg-white opacity-100 p-5 rounded-md">
                                        <div className="flex justify-end">
                                                <div onClick={onClose} className="cursor-pointer">
                                                        <CrossIcon/>
                                                </div>
                 
                                        </div>
                                        <div>
                                                <Input placeholder={"Title"}/>
                                                <br/>
                                                <Input placeholder={"Link"}/>
                                        </div>
                                        <div className="flex justify-center">
                                                <Button variant="primary" size="md" text="Submit"/>
                                        </div>
                                </span>
                        </div>
                
                </div>}
        </div>
}

