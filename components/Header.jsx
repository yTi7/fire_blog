import Link from "next/link";
import { SiFirebase } from "react-icons/si";

const Header = () => {
  return (
    <>
      <header>
        <Link href={"/"}>
          <div className="headerLogo">
            <SiFirebase />
            <h4>fire_todo</h4>
          </div>
        </Link>

        <ul className="navLinks">
          <li>OurStory</li>
          <li>Membership</li>
          <li>Pricing</li>
          <li>
            <button>SignIn</button>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
