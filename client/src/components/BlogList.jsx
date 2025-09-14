import React, { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
// help me import motion i i did install right now
import { motion } from "motion/react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((category, index) => (
          <div key={index} className="relative">
            <button
              className={`cursor-pointer text-gray-500 ${
                menu === category && "text-white px-4 pt-0.5"
              }`}
              onClick={() => setMenu(category)}
            >
              {category}
              {menu === category && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 600, damping: 30 }}
                  className="absolute w-full h-7 -z-1 bg-primary left-0 top-0 rounded-full"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {/* --- blog cards --- */}
        {blog_data
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
