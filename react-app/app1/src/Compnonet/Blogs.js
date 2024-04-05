import React from 'react'
import Data from '../Data.json'
import { Link } from 'react-router-dom';

export default function Blogs() {
    console.log(Data)
    return (
        <>
            {Data.map((result) =>
                <div className='col-md-4'>
                    <div className="card p-4 mt-4" >
                            <div className="d-flex">
                            <p className='fw-bold fs-5'>{result.name}</p>
                            <Link className='btn btn-outline-danger  ms-auto'  to={`/blog/${result.id}`}>Read More</Link>
                           </div>
                    </div>
                </div>
            )}
        </>
    )
}
