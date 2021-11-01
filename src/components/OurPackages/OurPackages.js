import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Package from '../Home/Package/Package';

const OurPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://hidden-scrubland-53724.herokuapp.com/packages/')
        .then(res=>res.json())
        .then(data =>setPackages(data));
    }, [])
    return (
        <div className='container py-5'>
            <h2>Select Your Best Package <br />For Your Travel</h2>
            <div className='row'>   
                {
                    packages.length === 0 ? 
                    <Spinner animation="border" variant="primary" />
                    : 
                    packages.map(p =><Package
                    key={p._id}
                    packages={p}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default OurPackages;