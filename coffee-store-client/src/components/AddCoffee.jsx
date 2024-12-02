import Swal from "sweetalert2";
const AddCoffee = () => {
    const handleAddCoffee = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };

        console.log(newCoffee);

        // Send Data to the Server 
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json' 
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{ console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
     return (
        <div>
            <h2 className="text-3xl font-bold">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* Row Start */}
                <div className="flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Coffee name</span>
                        </div>
                        <input type="text" name="name" placeholder="Coffee name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2 md:ml-5">
                        <div className="label">
                            <span className="label-text">Available Quantity</span>
                        </div>
                        <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row End */}

                {/* Row Start */}
                <div className="flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2 md:ml-5">
                        <div className="label">
                            <span className="label-text">Taste</span>
                        </div>
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row End */}

                {/* Row Start */}
                <div className="flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2 md:ml-5">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row End */}

                {/* Row Start */}
                <div className="flex">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photo" placeholder="Coffee name" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row End */}

                <input type="submit" className="btn btn-block mt-5" value="Submit" />
                
            </form>
        </div>
    );
};

export default AddCoffee;