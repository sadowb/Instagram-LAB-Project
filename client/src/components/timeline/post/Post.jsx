import "./Post.css";
import { FaUserFriends } from "react-icons/fa";
import { HiHeart, HiOutlineUserCircle } from "react-icons/hi2";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

function Post(props) {
  return (
    <div className="user_place">
      <div className="wrapper">
        <HiOutlineUserCircle size={"2rem"} />
        <p>{props.username}</p>
      </div>
      <div>
        <img src={props.imageUrl} alt={props.alternative} className="user_image" />
      </div>
      <div className="Icon">
        <HiHeart size={"2rem"} className="heart_icon" />
        <HiOutlineChatBubbleOvalLeft size={"2rem"} className="chat_icon" />
      </div>
      <div className="comments_section">
        <h3>Comments</h3>
        <p>{props.comments}</p>
      </div>
    </div>
  );
}
export default Post;
