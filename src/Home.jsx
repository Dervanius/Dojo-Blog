import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Spinner from "./Spinner";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data from that source");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 2000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {/* {isPending && <div style={{ margin: "0 auto" }}>Loading...</div>} */}
      {isPending && <Spinner />}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
