import React from "react";

function Welcome(p) {
    // Here you have to return expected html using the properties being passed to the component
    return (
        <div className="row">
            <div className="col-md-11 mb-3 mx-auto mt-5">
                <div className="card bg-light border border-0 ">
                    <div className="card-body">
                        <h1 className="card-title fw-light mt-5 fs-1 ms-4">A Warm Welcome!</h1>
                        <p className="card-text ms-4 "> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere tempora alias minus mollitia asperiores amet, voluptate voluptatibus magnam quaerat, quo illum quasi tempore. Nesciunt voluptate ea neque, voluptatibus hic eos.</p>
                        <a href="#" className="btn btn-primary mb-5 ms-4">Call to action!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome