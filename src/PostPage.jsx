import { Link, useNavigate, useParams } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostId = useStoreState((state) => state.getPostId);
  const post = getPostId(id);

  const handleDelete = async (id) => {
    deletePost(id);
    navigate("/");
  };

  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2 className="postTitle">{post.title}</h2>
            <p className="postDate">{post.date}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => handleDelete(post.id)}>
              Delete
            </button>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
