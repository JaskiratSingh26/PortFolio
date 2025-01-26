
import { ReactTyped } from "react-typed";
 

export default function HOME() {




  return (
    <div
      className="py-10 px-8 m-auto  "
    >



      {/* main */}
      <div

        className=" flex flex-col align-middle items-center  justify-center  mt-55  "
      >


        <h3 className="font-extrabold font-serif  text-[5vh] text-center text-black shadow-white"

          style={{ textShadow: "5px 5px 15px white" }}
        >Welcome !</h3>




        <h2
          className="mt-3 font-bold text-[3vh] flex  max-sm:text-[2vh] text-black shadow-white "
          style={{ textShadow: "0px 0px 5px white" }}
        >
          HELLO,

          <ReactTyped className="ml-3 text-white text-[3vh] max-sm:text[1.7vh] "
            strings={[
              "I'am MERN STACK DEVELOPER",
              "I'am PROGRAMMER",
              "I'am APP DEVELOPER",

            ]}
            typeSpeed={40}
            backSpeed={50}

            loop
          >
            <input type="text" />
          </ReactTyped>
        </h2>

      </div>





    </div>
  )
}


