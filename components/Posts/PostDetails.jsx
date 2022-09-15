import Image from "next/image";
import {
  FaFacebookSquare,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";


const PostDetails = () => {
  return (
    <>
      <div className="postDetailsWrapper">
        <Image
          src={
            "https://miro.medium.com/fit/c/88/88/2*3vJU4sgGd_CmFQFl4wH6-Q.jpeg"
          }
          height={50}
          width={50}
          className="authorImg"
        />
        <div className="postDetails">
          <span className="authorName">Thomas Smith</span>
          <div className="postStats">
            <span className="postedDate">Sep 14 · </span>
            <span className="postTime">5 min · </span>
            <span className="postTag">Merge</span>
          </div>
        </div>
        <div className="socials">
          <ul>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaLink />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
