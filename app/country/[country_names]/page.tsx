import React from "react";
import countryName from '../../details/page'
import CountryComponent from '../../component/page';
import Link from "next/link";


export default function CountryDetails ({params}: {params: { country_names: string }}) {
    const country = countryName.find(c => c.name.toLowerCase() === params.country_names.toLowerCase())
        if (!country) {
            return <h1 className="text-center">Country not found!!</h1>;
        }
        return (
            <div className="text-center mt-4">
                <h1><b className="underline text-xl">Country details</b></h1>
                <h3 className="text-black">
                    <CountryComponent 
                    name={country.name} 
                    population={country.population} 
                    capital={country.capital}
                    />
                </h3>
                <Link className="text-slate-500 no-underline hover:underline font-mono" href="/country"><b>BACK TO COUNTRY LIST</b></Link>
            </div>
        )
};