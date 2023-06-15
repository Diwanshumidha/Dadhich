import { useEffect, useState } from "react";
import s from "./d_portfolio.module.css";
import Card from "./Card";
import axios from "axios";
import Header from "../Header/Header";
import { motion } from "framer-motion";


const Portfolio = ({ hidden, category }) => {
  const [currentCategory, setCurrentCategory] = useState(category);
  const [portfolio, setPortfolio] = useState([]);
  const [categories, setCategories] = useState([]);

  const getPortfolio = async () => {
    try {
      const response = await axios.get(
        "https://dadvichserver.onrender.com/portfolio/getportfolio"
      );
      setPortfolio(response.data);
      console.log("GetPortfolio=>", response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://dadvichserver.onrender.com/portfolio/getcategories"
      );
      setCategories(response.data);
      console.log("GetCategories=>", response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPortfolio();
    getCategories();
  }, []);

  useEffect(() => {
    console.log("new" + currentCategory);
  }, [currentCategory]);

  return (
    <>
      <div className={s.d_portfolio}>
        <motion.div className={s.d_heading}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
          <h1>Portfolio</h1>
          <span>Our Creative Work</span>
          <h3 className="section_heading">Best And Latest Work</h3>
          {!hidden ? (
            <motion.div className={`${s.filter_button} container`}
            initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}>
              {categories.map((name) => (
                <button
                  key={name.category}
                  onClick={() => {
                    setCurrentCategory(name.category.toLowerCase());
                  }}
                >
                  {name.category}
                </button>
              ))}
            </motion.div>
          ) : (
            <>
            </>
          )}
          <motion.div className={s.portfolio}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          >
            <div className={`${s.card_container}`}>
              {portfolio
                .filter((item) =>
                  currentCategory === "all product" || item.category.toLowerCase() === currentCategory.toLowerCase()

                )
                .slice(0, 9)
                .map((item) => (
                  <Card
                    key={item.title}
                    title={item.title}
                    link={item.link}
                    category={item.category}
                    image={item.image}
                  ></Card>
                ))
              }
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
