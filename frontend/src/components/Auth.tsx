import { SignupInput } from "@premchandellendula/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type} : {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        email: "",
        password: "",
        name: ""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
            const token = response.data.jwt
            // console.log(token)
            localStorage.setItem("token", token)
            navigate("/blogs")
        }catch(e){
            alert("Error while signup")
        }
    }

    return <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-bold">
                        {type === "signin" ? "Access your account" : "Create an account"}
                    </div>
                    <div className="text-gray-600">
                        { type === "signin" ? "Don't have an account?" : "Already have an account?"} 
                        <Link to={type === "signin" ? "/signup" : "/signin"} className="pl-1 underline">{type === "signin" ? "Sign up" : "Sign in"}</Link>
                    </div>
                </div>

                <div className="pt-4">
                    {type === "signup" ? <LabelledInput label="Username" placeholder="John Doe" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value
                        }))
                    }}/> : null }

                    <LabelledInput label="Email" placeholder="johndoe@gmail.com" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            email: e.target.value
                        }))
                    }}/>

                    <LabelledInput label="Password" type={"password"} placeholder="123abc" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }))
                    }}/>

                    <button onClick={sendRequest} type="button" className="mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>

                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label : string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType) {
    return <div>
    <label className="block mb-2 text-md font-semibold text-black pt-4">{label}</label>
    <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}