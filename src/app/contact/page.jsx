import Link from "next/link"

const page = () => 
{
    return (
        <>
            <h1 className="mb-2 text-center text-white text-mono text-2xl">LOS PAPUS :V DEVELOPERS</h1>
            <hr className="mx-[20%]"/>
        <section className="flex justify-center text-white p-2">
            <div style={{width:'150px'}} className="text-center m-2">
                <Link href={'https://github.com/silentm4gician'} target='_blank' className="text-xl italic">
                    <img className="mb-2 border-2 hover:border-cyan-500" width={'100%'} src="leox.jpg" alt="xd" style={{borderRadius:'50%'}} />
                    silentm4gician
                </Link>
            </div>
            <div style={{width:'150px'}} className="text-center m-2">
                <Link href={'https://github.com/Luks-code'} target='_blank' className="text-xl italic">
                    <img className="mb-2 border-2 hover:border-cyan-500" width={'100%'} src="tropi.jpg" alt="xd" style={{borderRadius:'50%'}} />
                    tropicaal_
                </Link>
            </div>
        </section>
        <div className="flex justify-center place-items-center" >
            <img style={{width:'500px'}} src="griddyLogo.png" alt="logo" />
        </div>
            <hr className="mx-[20%]"/>
            <h4 className="mt-2 p-2 text-center text-white">Griddy Movies ©2023 all rights reserverd</h4>
        </>
    )
}

export default page