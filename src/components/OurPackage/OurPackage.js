import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const OurPackages = () => {
    const [packages, setPackages] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPackages(data));
    },[])

    return (
        <div className='container py-5'>
           <h2>Select Your Best Package <br />For Your Travel</h2>
           <div className='row'>
           {
                packages.map(pack => <Package
                    key= {pack.id}
                    packages={pack}
                ></Package>)
            }
           </div>
        </div>
    );
};

export default OurPackages;