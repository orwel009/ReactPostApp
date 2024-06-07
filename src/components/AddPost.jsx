import React from 'react'
import Navbar from './Navbar'

const AddPost = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-4 c0l-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">UserId</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-4 c0l-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-4 c0l-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 c0l-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Body</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 c0l-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success">AddPost</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost