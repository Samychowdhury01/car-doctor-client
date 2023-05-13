import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

/* eslint-disable react/no-unescaped-entities */
const Services = () => {
    const [services, setServices] =useState([])
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServices(data)
        })
    },[])
  return (
    <div className="mb-32">
      <div className="text-center space-y-5 md:w-1/2 mx-auto mb-12">
        <h5 className="text-xl text-red-600 font-bold">Service</h5>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="text-gray-500">
        the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. 
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            services.map(service => <ServiceCard
            key={service._id}
            service={service}
            />)
        }
      </div>
    </div>
  );
};

export default Services;
