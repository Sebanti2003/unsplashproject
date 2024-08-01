// import React from "react";

// const SearchForm = ({ searchTerm, changeinput}) => {
//   return (
//     <div className="flex items-center justify-between gap-1 md:gap-4 px-3 mb-5">
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => changeinput(e.target.value)}
//         placeholder="Search for images..."
//         className="md:w-[90%] w-[75%] rounded-lg p-2 border-2 border-black"
//       />
//       <button className="w-[20%] h-10 rounded-lg bg-blue-600 text-white " onClick={changeinput}>Search</button>
//     </div>
//   );
// };

// export default SearchForm;
import React from "react";

const SearchForm = ({ searchTerm, changeinput,onSearch}) => {
  return (
    <div className="flex items-center justify-between gap-1 md:gap-4 px-3 mb-5">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => changeinput(e.target.value)}
        placeholder="Search for images..."
        className="md:w-[90%] w-[75%] rounded-lg p-2 border-2 border-black"
      />
      <button className="w-[20%] h-10 rounded-lg bg-blue-600 text-white" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};
export default SearchForm;