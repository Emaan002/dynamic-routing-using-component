import Link from "next/link"
export default function Country () {
    return (
        <div className=" h-screen font-bold text-center bg-slate-300">
            <h2><b className=" text-black text-xl">List of Countries</b></h2>
            <ul className="text-red-500 text-center py-4">
                <Link className=" hover:underline" href="/country/pakistan"><li><b>1: Pakistan</b></li></Link>
                <Link className=" hover:underline" href="/country/indonesian"><li><b>2: Indonesian</b></li></Link>
                <Link className=" hover:underline" href="/country/london"><li><b>3: London</b></li></Link>
                <Link className=" hover:underline" href="/country/france"><li><b>4: France</b></li></Link>
                <Link className=" hover:underline" href="/country/srilanka"><li><b>5: Srilanka</b></li></Link>
                <Link className=" hover:underline bg-slate-950 rounded-lg px-10" href="/">BACK</Link>
            </ul>
        </div>
    )
}