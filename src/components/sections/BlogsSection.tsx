
import React from "react";
import CarouselRow from "../CarouselRow";
import BlogCard from "../blog/BlogCard";

const BlogsSection = () => (
  <section>
    <h2 className="text-3xl font-playfair font-bold mb-4 text-blue-900 dark:text-slate-400 tracking-tight">Blogs & Articles</h2>
    <CarouselRow items={[
      <BlogCard
        quote="AI won't replace you, but a person using AI might."
        author="Sara S, AI Club"
        link="https://medium.com/"
        key="blog-1"
      />,
      <BlogCard
        quote="Prompt engineering is the new superpower."
        author="Shivam B, Club Writer"
        link="https://medium.com/"
        key="blog-2"
      />,
      <BlogCard
        quote="Machine learning is like farming: the real growth happens in the unseen layers."
        author="Mary K, ML Enthusiast"
        link="https://medium.com/"
        key="blog-3"
      />,
      <BlogCard
        quote="Clarity comes not from algorithmic complexity, but from simple curiosity."
        author="Gaurav D, Club Mentor"
        link="https://medium.com/"
        key="blog-4"
      />
    ]} slidesPerView={{ base: 1, md: 2, lg: 3 }} />
  </section>
);

export default BlogsSection;
