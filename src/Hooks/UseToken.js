import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const UseToken=email=>{
    const [token, setToken]=useState('')
    useEffect(()=>{
        if(email){
            fetch(`https://y-sajib63.vercel.app/jwt?email=${email}`)
            .then(res=> res.json())
            .then(data=>{
               if(data.token){
                localStorage.setItem('token', data.token)
               }
            })
            .catch(error=>{
                toast.error(error.message);
            })
        }
    },[email])
    return [token]
}

export default UseToken;