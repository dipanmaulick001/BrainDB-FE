import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"

export const Signup = () =>{
        return <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
                <div className="bg-white rounded border min-w-50">
                        <Input placeholder="Username"/>
                        <br/>
                        <Input placeholder="Password"/>
                        <div className="flex justify-center pt-4 pb-4">
                                <Button variant="primary" text="signup" size={"md"}/>
                        </div>
                        
                </div>

        </div>
}