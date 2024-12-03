import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee)
    const {  _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { _id, name, quantity, supplier, taste, category, details, photo };

        console.log(updatedCoffee);

        // Send Data to the Server 
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json' 
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{ console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }

    return (
        <div>
            <h2 className="text-3xl font-bold">Update Coffee Information</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* Row Start */}
                <div className="flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Coffee name</span>
                        </div>
                        <input type="text" name="name" defaultValue={name} placeholder="Coffee name" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2 md:ml-5">
                        <div className="label">
                            <span className="label-text">Available Quantity</span>
                        </div>
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row End */}

                {/* Row Start */}
                <div className="flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Supplier</span>
                        </div>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2 md:ml-5">
                        <div className="label">
                            <span className="label-text">Taste</span>
                        </div>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row End */}

                {/* Row Start */}
                <div className="flex">
                    <label className="form-control md:w-1/2">
                        <div className="label">
                            <span className="label-text">Category</span>
                        </div>
                        <input type="text" name="category" defaultValue={category}  placeholder="Category" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control md:w-1/2 md:ml-5">
                        <div className="label">
                            <span className="label-text">Details</span>
                        </div>
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row End */}

                {/* Row Start */}
                <div className="flex">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Photo URL</span>
                        </div>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Coffee name" className="input input-bordered w-full" />
                    </label>
                </div>
                {/* Row End */}

                <input type="submit" className="btn btn-block mt-5" value="Update Coffee Info" />
                
            </form>
        </div>
    );
};

export default UpdateCoffee;