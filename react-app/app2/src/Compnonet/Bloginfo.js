import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../Data.json'
export default function Bloginfo() {
  let { id } = useParams()

  let blog = Data.find(data => data.id == id)

  return (
    <div className='container bloginfo-container'>
      <div>
        <h1 className='text-muted fe-bold' >{blog.title}</h1>
        <p className=' text-muted'>{blog.Author}</p>
      </div>
      <Link className='btn btn-primary ms-auto bg-success ' to='/blog'>Back</Link><hr />
      <div className='row'>
        <div className="col-md-6">
          <img src={blog.img} alt={blog.name} className='img-fluid blog-info ' />
        </div>
        <div className="col-md-6 mt-4">
                <h1>{blog.name}</h1> 
                <p className='mt-5'>{blog.description}</p>         
            </div>
      </div>
      
    </div>

  )
}
