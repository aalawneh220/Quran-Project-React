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
            "url('https://www.pixelstalk.net/wp-content/uploads/images6/Sky-Background-Free-Download.jpg')",
          height: "400px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 ">﷽</h1>
              <h4 className="mb-3">
                {" "}
                وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَى فَادْعُوهُ بِهَا وَذَرُوا الَّذِينَ يُلْحِدُونَ فِي أَسْمَائِهِ سَيُجْزَوْنَ مَا كَانُوا يَعْمَلُونَ
              </h4>
              <h4 className="mb-3">
                {" "}
                صُّدٌَّقَِّ اٍّلَّلَّهّْ اٍّلَّعََّظُِيٌّمُّ               </h4>
              <h4 className="mb-3">
                {" "}
                حث عليها الرسول محمد ﷺ فقال: «إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةً إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دَخَلَ الجَنَّةَ»
              </h4>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
