import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content max-w-screen-2xl container mx-auto md:px-20 px-4 flex-1 dark:bg-slate-900 dark:text-white dark:border-t">
        <nav>
          <div className="flex flex-col md:gap-2 gap-3">
            <h1 className="text-gray-500 text-[16px] font-bold ">Media</h1>
            <a className="flex gap-2">
              <FaTwitter className="text-2xl text-indigo-700 cursor-pointer" />
              Twitter
            </a>
            <a className="flex gap-2">
              <FaYoutube className="text-2xl text-indigo-700 cursor-pointer" />
              Youtube
            </a>

            <a className="flex gap-2">
              <FaLinkedin className="text-2xl text-indigo-700 cursor-pointer" />
              Linkedin
            </a>
            <a className="flex gap-2">
              <FaInstagram className="text-2xl text-indigo-700 cursor-pointer" />
              Instagram
            </a>
          </div>
        </nav>
        <nav>
          <h6 className="text-gray-500 text-[16px] font-bold">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-gray-500 text-[16px] font-bold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-gray-500 text-[16px] font-bold">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="text-gray-500 text-[16px] font-bold">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className=" p-2 join-item focus:outline-none"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}
