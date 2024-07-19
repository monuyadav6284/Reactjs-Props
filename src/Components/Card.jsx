import React, { useState } from "react";

function Card({ name, data, data1 }) {
  const [color, setColor] = useState("red");

  console.log(data1);
  return (
    <>
      {data.age > 20 ? (
        <div
          className={`max-w-sm rounded overflow-hidden shadow-lg `}
          style={{ backgroundColor: color }}
        >
          <img
            className="w-full"
            src="https://img.freepik.com/premium-photo/young-asian-male-with-wonder-curiosity-looking-holographic-digital-display-futuristic-technology-innovation-generative-ai-aig20_31965-150618.jpg?w=1060"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
              Name: {data1.name} Age: {data1.age} Role: {data1.role}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span
              onClick={() => setColor("black")}
              className="inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {data.name}
            </span>
            <span
              onClick={() => setColor("pink")}
              className="inline-block cursor-pointer bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              age: {data.age}
            </span>
            <span
              onClick={() => setColor("yellow")}
              className="inline-block bg-gray-200 rounded-full cursor-pointer px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Role: {data.role}
            </span>
          </div>
        </div>
      ) : (
        <h1>No Data Found</h1>
      )}
    </>
  );
}

export default Card;
