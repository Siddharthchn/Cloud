import React from 'react';

const orders = [
  { name: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  // Add more orders here
];

const RecentOrders = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h4 className="text-lg mb-4">Recent Orders</h4>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Customer</th>
            <th className="text-left">Order No.</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.orderNo}>
              <td>{order.name}</td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
