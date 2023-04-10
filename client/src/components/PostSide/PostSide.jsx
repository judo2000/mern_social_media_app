import PostShare from '../PostShare/PostShare.jsx';
import Posts from '../Posts/Posts.jsx';
import './PostSide.jsx';

const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare />
      <Posts />
    </div>
  );
};

export default PostSide;
