// // Search/Results.js
// import React, { useState, useEffect } from "react";

// const Results = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Simulated data for search results (replace with actual data)
//   const simulatedData = [
//     { id: 1, name: "Salon A", location: "City 1" },
//     { id: 2, name: "Salon B", location: "City 2" },
//     { id: 3, name: "Hair Studio X", location: "City 1" },
//     // Add more search results as needed
//   ];

//   useEffect(() => {
//     // Simulate an API request to fetch search results
//     setTimeout(() => {
//       setSearchResults(simulatedData);
//       setLoading(false);
//     }, 1500); // Simulated delay of 1.5 seconds
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold mb-4">Search Results</h1>
//       {loading ? (
//         <p className="text-gray-600">Loading...</p>
//       ) : (
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.id} className="mb-4">
//               <h2 className="text-2xl font-semibold">{result.name}</h2>
//               <p className="text-gray-700">Location: {result.location}</p>
//               {/* Add more result details as needed */}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Results;
