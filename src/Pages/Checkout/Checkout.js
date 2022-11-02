import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData()
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customerName: name,
            email,
            phone,
            message
        }
        // if(phone.length >10){
        //     alert('phone number should be 10 charecter or longer');
        // }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('order placed successfully')
                    form.reset();
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <h2 className='text-4xl'>You are about to order: {title}</h2>
                <h4 className='text-3xl'> Price : {price}</h4>
                <div className='p-5'>
                    <input name='firstName' required type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                    <input name='lastName' required type="text" placeholder="last name" className="input input-bordered w-full max-w-xs" />
                    <input name='phone' required type="text" placeholder="your phone" className="input input-bordered w-full max-w-xs" />
                    <input name='email' type="text" placeholder="your email" defaultValue={user?.email} className="input w-full max-w-xs" readOnly />
                </div>
                <div>
                    <textarea name='message' className="textarea textarea-secondary w-full" placeholder="Your message"></textarea>
                    <input type="submit" className='btn' value="place order" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;