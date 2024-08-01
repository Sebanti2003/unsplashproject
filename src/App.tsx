// import React from "react";
// import Gallery from "./components/Gallery";
// import SearchForm from "./components/SearchForm";
// import ThemeToggler from "./components/ThemeToggler";
// import Unsplashheading from "./components/Unsplashheading";

// function App() {
//   const [searchTerm, setSearchTerm] = React.useState<string>("");
//   const [submittedTerm, setSubmittedTerm] = React.useState<string>("nature");

//   const changeinput = (value: string) => {
//     setSearchTerm(value);
//   };

//   const handleSearch = () => {
//     setSubmittedTerm(searchTerm);
//   };

//   return (
//     <div className="p-5 dark:bg-black">
//       <Unsplashheading />
//       <ThemeToggler />
//       <SearchForm searchTerm={searchTerm} changeinput={changeinput}/>
//       <Gallery searchTerm={submittedTerm} />
//     </div>
//   );
// }

// export default App;


import React from "react";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggler from "./components/ThemeToggler";
import Unsplashheading from "./components/Unsplashheading";

function App() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [submittedTerm, setSubmittedTerm] = React.useState<string>("nature");

  const changeinput = (value: string) => {
    setSearchTerm(value);
  };

  const handleSearch = () => {
    setSubmittedTerm(searchTerm);
  };

  return (
    <div className="p-5 dark:bg-black">
      <Unsplashheading />
      <ThemeToggler />
      <SearchForm searchTerm={searchTerm} changeinput={changeinput} onSearch={handleSearch} />
      <Gallery searchTerm={submittedTerm} />
    </div>
  );
}

export default App;

