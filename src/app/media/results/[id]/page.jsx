'use client'

import Results from "@/components/Results"
import { useEffect, useState } from "react"

const ResultsPage = ({params}) =>
{
    const [media,setMedia] = useState('movie')

    useEffect(()=>{console.log(media)},[media])

    return (
    <section className="bg-slate-800">

        <h3 className="text-xl text-center text-white mb-2">FILTER BY</h3>
        <div className="flex justify-center">
            <button onClick={()=>setMedia('movie')} className="shadow p-4 bg-slate-900 text-white mx-2 mb-4 rounded-md btnFilter hover:shadow-slate-300">MOVIES</button>
            <button onClick={()=>setMedia('tv')} className="shadow p-4 bg-slate-900 text-white mx-2 mb-4 rounded-md btnFilter hover:shadow-slate-300">TV SHOWS</button>
        </div>

        <Results query={params.id} type={media}/>
    </section>
    )
}

export default ResultsPage