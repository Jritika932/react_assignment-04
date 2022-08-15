import React from 'react'
// import './App.css'

const Student = () => {
  return (
    <>
       <h1>Student's Record</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Roll no</th>
                <th>Course</th>
            </tr>
            <tr>
                <td>Himani Singh</td>
                <td>001</td>
                <td>Full Stack Developer</td>
            </tr>
            <tr>
                <td>Garima SINGH</td>
                <td>002</td>
                <td>Full Stack Developer</td>
            </tr>
            <tr>
                <td>Megha Joshi</td>
                <td>003</td>
                <td>Full Stack Developer</td>
            </tr>
            <tr>
                <td>Ritika Joshi</td>
                <td>004</td>
                <td>Full Stack Developer</td>
            </tr>
            <tr>
                <td>Neel Sharma</td>
                <td>005</td>
                <td>Full Stack Developer</td>
            </tr>
        </table>
    </>
  )
}

export default Student