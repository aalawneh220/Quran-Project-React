// import React from 'react'

// function About() {
//   return (
//     <div>About</div>
//   )
// }

// export default About
import React from "react";
// import Card from "react-bootstrap/Card";
import { AiFillPhone , AiFillGithub , AiFillInstagram } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <header>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://www.mexatk.com/wp-content/uploads/2016/08/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D9%84%D9%88%D9%86-%D8%A7%D8%B3%D9%88%D8%AF-2.jpg')",
            height: "400px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-info">
                <h1 className="mb-3 ">تـواصـل مـعنا</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div
          className="section section-padding pb-0 "
          style={{ color: "black", marginTop: "100px" }}
        >
          <div className="">
            <div className="row learts-mb-n30">
              <div className="col-md-6 col-12 align-self-center learts-mb-30 ">
                <div className="about-us3">
                  <h2 className="title">
                    لتقديم النصائح يرجى التواصل عبر القنوات التالية
                  </h2>
                  <ul>
                    <li>
                      <h5><AiFillPhone /> +962778086281</h5>
                    </li>
                    <li>
                     <h5> <MDBIcon fab icon='google' /> quranNetwork@Gmail.com</h5>
                    
            
          
                    </li>
                    <li>
                     <h5> <HiLocationMarker /> الاردن عمان</h5>
                    </li>
                   <li>
                     <h5> <AiFillGithub /> quranNetwork </h5>
                  </li>
                   <li>
                     <h5> <AiFillInstagram /> quranNetwork </h5>
                  </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-12 text-center learts-mb-30 ">
                <img
                  src="https://images.pexels.com/photos/34753/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}
