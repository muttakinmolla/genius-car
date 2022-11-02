import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        alert('deleted successfully');
                        const remaining = orders.filter(odr => odr._id !==id);
                        setOrders(remaining)
                    }
                })
        }
    }


    return (
        <div>
            <h2>Your orders : {orders.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>service</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Message</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} handleDelete={handleDelete} order={order}></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;