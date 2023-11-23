import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Card from "../SearchCard/SearchCard";
import allCardsScss from "./AllCards.module.scss";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        if (!category) {
          setData(data);
        } else {
          const filteredData = data.filter((item) => {
            return item.category == category;
          });
          setData(filteredData);
        }
      });
  }, [category]);

  return (
    <div className={allCardsScss.wrap}>
      <div className={allCardsScss.btns}>
        <button
          onClick={() => {
            setSearchParams({ category: "men's clothing" });
          }}
        >
          men's clothing
        </button>
        <button
          onClick={() => {
            setSearchParams({ category: "jewelery" });
          }}
        >
          jewelery
        </button>
        <button
          onClick={() => {
            setSearchParams({ category: "electronics" });
          }}
        >
          electronics
        </button>
        <button
          onClick={() => {
            setSearchParams({ category: "women's clothing" });
          }}
        >
          women's clothing
        </button>
      </div>

      <div className={allCardsScss.search}>
        {data.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
