import { useState } from "react";


function Filter(){
    const products = [
        { name: "Laptop", category: "Electronics", price: 1000, stock: 4 },
        { name: "Shirt", category: "Apparel", price: 20, stock: 10 },
        { name: "Coffee Maker", category: "Appliances", price: 100, stock: 3 },
        { name: "Book", category: "Stationery", price: 15, stock: 20 },
        { name: "Bottle", category: "Stationery", price: 75, stock: 50 },
        { name: "Phone", category: "Electronics", price: 60, stock: 0 },
        ]
    
        let productDetailsCategory = products.filter(function(product) {
             return product.category=="Electronics";
        });
        console.log("Products which has category as Electronics")
       console.log(productDetailsCategory);
       
       let range =  {lower:50,upper:100};
       let rangeproducts = products.filter(function(product) {
        return ( product.price>=range.lower && product.price<=range.upper);
   },range);
   console.log("Products which has Proce in the range of 50 to 100")
   console.log(rangeproducts);

   let productDetailsStock = products.filter((product) => (product.stock>0));
console.log("Products which are in stock")
console.log(productDetailsStock);
}

export default Filter;