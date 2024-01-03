import Link from "next/link"

const page = () => 
{
    return (
        <>
            <h1 className="mt-8 mb-2 text-center text-white">LOS PAPUS :V DEVELOPERS</h1>
        <section className="flex justify-center text-white p-2">
            <br />
            <div style={{width:'150px'}} className="text-center m-2">
                <Link href={'https://www.instagram.com/leandro_gm5/'}>
                    <img className="mb-2" width={'100%'} src="leox.jpg" alt="xd" style={{borderRadius:'50%'}} />
                </Link>
                LEOX
            </div>
            <div style={{width:'150px'}} className="text-center m-2">
                <Link href={'https://www.instagram.com/lucasss.mp3/'}>
                    <img className="mb-2" width={'100%'} src="tropi.jpg" alt="xd" style={{borderRadius:'50%'}} />
                </Link>
                TROPI
            </div>
        </section>
        <div className="flex justify-center" >
            <img style={{width:'500px'}} src="griddyLogo.png" alt="logo" />
        </div>
            <h4 className="text-center text-white">©2023 all rights reserverd - DEA</h4>
        </>
    )
}

export default page