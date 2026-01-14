interface ButtonProps{
    variant : "primary" | "secondary";
    size : "sm" | "mid" | "lg";
    text : string; //what does user want written inside button
    startIcon? : any;
    endIcon? : any;
    onClick : () => void
}

export const Button = (props : ButtonProps) =>{
    //props.variant 


    return <button></button>

}

<Button variant="primary" size="mid" onClick={() => {}} text={"asd"} />