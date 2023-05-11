// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loddedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loddedCoffees)

  return (
    <div className='m-20'>
      <h1 className='text-6xl my-20 text-sky-600 text-center'>Hot Hot Cold Coffee: {coffees.length}</h1>
      <div className='grid lg:grid-cols-2 gap-4 mt-12'>
      {
        coffees.map(coffee=> <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default App
