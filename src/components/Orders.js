// src/components/Orders.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [orderName, setOrderName] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const ordersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOrders(ordersData);
    };

    fetchOrders();
  }, []);

  const handleAddOrder = async () => {
    if (orderName.trim()) {
      await addDoc(collection(db, "orders"), { name: orderName });
      setOrderName('');
      // Refresh orders list
      const querySnapshot = await getDocs(collection(db, "orders"));
      const ordersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOrders(ordersData);
    }
  };

  return (
    <div>
      <h1>Orders</h1>
      <input
        type="text"
        value={orderName}
        onChange={(e) => setOrderName(e.target.value)}
        placeholder="Enter order name"
      />
      <button onClick={handleAddOrder}>Add Order</button>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
