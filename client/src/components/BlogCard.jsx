import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const { title, description, category, image, _id } = blog;

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/30 duration-300 cursor-pointer"
    >
      <img src={image} alt={title} className="aspect-video" />
      <span className="ml-5 mt-4 px-4 py-1 inline-block bg-primary/20 text-primary text-xs rounded-2xl">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        <p className="mb-3 text-xs text-grey-600" dangerouslySetInnerHTML={{"__html":description.slice(0, 79)}}></p>
      </div>
    </div>
  );
};

export default BlogCard;
