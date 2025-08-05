import { blogs } from "../data/blogs";

function BlogDetails() {
  const content = (
    <ul>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <strong>{blog.author}</strong>
          <p>{blog.content}</p>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>Blog Details</h1>
      {content}
    </div>
  );
}

export default BlogDetails;