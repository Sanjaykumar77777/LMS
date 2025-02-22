import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div>
      <footer className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-8 border-t">
        <div className="flex items-center gap-4">
          <img className="hidden md:block w-20" src={assets.logo} alt="logo" />
          <div className="hidden md:block h-7 w-px bg-gray-50/60"></div>
          <p className="py-4 text-center text-xs md:text-sm text-gray-500">
            Copyright 2025 © Edemy. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-3 md:mt-4">
          <a href="#">
            {" "}
            <img
              src={assets.facebook_icon}
              alt="facebook-icon"
              className="mb-3"
            />{" "}
          </a>
          <a href="#">
            {" "}
            <img
              src={assets.twitter_icon}
              alt="twitter-icon"
              className="mb-3"
            />{" "}
          </a>
          <a href="#">
            {" "}
            <img
              src={assets.instagram_icon}
              alt="instragram-icon"
              className="mb-3"
            />{" "}
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
