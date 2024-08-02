import React from 'react';
import image1 from '../assets/p7.jpg';
import image2 from '../assets/p8.jpg';
import image3 from '../assets/p9.jpg';
import image4 from '../assets/p10.jpg';

const feedbacks = [
  { name: 'Jenny Wilson', feedback: 'The food was excellent and so was the service. I had the nusgroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.', rating: 4, imgUrl: image1 },
  { name: 'Steve Riley', feedback: 'A wonderful dining experience. The steak was cooked to perfection, and the staff were incredibly friendly. I highly recommend the house-made desserts.', rating: 5, imgUrl: image2 },
  { name: 'Jane Smith', feedback: 'The ambiance was lovely, but the food did not meet my expectations. The pasta was overcooked and lacked flavor. Service was decent though.', rating: 3, imgUrl: image3 },
  { name: 'Michael Brown', feedback: 'Great place for a casual meal. The tacos were fantastic, and the nachos were loaded with toppings. Prices are reasonable, and the service was prompt.', rating: 4, imgUrl: image4 },
];

const CustomerFeedback = () => {
  return (
    <div className="flex">
      <div className="feedback-container flex-1 p-4 bg-[#202028] text-white rounded-lg shadow-md">
        <h4 className="text-2xl lg:text-xl md:text-[16px] font-semibold mb-4">Customer's Feedback</h4>
        {feedbacks.map((feedback, index) => (
          <div key={index} className="mb-4 border-b-[1px] pb-4 border-gray-700">
            <div className="flex items-center mb-2">
              <img className="w-8 h-8 rounded-full mr-2 object-cover" src={feedback.imgUrl} alt={feedback.name} />
              <div>
                <p className="font-bold">{feedback.name}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < feedback.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 15l-5.878 3.09L5.567 13 0 8.755l6.091-.527L10 2l3.909 6.228L20 8.755 14.433 13l1.445 5.09L10 15z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className='text-sm'>{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
