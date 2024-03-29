import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 footer-bg global-color text-base-content">
        <div>
          <span className="footer-title">About</span>
          <a className="link link-hover">History</a>
          <a className="link link-hover">Our Team</a>
          <a className="link link-hover">Brand Guidelines</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">How to Order us</a>
          <a className="link link-hover">Order Status</a>
          <a className="link link-hover">Promo</a>
          <a className="link link-hover">Payment Method</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Subscribe</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 text-black"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
            <div className="flex mt-2 ml-3">
              <Link className="custom-footer-icon">
                <CiFacebook></CiFacebook>
              </Link>
              <Link className="custom-footer-icon">
                <AiOutlineInstagram></AiOutlineInstagram>
              </Link>
              <Link className="custom-footer-icon">
                <FiTwitter></FiTwitter>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
