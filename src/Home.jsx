import useFetch from "./useFetch";
import BlogList from "./BlogList";
import Spinner from "./Spinner";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {/* {isPending && <div style={{ margin: "0 auto" }}>Loading...</div>} */}
      {isPending && (
        <div style={{ margin: "0 auto" }}>
          <Spinner />
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
