


import { useEffect, useState } from "react"
import HOME from "./Components/HOME"
import { GrInstagram } from "react-icons/gr"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
// import { Link } from "react-router";
import { MdMail } from "react-icons/md";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/FIrebaseConfig";




export default function App() {
  let [data, setdata] = useState([])
  let [isTop, setIsTop] = useState(true)
  async function fetchingdata() {
    // setdata([])
    let newdata = []
    let q = query(collection(db, 'Porjectsdata'))
    let querysnpshot = await getDocs(q)
    querysnpshot.forEach((item) => {

      // setdata(prev => [...prev, item.data()])
      newdata.push(item.data())
    })
    setdata(newdata)

    // console.log('data', data)
  }

  // ... (keep the rest of your useEffect hooks and scroll functions as they are)
  useEffect(() => {
    const scrollSmoothly = () => {
      const links = document.querySelectorAll('a[href*="#"]');
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      });
    };

    const smoothScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.body.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollPercentage = (scrollPosition / (scrollHeight - viewportHeight)) * 100;

      const sections = document.querySelectorAll('div');
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        const viewportTop = window.scrollY;
        const viewportBottom = viewportTop + viewportHeight;

        if (viewportTop < sectionBottom && viewportBottom > sectionTop) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', smoothScroll);
    scrollSmoothly();
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar")
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("sticky")
          setIsTop(false)
        } else {
          navbar.classList.remove("sticky")
          setIsTop(true)
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    fetchingdata()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }


  }, []);




  // useEffect(() => {
  //   fetchingdata()
  // }, [])
  // console.log('datas', data)


  function scrollToAbout() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToHOME() {
    const aboutSection = document.getElementById('home');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToCONTACT() {
    const aboutSection = document.getElementById('Contact');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToPROJECT() {
    const aboutSection = document.getElementById('PROJECT');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToExperienced() {
    const aboutSection = document.getElementById('Experienced');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div>
      <div
        className="navbar bg-transparent  flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md  sm:flex-col gap-5 lg:flex-row  max-sm:flex-col max-sm:gap-5 max-sm:w-full p-6"
        style={{ padding: "20px" }}
      >
        {/* <header className="flex items-center">
          <img src="./logo.jpg" alt="" className="w-14 h-14 rounded-full mr-4" />
          <div>
            <h2 className="font-bold text-1xl">Jaskirat Singh(Hint/xx)</h2>
            <h3>Mern Stack Developer</h3>
          </div>
        </header> */}

        {isTop && ( // conditionally render logo
          <header className="flex items-center">
            <img src="./logo.jpg" alt="" className="w-14 h-14 rounded-full mr-4" />
            <div>
              <h2 className="font-bold text-1xl font-mono text-black ">Jaskirat Singh(Hint/xx)</h2>
              <h3>Mern Stack Developer</h3>
            </div>
          </header>
        )}

        <nav className="flex gap-6 items-center max-sm:gap-4">
          <li className="list-none        font-extrabold text-xl cursor-pointer font-serif   max-sm:text-sm lg:text-xl" onClick={() => scrollToHOME()}>
            Home
          </li>
          <li className="list-none     font-extrabold text-xl  font-serif cursor-pointer  max-sm:text-sm lg:text-xl" onClick={() => scrollToAbout()}>
            About
          </li>
          <li className="list-none     font-extrabold text-xl  cursor-pointer  font-serif  max-sm:text-sm lg:text-xl" onClick={() => scrollToCONTACT()}>
            Contact
          </li>
          <li className="list-none     font-extrabold text-xl  cursor-pointer  font-serif  max-sm:text-sm lg:text-xl" onClick={() => scrollToPROJECT()}>
            Project
          </li>
          <li className="list-none     font-extrabold text-xl   cursor-pointer  font-serif  max-sm:text-sm lg:text-xl" onClick={() => scrollToExperienced()}>
            Experience
          </li>
        </nav>
      </div>

      <div className="pt-24">
        {" "}
        {/* Add padding-top to prevent content from being hidden behind the navbar */}
        <div id="home" className="bg-[url(hoe.png)] bg-no-repeat w-full h-[100vh] bg-cover bg-center " >
          <HOME />
        </div>



        <div id="about" className="bg-[#cfc3c39e] text-black   flex flex-col justify-center h-screen">

          <span


          >




            <h1 className="py-5 px-4 text-[2.5vh] max-sm:text-[2vh] font-semibold font-serif  flex items-center justify-center mt-10">Jaskirat Singh is a highly motivated MERN (MongoDB, Express.js, React, Node.js) stack developer with a proven ability to design, develop, and deploy scalable and user-friendly web applications. Expertise includes:</h1>
            <li className="text-[1.5vh] font-mono font-bold py-3 px-5  " >Front-End: React, Responsive Design, UI/UX, State Management (Redux, Context API), UI Libraries (Material UI, Ant Design)</li>
            <li className="text-[1.5vh] font-mono font-bold py-3 px-5 " >Back-End: Node.js, Express.js, RESTful APIs, Authentication, Authorization</li>
            <li className="text-[1.5vh] font-mono font-bold py-3 px-5 " >Database: MongoDB, NoSQL, Data Modeling</li>
            <li className="text-[1.5vh] font-mono font-bold py-3 px-5 " >Other: Git, Agile Methodologies, Cloud Deployment (Exploring) Currently building a portfolio of projects to showcase technical skills and seeking new opportunities for collaboration and growth.</li>


            <h2 className="text-[2vh] font-extrabold font-sans p-5" >Education</h2>

            <span className=" flex  w-[50vh] justify-between " >
              <span className=" flex flex-col p-4 gap-3">
                <li className="font-semibold font-serif text-[1.9vh] max-sm:text-[1.5vh] list-none">Maharshi Dayanand University</li>
                <li className="list-none font-extrabold max-sm:text-[1.5vh]"> Bachelor of Computer Applications(BCA)</li>

              </span>
              <li className="p-6 list-none font-extrabold font-mono  max-sm:text-[1.4vh]" >2023 - 2026</li>
            </span>
            <span className="  flex flex-wrap gap-5" >



              <span className="p-3">
                <h2 className="font-bold text-[2vh] max-sm:text-[1.5vh] text-black  shadow-white" style={{ textShadow: "0px 0px 5px white" }}> Available on </h2>
                <span
                  className=" flex  justify-evenly gap-3 w-[15vh]"
                >
                  <a href="https://www.instagram.com/code_with_hintxx/" target='_blank'>
                    <GrInstagram size={38} className="max-sm:w-[3vh]" />
                  </a>

                  <a href="https://github.com/JaskiratSingh26" target='_blank'>

                    <FaGithub size={38} className="max-sm:w-[3vh]" />

                  </a>

                  <a href="https://www.linkedin.com/in/jaskirat-singh-652aa1244?
utm_source=share&utm_campaign=share_via&utm_con
tent=profile&utm_medium=android_app" target='_blank'>

                    <CiLinkedin size={38} className="max-sm:w-[3vh]" />

                  </a>
                </span>
              </span>

              <span className="p-3">
                <h2 className="font-bold text-[2vh]  max-sm:text-[1.5vh] text-black   shadow-white" style={{ textShadow: "0px 0px 5px white" }}> Currently Workring on </h2>
                <span
                  className=" flex  justify-evenly gap-5 max-sm:gap-2 w-[15vh]"
                >
                  <img src="/leaf.jpg" alt="" className="w-12 rounded-full max-sm:w-[4vh] h-[4vh]" />
                  <img src="ex.jpg" alt="" className="w-12 rounded-full max-sm:w-[4vh] h-[4vh]" />
                  <img src="re.jpg" alt="" className="w-12 rounded-full max-sm:w-[4vh] h-[4vh]" />
                  <img src="node.png" alt="" className="w-12 rounded-full max-sm:w-[4vh] h-[4vh]" />
                </span>
              </span>


            </span>




          </span>


        </div>







        <div id="Experienced" className="   flex flex-col pt-20 ">

          <h1 className="text-[3vh] font-extrabold font-serif p-5 ">Experience</h1>
          <span className="text-[1.8vh] font-semibold p-5">I've more than 1.5 years of experaince in below technologies</span>

          <span

            className="mt-10"
          >

            <span className=" flex flex-wrap gap-15 py-10 px-5" >
              <img src="html.png" alt="" className="w-[20vh]  max-sm:w-[15vh]  hover:w-[19vh]" />
              <img src="csss.webp" alt="" className="w-[20vh]   max-sm:w-[15vh]   hover:w-[19vh] " />
              <img src="js.webp" alt="" className="w-[20vh]  max-sm:w-[15vh]   hover:w-[19vh] " />
              <img src="jss.webp" alt="" className="w-[20vh]  max-sm:w-[15vh]   hover:w-[19vh] " />
              <img src="db.webp" alt="" className="w-[20vh]  max-sm:w-[15vh]   hover:w-[19vh] " />
              <img src='ok.webp' alt="" className="w-[20vh]  max-sm:w-[15vh]   hover:w-[19vh]  " />
              <img src='exxr.png' alt="" className="w-[20vh]  max-sm:w-[15vh]    hover:w-[19vh] " />
              <img src='sql.webp' alt="" className="w-[20vh]  max-sm:w-[15vh]   hover:w-[19vh]  " />
              <img src='tail.webp' alt="" className="w-[20vh]  max-sm:w-[15vh]   hover:w-[19vh]  " />
              <img src='b.png' alt="" className="w-[20vh]  max-sm:w-[15vh]   hover:w-[19vh]  " />
              <img src='fire.webp' alt="" className="w-[20vh]  max-sm:w-[15vh]   hover:w-[19vh]  " />

            </span>

          </span>


        </div>

















        <div id="PROJECT" className="bg-[#30302f] p-5 ">
          <h1 className="text-white text-[2.5vh] font-extrabold font-serif p-5  shadow-white" style={{ textShadow: "5px 5px 15px white" }}>Projects</h1>

          <span className="   flex flex-wrap gap-10" >
            {
              data.map((item) => (
                <>

                  <a href={item?.url} target='_blank' className=" ml-5 mr-5 m-4">

                    <span

                      className="bg-cover  border-2 border-black   bg-center w-[33vh] h-[20vh] flex flex-col items-center justify-end transition duration-300 ease-in-out hover:filter-blur hover:brightness-50 max-sm:w-[38vh]
  rounded-lg
  "
                      style={{ backgroundImage: `url(${item?.imgurl})` }}
                    >
                      <a href={item?.url} target='_blank' className="text-lg font-extrabold  font-sans text-[1.5vh]  mb-4 bg-transparent p-2 rounded  shadow-white" style={{ textShadow: "5px 5px 15px white" }}>View Project</a>
                    </span>
                  </a>
                </>
              ))
            }
          </span>
        </div>






        <div id="Contact" className="flex py-5 px-3   flex-col justify-center items-center h-screen">
          <h1 className="text-3xl font-bold mb-10  p-5">Get in Touch</h1>
          <p className="text-lg font-medium mb-10 px-3">I'm a MERN Stack Developer and App Developer. If you're looking for a skilled developer to bring your project to life, let's connect!</p>
          <a href="mailto:jaskirattt1@gmail.com" target="_blank" className="text-2xl font-bold mb-10">

            <span className="flex  items-center">

              <MdMail size={50} />
              jaskirattt1@gmail.com
            </span>
          </a>
          <p className="text-lg font-medium mb-10 px-3">Feel free to reach out to me via email or through my social media channels. I'd love to hear from you and discuss how I can help with your project.</p>
          <span className="flex justify-center space-x-5">
            <a href="https://www.instagram.com/code_with_hintxx/" target='_blank'>
              <GrInstagram size={38} />
            </a>
            <a href="https://github.com/JaskiratSingh26" target='_blank'>
              <FaGithub size={38} />
            </a>
            <a href="https://www.linkedin.com/in/jaskirat-singh-652aa1244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
              <CiLinkedin size={38} />
            </a>
          </span>
        </div>










      </div>
    </div>
  )
}









