import { getMovieResults, getTvResults } from "@/api/requests/requests"
import Card from "./Card"

const Results = async ({query,type}) =>
{
    const {results : movieResults} = await getMovieResults(query)
    const {results : tvResults} = await getTvResults(query)

    return (
        <div>
            {
            type == 'movie'
            ?
            <>
                <h2 style={{textAlign:'center'}} className="p-3 mx-[20%] rounded-md text-white bg-slate-900 text-xl">MOVIE RESULTS FOR <span className="italic text-xl"> {query}</span></h2>
                <div className="cardgrid">
                {movieResults?.map((media) =>
                (<Card media={media} key={media.id} />))}
                </div>
            </>
            :
            <>
                <h2 style={{textAlign:'center'}} className="p-3 mx-[20%] rounded-md text-white bg-slate-900 text-xl">TV-SHOW RESULTS FOR <span className="italic text-xl"> {query}</span></h2>
                <div className="cardgrid">
                {tvResults?.map((media) =>
                (<Card media={media} key={media.id} />))}
                </div>
            </>
        }
        </div>
    )
}

export default Results