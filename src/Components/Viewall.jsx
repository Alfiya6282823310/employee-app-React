import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [data, changeData] = useState(
        [
            { "empid": 102, "Name": "Anu", "desig": "php develepor", "salary": 2000 },
            { "empid": 103, "Name": "Manu", "desig": "web develepor", "salary": 7000 },
            { "empid": 104, "Name": "Meenu", "desig": "frontend develepor", "salary": 9000 },
            { "empid": 105, "Name": "Rahul", "desig": "web develepor", "salary": 10000 },
            { "empid": 106, "Name": "Sahir", "desig": "it develepor", "salary": 4000 },
            { "empid": 107, "Name": "Seetha", "desig": "Manager", "salary": 6000 },
            { "empid": 108, "Name": "Meenu", "desig": "frontend develepor", "salary": 9000 },
        ]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Employee Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">designation</th>
                                    <th scope="col">Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value,index) => {
                                        return <tr>
                                       <td>{value.empid}</td>
                                        <td>{value.Name}</td> 
                                        <td>{value.desig}</td>
                                        <td>{value.salary}</td>
                                    </tr>
                                    }
                                )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall