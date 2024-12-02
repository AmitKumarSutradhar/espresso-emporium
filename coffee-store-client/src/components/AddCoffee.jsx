const AddCoffee = () => {
    return (
        <div>
            <h2>Add a Coffee</h2>
            <form action="">
                <div className="flex">
                    <div className="">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Coffee name</span>
                            </div>
                            <input type="text" placeholder="Coffee name" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Available Quantity</span>
                            </div>
                            <input type="text" placeholder="Available Quantity" className="input input-bordered w-full max-w-xs" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;