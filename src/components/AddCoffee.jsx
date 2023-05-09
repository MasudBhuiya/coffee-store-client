// import React from 'react';

const AddCoffee = () => {
    return (
        <div style={{backgroundColor: '#F4F3F0'}} className="p-24">
            <h2 className="text-3xl font-bold">Add a Coffee</h2>
            <form>
                {/* name and quantity row */}
                <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Coffee Name" name='name' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-6">
                    <label className="label">
                        <span className="label-text">Available Quantity:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex  mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Supplier Name" name='supplier' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-6">
                    <label className="label">
                        <span className="label-text">Taste:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='taste' placeholder="Taste" className="input input-bordered w-full" />
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
                        <input type="text" placeholder="Category" name='category' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-6">
                    <label className="label">
                        <span className="label-text">Details:</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='details' placeholder="Details" className="input input-bordered w-full" />
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
                        <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                <input className="btn btn-block" type="submit" value='Add Coffee' name="" id="" />
            </form>
        </div>
    );
};

export default AddCoffee;