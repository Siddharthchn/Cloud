import React from 'react';
import image1 from '../assets/p1.jpg';
import image2 from '../assets/p2.jpg';
import image3 from '../assets/p3.jpg';
import image4 from '../assets/p4.jpg';
import image5 from '../assets/p5.jpg';
import image6 from '../assets/p6.jpg';

const orders = [
  { name: 'Stephanie Dallardo', orderNo: '15478256', amount: '$124.00', status: 'Delivered', imgUrl: image1 },
  { name: 'Wade Warren', orderNo: '43376581', amount: '$356.02', status: 'Delivered', imgUrl: image2 },
  { name: 'Rico Rodriguez', orderNo: '21336081', amount: '$46.22', status: 'Cancelled', imgUrl: image3 },
  { name: 'Emma Fisher', orderNo: '15657481', amount: '$5026.00', status: 'Pending', imgUrl: image4 },
  { name: 'Kristen Watson', orderNo: '76514568', amount: '$128.20', status: 'Delivered', imgUrl: image5 },
  { name: 'Ash Hawkins', orderNo: '78958215', amount: '$145.09', status: 'Delivered', imgUrl: image6 },
];

const statusStyles = {
  Delivered: {
    bgColor: '#175146',
    textColor: '#0B916C'
  },
  default: {
    bgColor: '#5D323A',
    textColor: '#B34D50'
  }
};

const RecentOrders = () => {
  return (
    <div className="bg-[#202028] text-white p-4 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-4">Recent Orders</h4>
      <table className="w-full text-[16px] md:text-[15px] lg:text-lg">
        <thead>
          <tr className='border-b border-gray-700'>
            <th className="text-left pb-2">Customer</th>
            <th className="text-left pb-2">Order No.</th>
            <th className="text-left pb-2">Amount</th>
            <th className="text-left pb-2 xl:pl-10">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            const { bgColor, textColor } = statusStyles[order.status] || statusStyles.default;
            return (
              <tr key={order.orderNo} className={`border-b border-gray-600 ${index === orders.length - 1 ? '' : 'mb-2'}`}>
                <td className="flex items-center py-2">
                  <img
                    src={order.imgUrl}
                    alt={order.name}
                    className="w-9 h-9 rounded-full mr-2 object-cover"
                  />
                  <span className='lg:text-[16px]'>{order.name}</span>
                </td>
                <td className="py-2 lg:text-[16px]">{order.orderNo}</td>
                <td className="py-2 lg:text-[16px]">{order.amount}</td>
                <td className="py-2 lg:text-[16px] xl:pl-10 xl:pr-5">
                  <div
                    className={`flex items-center justify-center py-1 rounded-lg`}
                    style={{ backgroundColor: bgColor }}
                  >
                    <span className='text-white lg:text-[16px]' style={{ color: textColor }}>{order.status}</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
