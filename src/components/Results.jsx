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
                <h2 style={{textAlign:'center'}} className="p-2 mx-48 rounded-md text-white bg-slate-900">MOVIE RESULTS</h2>
                <div className="cardgrid">
                {movieResults?.map((media) =>
                (<Card media={media} key={media.id} />))}
                </div>
            </>
            :
            <>
                <h2 style={{textAlign:'center'}} className="p-2 mx-48 rounded-md text-white bg-slate-900 d-felx">TV-SHOW RESULTS</h2>
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