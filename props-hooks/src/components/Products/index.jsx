import React from "react";
import List from "../List";
import ListItem from "../ListItem";

const Products = ({ products ,students}) => {
  return (
    <div>
      <List>
        {products &&
          products.map((prod) => {
            return <ListItem key={prod.id} prod={prod} p />;
          })}
      </List>
      <List data={students}/>
      <List data={students}/>
    </div>
  );
};

export default Products;
