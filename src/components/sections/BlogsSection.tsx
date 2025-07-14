
import React from "react";
import CarouselRow from "../CarouselRow";
import BlogCard from "../blog/BlogCard";
import { useBlogs } from "../../hooks/useBlogs";

const BlogsSection = () => {
  const { blogs, isLoading } = useBlogs();

  if (isLoading) {
    return (
      <section>
        <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">Blogs & Articles</h2>
        <div className="text-center py-8">Loading...</div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">Blogs & Articles</h2>
      <CarouselRow 
        items={blogs.map(blog => (
          <BlogCard
            quote={blog.quote}
            author={blog.author}
            link={blog.link || "#"}
            key={blog.id}
          />
        ))} 
        slidesPerView={{ base: 1, md: 2, lg: 3 }} 
      />
    </section>
  );
};

export default BlogsSection;
