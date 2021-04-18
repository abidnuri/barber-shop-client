import React from 'react';
import Review from '../Review/Review';
import abid from '../../../images/barber-two.jpg'
import smith from '../../../images/barber-one.jpg'
import mark from '../../../images/barber-three.jpg'

const barberData = [
    {
        name: 'Abid Nuri',
        title: 'Barber',
        img: abid
    },
    {
        name: 'John Smith',
        title: 'Barber',
        img: smith
    },
    {
        name: 'John Mark',
        title: 'Barber',
        img: mark
    },
]

const Reviews = () => {
    return (
        <section>
            <div className="container">
                <div className="text-center">
                    <h3 className="text-danger">Our Team</h3>
                    <h2>We Are Here For You</h2>
                </div>
                <div className="row">
                    {
                        barberData.map(barber => <Review barber={barber} key={barber.name}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;