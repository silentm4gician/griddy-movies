'use client'

import Results from "@/components/Results"
import { useEffect, useState } from "react"

const ResultsPage = ({params}) =>
{
    const [media,setMedia] = useState('movie')

    useEffect(()=>{console.log(media)},[media])

    return (
    <section className="bg-slate-800">

        <div className="flex justify-center">
            <button onClick={()=>setMedia('movie')} className="p-4 bg-slate-900 text-white mt-20 mx-2 mb-4 mt-4 rounded-md btnFilter">MOVIES</button>
            <button onClick={()=>setMedia('tv')} className="p-4 bg-slate-900 text-white mt-20 mx-2 mb-4 mt-4 rounded-md btnFilter">TV SHOWS</button>
        </div>

        <Results query={params.id} type={media}/>
    </section>
    )
}

export default ResultsPage