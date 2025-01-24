"use client";
import React from "react";
import { useWishlist } from "@/context/WishListContext";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
      <h1 className="text-4xl font-semibold">Your Wishlist</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <div key={item._id} className="w-full h-auto">
              <img
                src={item.image_url}
                alt={item.name}
                width={400}
                height={400}
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2 font-bold">{item.name}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your wishlist is empty</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
