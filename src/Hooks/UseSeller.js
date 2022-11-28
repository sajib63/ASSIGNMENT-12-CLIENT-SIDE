import { useEffect, useState } from "react";

const UseSeller=email=>{
    const [seller, setSeller]=useState(false)
    const [sellerLoading, setSellerLoading]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://y-sajib63.vercel.app/seller/${email}`)
            .then(res=> res.json())
            .then(data=>{
            setSeller(data.seller)
            setSellerLoading(false)
            })
        }

    },[email])
    return [seller, sellerLoading]

}

export default UseSeller;