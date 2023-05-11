// import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, quantity, supplier, taste, _id, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        console.log('delete confirmed')
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                Swal.fire(
                  'Deleted!',
                  'Your Coffee has been deleted.',
                  'success'
                )
                const remaining = coffees.filter(cof => cof._id !== _id);
                setCoffees(remaining)
            }
          })
      }
    })
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src={photo} alt="Album" /></figure>
      <div className=" flex justify-between items-center w-full">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Chef: {supplier}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="btn-group btn-group-vertical space-y-4">
          <button className="btn ">View</button>
          <Link to={`updateCoffee/${_id}`}>
            <button className="btn">Edit</button>
            </Link>
          <button onClick={() => handleDelete(_id)} className="btn bg-red-500">X</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;