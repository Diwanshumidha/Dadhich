import React, { useEffect, useState } from "react";
import s from "./d_portfolio.module.css";
import Card from "./Card";
import axios from "axios";


const D_Portfolio = ({ hidden , category }) => {
  
  const [currentcategory , setcategory] = useState(category)
  const [portfolio, setportfolio] = useState([]);
  const [categories , setcategories] = useState([])
  const getportfolio = async () => {
    try {
      const response = await axios.get(
        "https://dadvichserver.onrender.com/portfolio/getportfolio"
      );
      console.log("1" ,response.data)

      setportfolio(response.data);
      console.log("GetPortfolio=>  ",response.data);
      console.log("GetPortfolio=>  ",port);


    } catch (error) {
      console.log(error.message);
    }
  };
  const getcategories = async () => {
    try{
      const response = await axios.get(
        "https://dadvichserver.onrender.com/portfolio/getcategories"
      );
      setcategories(response.data);
      console.log("GetCategories=>  ",response.data);
    }
    catch(error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getportfolio();
    getcategories();
  }, []);

  return (
    <div className={s.d_portfolio}>
      <div className={s.d_heading}>
        <span>Our Creative Work</span>
        <h3>Best And Latest Work</h3>
        {!hidden ? (
          <div className={`${s.filter_button} container`}>
            {categories.map((name ) => (
              <button key={name.category} onClick={()=>{setcategory(name.category.toLowerCase());}}>{name.category}</button>
            ))
            }
          </div>
        ) : (
          <></>
        )}
        <div className={s.portfolio}>
          <div className={`${s.card_container}`}>
            {portfolio
              .filter(
                (item) =>
                  currentcategory == "all product" ||
                  (item.category).toLowerCase() == currentcategory
                  
                )
              .map((item) => (
                <Card key={item.title} title={item.title} link={item.link} category={item.category} image={item.image}></Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default D_Portfolio;










// import React, { useEffect, useState } from "react";
// import s from "./d_portfolio.module.css";
// import Card from "./Card";
// import axios from "axios";

// // const categories = [
// //   ["All Product" , "general"],
// //   ["Wordpress", "wordpress"],
// //   ["Html", "html"],
// //   ["Dashboard", "dashboard"],
// //   ["React", "react"],
// //   ["Laravel", "laravel"],
// //   ["Angular", "angular"],
// //   ["Mobile App", "mobile"],
// //   ["Wordpress", "wordpress"],
// //   ["Html", "html"],
// //   ["Ecom" , "ecom"]
// // ]

// const D_Portfolio = ({ hidden, category }) => {
//   const [currentcategory, setcategory] = useState(category);
//   const [portfolio, setportfolio] = useState([]);
//   const [categories, setcategories] = useState([]);
//   const getportfolio = async () => {
//     try {
//       const response = await axios.get(
//         "https://dadvichserver.onrender.com/portfolio/getportfolio"
//       );
//       setportfolio(response.data);
//       console.log("GetPortfolio=>", response.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   const getcategories = async () => {
//     try {
//       const response = await axios.get(
//         "https://dadvichserver.onrender.com/portfolio/getcategories"
//       );
//       setcategories(response.data);
//       console.log("GetCategories=>", response.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   useEffect(() => {
//     getportfolio();
//     getcategories();
//   }, []);



// return (
//   <div className={s.d_portfolio}>
//     {/* ... */}
//     <div className={s.portfolio}>
//       <div className={s.card_container}>
//         {portfolio
//           .filter(
//             (item) =>
//               currentcategory === "all product" ||
//               item.category === currentcategory
//           )
//           .map((item) => (
//             <Card
//               key={item.title} // Add the key prop here
//               title={item.title}
//               link={item.link}
//               category={item.category}
//               image={item.image}
//             ></Card>
//           ))}
//       </div>
//     </div>
//   </div>
// );

// };

// export default D_Portfolio;
