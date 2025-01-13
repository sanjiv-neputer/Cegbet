"use client"
import "@/public/assets/sass/pages/dashboard.css"
import { Icon } from "@iconify/react/dist/iconify.js";
import Headerbottom from "@/components/headerbottom/page";
import Footer from "@/components/headerbottom/footer/page";

export default function Dashboard(){
    return(
        <>
         <Headerbottom/>
        <h1 className="dashboardpage  text-2xl">hello dashboard page</h1>
         <Footer/>
        </>
    )
}