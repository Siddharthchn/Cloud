import React from 'react';

const feedbacks = [
  { name: 'Jenny Wilson', feedback: 'The food was excellent and so was the service...', rating: 5 },
  // Add more feedback here
];

const CustomerFeedback = () => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <h4 className="text-lg mb-4">Customer's Feedback</h4>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center mb-2">
            <img className="w-8 h-8 rounded-full mr-2" src={`https://i.pravatar.cc/150?img=${index}`} alt={feedback.name} />
            <div>
              <p className="font-bold">{feedback.name}</p>
              <div className="flex">
                {[...Array(feedback.rating)].map((star, i) => (
                  <svg key={i} className="w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.567 13 0 8.755l6.091-.527L10 2l3.909 6.228L20 8.755 14.433 13l1.445 5.09L10 15z"/></svg>
                ))}
              </div>
            </div>
          </div>
          <p>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
