import Image from "next/image";
import Link from "next/link";
import Thumbnail1 from "../static/thumbnail1.jpg";
import User1 from "../static/user1.jpeg";

const BlogCard = () => {
  return (
    <>
      <Link href={"/post/123"}>
        <div className="cardWrapper">
          <div className="postDetails">
            <div className="authorDetails">
              <Image
                src={User1}
                width={30}
                height={30}
                alt="user profile img"
                className="authorImg"
              />
              <span className="authorName">Thomas Smith</span>
            </div>
            <h3>Today's Merge Could Vindicate Ethereum — or Destroy It</h3>
            <p>Either way, it's going to be exciting</p>
            <div className="postStats">
              <span className="postedDate">Sep 14 · </span>
              <span className="postTime">5 min · </span>
              <span className="postTag">Merge</span>
            </div>
          </div>
          <Image
            className="postThumbnail"
            src={Thumbnail1}
            height={150}
            width={200}
            alt="Post thumbnail"
          />
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
