import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import Pagination from "./Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  let indexOfLastPost = currentPage * postPerPage;
  let indexOfFirstPost = indexOfLastPost - postPerPage;
  let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum) => setCurrentPage(pageNum);
  console.log(currentPosts);
  return (
    <div>
      <h2>My Blog Title</h2>
      <Post posts={currentPosts} />
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
