import "../assets/styles/BlogHighlight.css";

const BlogHighlight = () => {
  return (
    <div className="container blog-highlight">
      <div className="image-section">
        <img src="/src/assets/images/pebbledrawing.png" alt="Blog Highlight" />
      </div>
      <div className="info-section">
        <h2>Exciting New Feature Coming Soon!</h2>
        <p>
          We’re excited to introduce a new blogging feature! Get ready for
          enhanced writing tools, customizable templates, and interactive
          elements to make your posts stand out. Stay tuned for more updates and
          get ready to explore the latest in blogging!
        </p>
      </div>
    </div>
  );
};

export default BlogHighlight;
