import React from 'react'

const Projects = () => {
  return (
    <div className="project-contain">
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





      <div className="header w-[90%] lg:w-[80%] m-auto">
        <h1 className="text-Grey text-5xl sm:text-7xl font-light">Our</h1>
        <h1 className="text-5xl sm:text-7xl font-bold text-Gray1 text-start mb-5">
          Projects
        </h1>
      </div>
      <div className="contain w-[90%] lg:w-[80%] m-auto  lg:py-20 bg-sectionBg ">
        <div className="first-section flex flex-col lg:flex-row lg:space-x-10">
          <div className="image w-[100%]">
            <img src="./src/image/image 30.png" alt="" className="w-[100%]" />
          </div>
          <div className="first-section-text w-[100%] lg:w-[70%] lg:mt-10">
            <h2 className="text-Grey text-3xl sm:text-5xl font-light mt-4">
              Sample Project
            </h2>
            <p className="mt-5 lg:mt-16 lg:pr-20">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="bg-white tracking-extraWide p-7 pr-7 text-Gray1 text-xs lg:mt-20 ">
              VIEW MORE <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="contain w-[90%] lg:w-[80%] m-auto  lg:py-20 bg-sectionBg ">
        <div className="first-section flex flex-col lg:flex-row lg:space-x-10">
          <div className="image w-[100%]">
            <img src="./src/image/image 33.png" alt="" className="w-[100%]" />
          </div>
          <div className="first-section-text w-[100%] lg:w-[70%] lg:mt-10">
            <h2 className="text-Grey text-3xl sm:text-5xl font-light mt-5">
              Sample Project 2
            </h2>
            <p className="mt-5 lg:mt-16 lg:pr-20">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="bg-white tracking-extraWide p-7 pr-7 text-Gray1 text-xs mt-20 ">
              VIEW MORE <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="contain w-[90%] lg:w-[80%] m-auto  py-20 bg-sectionBg ">
        <div className="first-section flex flex-col lg:flex-row lg:space-x-10">
          <div className="image w-[100%]">
            <img src="./src/image/image 32.png" alt="" className="w-[100%]" />
          </div>
          <div className="first-section-text w-[100%] lg:w-[70%] mt-10">
            <h2 className="text-Gray1 text-3xl sm:text-5xl font-light">
              Sample Project 3
            </h2>
            <p className="mt-5 lg:mt-16 lg:pr-20">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="bg-white tracking-extraWide p-7 pr-7 text-Gray1 text-xs mt-20 ">
              VIEW MORE <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="next-slid w-[80%] m-auto pb-32">
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

export default Projects