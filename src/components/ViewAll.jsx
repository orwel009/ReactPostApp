import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data,changeData] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => changeData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {data.map(
                            (value,index) => {
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">{value.userId}</li>
                                                <li class="list-group-item">{value.id}</li>
                                                <li class="list-group-item">{value.title}</li>
                                                <li class="list-group-item">{value.body}</li>
                                            </ul>
                                            <div class="card-footer">
                                                Card footer
                                            </div>
                                        </div>
                                    </div>
                            }
                        )}
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll