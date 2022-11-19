import React from "react";


import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <header>
      <div
        className="p-5 text-center bg-image "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          height: "400px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 ">﷽</h1>
              <h4 className="mb-3">
                {" "}
                ﴿ إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ
                ﴾
              </h4>
              <Link className="nav-link " to="Allquran">
              <Button className="bg-info " tag="a" outline size="lg">
                
                الُِقٌرٍآن الُِڪرٍيم
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
