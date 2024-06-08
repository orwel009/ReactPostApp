import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const [data,changeData] = useState(
        {
            "name":""
        }
    )
    const inputHandler = (event) => {
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () => {
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                            <input type="text" className="form-control" placeholder='Enter Post Title...' name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search