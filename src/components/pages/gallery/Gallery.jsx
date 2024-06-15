import React from 'react'

const Gallery = () => {
  return (
    <div className="contain-gallery">
      {/* Nav-container */}
      <header className="w-[100%] py-10 lg:w-[80%] m-auto p-4">
        <div className="contain-nav flex justify-between">
          <div className="logo">
            <img src="./src/image/Group 11.png" alt="" className="w-30" />
          </div>
          {/* Navbar */}
          <nav className="">
            <ul className="hidden lg:flex justify-between  lg:w-[100%] space-x-10 pr-[10rem] text-offWhite">
              <li className="active: border-b border-b-slate-900 border-t border-t-slate-900 w-20  text-center p-2 ">
                <a href="">MAIN</a>
              </li>
              <li>
                <a href="">GALLERY</a>
              </li>
              <li>
                <a href="">PROJECTS</a>
              </li>
              <li>
                <a href="">CERTIFICATIONS</a>
              </li>
              <li>
                <a href="">CONTACTS</a>
              </li>
            </ul>
            {/* Navbar mobile */}
            <div className="mobile-navbar hidden rounded-3xl p-6 bg-bgFooter  lg:hidden">
              <ul className="flex flex-col gap-3 text-white">
                <li>
                  <a href="">MAIN</a>
                </li>
                <li>
                  <a href="">GALLERY</a>
                </li>
                <li>
                  <a href="">PROJECTS</a>
                </li>
                <li>
                  <a href="">CERTIFICATIONS</a>
                </li>
                <li>
                  <a href="">CONTACTS</a>
                </li>
              </ul>
            </div>
          </nav>
          <button className="text-5xl  md:text-5xl lg:hidden">
            <i class="bx bx-menu"></i>
          </button>
        </div>
      </header>
      {/* pictures */}
      <div className="gallery-contain">
        <div className="photos w-[80%] m-auto">
          <h1 className="text-Grey text-5xl sm:text-9xl font-light">Photo</h1>
          <h1 className="text-5xl sm:text-9xl font-bold text-Gray1 text-start">
            Gallery
          </h1>
          <div className="photosDisplay w-[100%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  mt-10 sm:py-20 gap-14">
            <img
              src="./src/image/Rectangle 22.png"
              alt=""
              className=" w-[100%]"
            />
            <img
              src="./src/image/Rectangle23.png"
              alt=""
              className=" w-[100%]"
            />
            <img
              src="./src/image/Rectangle 24.png"
              alt=""
              className=" w-[100%]"
            />
            <img
              src="./src/image/Rectangle 25.png"
              alt=""
              className=" w-[100%]"
            />
            <img
              src="./src/image/Rectangle 26.png"
              alt=""
              className=" w-[100%]"
            />
            <img
              src="./src/image/Rectangle 27.png"
              alt=""
              className=" w-[100%]"
            />
            <img
              src="./src/image/Rectangle 28.png"
              alt=""
              className=" w-[100%]"
            />
            <img
              src="./src/image/Rectangle 29.png"
              alt=""
              className=" w-[100%]"
            />
            <img
              src="./src/image/Rectangle 30.png"
              alt=""
              className=" w-[100%]"
            />
            <img
              src="./src/image/Rectangle 31.png"
              alt=""
              className=" w-[100%]"
            />
          </div>
        </div>
      </div>
      {/* button */}
      <div className="next-slid w-[80%] m-auto pb-40">
        <div className="arrow flex gap-8 sm:gap-10">
          <div className="num flex space-x-10  sm:space-x-20 text-3xl sm:text-4xl text-Grey">
            <div className="num1 text-offBlack">
              <p>0</p>
              <p>1</p>
            </div>
            <p>/</p>
            <p>05</p>
          </div>
          <button className="px-4 py-4 sm:px-6 sm:py-2 border text-offBlack">
            <i class="bx bx-arrow-back"></i>
          </button>
          <button className="px-4 py-4 sm:px-6 sm:py-2 bg-btnBg text-offBlack">
            <i class="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-bgFooter  py-10">
        <div className="contain-footer p-4 w-[100%] lg:w-[80%] m-auto flex flex-col lg:flex-row justify-between  text-white">
          <div className="w-[30%] lg:w-[10%]">
            <img src="./src/image/Group 11 1.png" alt="" className="w-[100%]" />
          </div>

          <div className="text-info flex flex-col gap-5 mt-10">
            <h2>Information</h2>
            <p>Main</p>
            <p>Gallery</p>
            <p>Projects</p>
            <p>Certifications</p>
            <p>Contacts</p>
          </div>
          <div className="contact-info flex flex-col gap-10 mt-10">
            <h2>Contacts</h2>
            <div className="location flex space-x-10">
              <i class="bx bxs-location-plus"></i>
              <div className="location-text">
                <p>1234 Sample Street</p>
                <p>Austin Texas 78704</p>
              </div>
            </div>
            <div className="phone-number flex space-x-10">
              <i class="bx bx-phone"></i>
              <p>512.333.2222</p>
            </div>
            <div className="email-info flex space-x-10">
              <i class="bx bx-envelope"></i>
              <p>sampleemail@gmail.com</p>
            </div>
          </div>
          <div className="socials flex flex-col gap-10 mt-10">
            <h2>Social Media</h2>
            <div className="icons flex space-x-10 text-3xl">
              <i class="bx bxl-facebook"></i>
              <i class="bx bxl-twitter"></i>
              <i class="bx bxl-linkedin-square"></i>
              <i class="bx bxl-pinterest-alt"></i>
            </div>
          </div>
        </div>
        <div className="user-info text-center py-5 mt-10 ">
          <p className="text-xs text-colorCopy">
            &copy; 2021 All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Gallery