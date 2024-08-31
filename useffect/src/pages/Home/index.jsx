import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Loading from "../../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import AddCategory from "../AddCategry";
import { Helmet } from "react-helmet-async";
import { MdDelete } from "react-icons/md";



const CategoryPage = () => {
  const [counter, setCounter] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect
  function increaseCount() {
    setCounter(counter + 1);
  }
  function decreaseCount() {
    setCounter(counter - 1);
  }

  useEffect(() => {
    fetch("https://northwind.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home Page</title>

      </Helmet>
      <button onClick={increaseCount}>+</button>
      <span>{counter}</span>
      <button onClick={decreaseCount}>-</button>

      {/* <button onClick={getcategories}>get categories</button> */}

        <AddCategory setCategories={setCategories}/>
      {loading && <Loading />}
      {categories &&
        categories.map((category) => (
          <li key={category.id}>
            {category.name} --  {category.description}
            <br />
            <MdDelete onClick={() => {
                if (window.confirm("Are you sure delete category ?")) {
                  fetch(
                    `https://northwind.vercel.app/api/categories/${category.id}`,
                    {
                      method: "DELETE",
                    }
                  );
                  setCategories(
                    categories.filter((ctg) => ctg.id != category.id)
                  );
                }
              }} />
           
            <Link to={`/detail/${category.id}`}>
            <Button
            //   onClick={() => {
            //     navigate(`/detail/${category.id}`);
            //   }}
              variant="warning"
            >
              Detail
            </Button>
            </Link>
          </li>
        ))}
    </div>
  );
};

export default CategoryPage;
