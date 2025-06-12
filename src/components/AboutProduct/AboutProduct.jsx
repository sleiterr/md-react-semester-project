import React, { useState, useEffect } from "react";

export const AboutProduct = ({ productsId }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productsId) return;

    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productsId}`);
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [productsId]);

  if (loading) return <p>Reading</p>;
  if (!products) return <p>No products was found</p>;

  return <div>AboutProduct</div>;
};
