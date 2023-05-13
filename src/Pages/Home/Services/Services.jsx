import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices]=useState([])
    useEffect(()=>{
        fetch('services.json',)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
       <div>
         <div className="text-center space-y-5">
            <h3 className="text-3xl font-bold text-[#FF3811]">Services</h3>
            <h1 className="text-6xl font-bold">Our Service Area</h1>
            <p className="text-base">
                the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.
            </p>
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              services.map(service=> <ServiceCard
              key={service._id}
              service={service}
              ></ServiceCard>) 
            }
        </div>
       </div>
    );
};

export default Services;