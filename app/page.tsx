import Link from "next/link"
export default function () {
    return(
        <div className="text-center m-10 bg-slate-300">
            <h1>Country Assigment using Componenet</h1>
            <Link href="/country">Country list</Link>
        </div>
    )
}