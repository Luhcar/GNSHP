import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/video/Loading4.webm";
import Breadcrums from "../components/Breadcrums";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState("");
  const { addToCart } = useCart();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${params.id}`
      );
      const product = res.data;
      setSingleProduct(product);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <>
      {singleProduct ? (
        <div className="px-4 pb-4">
          <Breadcrums title={singleProduct.title} />
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Product Image  */}
            <div className="w-full">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>

            {/* Product Details  */}
            <div className="flex flex-col gap-6">
              <h1 className="font-bold text-xl md:text-3xl text-gray-800">
                {singleProduct.title}
              </h1>
              <div className="text-gray-700">
                {singleProduct.category?.toUpperCase()} /{" "}
                {singleProduct.rating?.rate} ⭐
              </div>
              <p className="text-xl text-red-500 font-bold">
                ${singleProduct.price}
              </p>
              <p className="text-gray-600">{singleProduct.description}</p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700">
                  Quantity :
                </label>
                <input
                  type="number"
                  min={1}
                  value={1}
                  className="w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button onClick={()=>addToCart(singleProduct)} className=" flex px-6 py-2 gap-2 text-lg bg-red-500 text-white rounded-md cursor-pointer">
                  <IoCartOutline className="w-6 h-6" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
