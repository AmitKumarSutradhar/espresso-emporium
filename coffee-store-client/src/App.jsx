import { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const coffees = useLoaderData();

  return (
    <>
      <h1>Coffees : {coffees.length}</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {
          coffees.map(coffee => <CoffeeCard key={ coffee._id } coffee={coffee}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
