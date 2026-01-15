import type { ReactElement } from "react";
import { PlusIcon } from "../../icons/PlusIcon";


type Variants = "primary" | "secondary"
interface ButtonProps{
    variant : Variants;
    size : "sm" | "md" | "lg";
    text : string; //what does user want written inside button
    startIcon? :   ReactElement;
    endIcon? : ReactElement;
    onClick : () => void
}


const variantStyles  = {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-600" 
}

const defaultStyles = "rounded-md p-4" 

const sizeStyles = {
        "sm" : "p-2",
        "md" : "p-4",
        "lg" : "p-6"
}

export const Button = (props : ButtonProps) =>{
    //props.variant 


    return <button className={ `${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}
    ]}`} ><PlusIcon/>{props.text}</button>

    //return <button className={"bg-purple-300 text-purple-600"}><button/>

}

//<Button variant="primary" size="mid" onClick={() => {}} text={"asd"} />