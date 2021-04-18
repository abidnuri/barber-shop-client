import React from 'react';
import fullshop from '../../../images/full-shop.jpg'
const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={fullshop} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1 style={{color:'red'}}>Never Ask a Barber if You Need a HairCut</h1>
                        <p className="text-secondary my-5">
                        The barbers from our barbershop can not only provide you with the most comfortable hairdresser services but bear the good company to chat during the entire procedure. Not to mention the variety of drinks in our bar.
                        </p>
                        <button className="btn btn-outline-danger">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;