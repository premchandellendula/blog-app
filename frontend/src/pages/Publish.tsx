import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    return <div>
        <Appbar />
        <div className="flex justify-center pt-8">
            <div className="max-w-screen-lg w-full">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none" placeholder="Title" />
            </div>
        </div> 
        <div className="flex justify-center pt-8">
            <TextArea onChange={(e) => {
                setContent(e.target.value)
            }} />
        </div>

        <div className="flex justify-center">
            <div className="max-w-screen-lg w-full">
                <button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                        title,
                        content
                    }, {
                        headers: {
                            Authorization: localStorage.getItem("token")
                        }
                    })
                    navigate(`/blog/${response.data.id}`)
                }} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 my-4">
                    Publish post
                </button>
            </div>
        </div>
    </div> 
}

function TextArea({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}){
    return <div className="max-w-screen-lg w-full">
        <textarea onChange={onChange} rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none" placeholder="Write your thoughts here..."></textarea>
    </div>
    
}