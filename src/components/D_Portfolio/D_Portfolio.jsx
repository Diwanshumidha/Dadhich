import { useEffect, useState } from "react";
import s from "./d_portfolio.module.css";
import Card from "./Card";
import { motion } from "framer-motion";
import { client } from "../../../sanityclient";



const Portfolio = ({hidden}) => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [portfolio, setPortfolio] = useState([]);
  const [categories, setCategories] = useState([]);

  const getPortfolio = async () => {
    try {
      const query = `*[_type == 'Portfolio']{
        title,
        "type": type->{name, id},
        _id,
        Link,
        "image": image.asset->url
      }`;
      const response = await client.fetch(query);
      setPortfolio(response);
      console.log("GetPortfolio=>", response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCategories = async () => {
    try {
      const query = "*[_type == 'Category']";
      const response = await client.fetch(query);
      setCategories(response);
      console.log("GetCategories=>", response);
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

  const filteredPortfolio = currentCategory
  ? portfolio.filter((item) => item.type?.id === currentCategory)
  : portfolio;
  

  return (
    <>
      <div className={s.d_portfolio}>
        <motion.div
          className={s.d_heading}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>Portfolio</h1>
          <span>Our Creative Work</span>
          <h3 className="section_heading">Best And Latest Work</h3>
          {!hidden ? (
            <motion.div
              className={`${s.filter_button} container`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setCurrentCategory(category.id);
                  }}
                >
                  {category.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setCurrentCategory(null);
                }}
              >
                All
              </button>
            </motion.div>
          ) : null}
          <motion.div
            className={s.portfolio}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className={`${s.card_container}`}>
              {filteredPortfolio.slice(0, 9).map((item) => (
                <Card
                  key={item._id}
                  title={item.title}
                  Link={item.Link}
                  image={item.image}
                ></Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio