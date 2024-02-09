import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [apiData, setApiData] =  useState([])

  const getData = async () => {
    const res = await fetch("http://localhost:4000/data")
    const data  = await res.json()
    // console.log({data})
    setApiData(data.dummyData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h1>working</h1>
      <table>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Nationality</th>

        </tr>
        {apiData.map((el, index)=>(
        <tr key={index}>
           <td>{el.id}</td>
          <td>{el.first_name}</td>
          <td>{el.last_name}</td>
          <td>{el.email}</td>
          <td>{el.nationality}</td>

        </tr>
))}
      </table>
    </>
  );
}

export default App;
