import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function useGetActiveHash(){
    const location = useLocation()

    const [activeHash, setActiveHash] = useState("")

    useEffect(()=>{
        setActiveHash(location.hash)
    }, [location.hash])

    useEffect(()=>{
        const sections = document.querySelectorAll("section")

        const lis = new IntersectionObserver((entries)=>{

            entries.map(entry=>{
                if(entry.isIntersecting){
                    const id = entry.target.getAttribute("id")
                    setActiveHash("#" + id)
                }
            })
        })

        for (const section of sections) {
            lis.observe(section)
        }

        return ()=>{
            for (const section of sections) {
                lis.unobserve(section)
            }
        }
    }, [])

    return {activeHash, location}
}

export default useGetActiveHash