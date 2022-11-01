import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person}  alt="" className="max-w-sm rounded-lg h-full shadow-2xl" />
                    <img src={parts} alt="" className="max-w-sm w-3/6 right-20 top-1/2 border-8 rounded-lg shadow-2xl absolute" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl my-5 text-orange-600 font-bold">About us</p>
                    <h1 className="text-5xl font-bold">
                        We are qualified
                        <br />
                        & of experience
                        <br />
                        in thi field
                    </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;