// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const { name, quantity, supplier, taste, details, _id, category, photo } = coffee;

    const handleUpdateCoffee = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const category = form.category.value;
        const photo= form.photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, details, category, photo}
        console.log(updatedCoffee)

        //send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }

        })

    }

    return (
        <div style={{backgroundColor: '#F4F3F0'}} className="p-24">
            <h2 className="text-3xl font-bold">Update Coffee: {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* name and quantity row */}
                <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={name} placeholder="Coffee Name" name='name' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-6">
                    <label className="label">
                        <span className="label-text">Available Quantity:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='quantity' defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex  mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier Name:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Supplier Name" name='supplier' defaultValue={supplier} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-6">
                    <label className="label">
                        <span className="label-text">Taste:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='taste' defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex  mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Category" name='category' defaultValue={category} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-6">
                    <label className="label">
                        <span className="label-text">Details:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='details' placeholder="Details" defaultValue={details} className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                {/* form photo url row */}
                <div className=" mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Photo URL" name='photo' defaultValue={photo} className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                <input className="btn btn-block" type="submit" value='Update Coffee' name="" id="" />
            </form>
        </div>
    );
};

export default UpdateCoffee;