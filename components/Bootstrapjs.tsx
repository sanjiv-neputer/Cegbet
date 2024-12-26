"use client"
import { useEffect } from "react"

export default function Bootstrapjs(){
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.min.js')
    })
    return(
       null
    )
}