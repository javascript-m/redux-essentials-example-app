import { useDispatch } from "react-redux";
import { postDeleted } from "./postsSlice";

export const DeletePost = ({ post }) => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(postDeleted(post.id))}>
            Delete Post
        </button>
    );
}