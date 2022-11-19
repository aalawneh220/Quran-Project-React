
import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default function StandardImageList() {
  return (
    <div className="w-100 d-flex flex-wrap justify-content-evenly gap-5 p-3">
      <MDBCard background="dark " className="text-light fs-5 w-25 hover-zoom ">
        <MDBCardImage
          overlay
          src="https://t3.ftcdn.net/jpg/04/51/17/56/360_F_451175664_hGK9S6kW4MRKEj7lr2D7nqlftwVD6siS.jpg"
          alt="..."
        />
        <MDBCardOverlay>
          <MDBCardTitle> ما هي السور المكية؟</MDBCardTitle>
          <br></br>
          <MDBCardText>
            السور المكية هي التي نزلت قبل الهجرة إلى المدينة، وأغلبها يدور على
            بيان العقيدة وتقريرها والاحتجاج لها، وضرب الأمثال لبيانها وتثبيتها
          </MDBCardText>
        </MDBCardOverlay>
      </MDBCard>
      <MDBCard background="dark" className="text-light fs-5 w-25 hover-zoom">
        <MDBCardImage
          overlay
          src="https://t3.ftcdn.net/jpg/04/51/17/56/360_F_451175664_hGK9S6kW4MRKEj7lr2D7nqlftwVD6siS.jpg"
          alt="..."
        />
        <MDBCardOverlay>
          <MDBCardTitle>ما هي السور المدنية؟</MDBCardTitle>
          <br></br>

          <MDBCardText>
            السور المدنية فهي التي نزلت بعد الهجرة، ويكثر فيها ذكر التشريع،
            وبيان الأحكام من حلال وحرام.
          </MDBCardText>
        </MDBCardOverlay>
      </MDBCard>
      <MDBCard background="dark" className="text-light fs-5 w-25 hover-zoom">
        <MDBCardImage
          overlay
          src="https://t3.ftcdn.net/jpg/04/51/17/56/360_F_451175664_hGK9S6kW4MRKEj7lr2D7nqlftwVD6siS.jpg"
          alt="..."
        />
        <MDBCardOverlay>
          <MDBCardTitle> ما هي أول آية أنزلت من القرآن الكريم؟</MDBCardTitle>
          <br></br>

          <MDBCardText>
            ((اقرأ باسم ربك الذي خلق)) وهي أول آية في سورة العلق
          </MDBCardText>
        </MDBCardOverlay>
      </MDBCard>
      <MDBCard background="dark" className="text-light fs-5 w-25 hover-zoom">
        <MDBCardImage
          overlay
          src="https://t3.ftcdn.net/jpg/04/51/17/56/360_F_451175664_hGK9S6kW4MRKEj7lr2D7nqlftwVD6siS.jpg"
          alt="..."
        />
        <MDBCardOverlay>
          <MDBCardTitle>ما هي آخر آية أنزلت من القرآن الكريم؟</MDBCardTitle>
          <br></br>

          <MDBCardText>
            ((وَاتَّقُوا يَوْماً تُرْجَعُونَ فِيهِ إِلَى اللَّهِ ثُمَّ تُوَفَّى
            كُلُّ نَفْسٍ مَا كَسَبَتْ وَهُمْ لا يُظْلَمُونَ)) وهي الآية رقم 281
            من سورة البقرة
          </MDBCardText>
        </MDBCardOverlay>
      </MDBCard>
      <MDBCard background="dark" className="text-light fs-5 w-25 hover-zoom">
        <MDBCardImage
          overlay
          src="https://t3.ftcdn.net/jpg/04/51/17/56/360_F_451175664_hGK9S6kW4MRKEj7lr2D7nqlftwVD6siS.jpg"
          alt="..."
        />
        <MDBCardOverlay>
          <MDBCardTitle>ما هي أعظم آية في القرآن الكريم؟</MDBCardTitle>
          <br></br>

          <MDBCardText>
            ((آية الكرسي)) وهي الآية رقم 255 من سورة البقرة
          </MDBCardText>
        </MDBCardOverlay>
      </MDBCard>
    </div>
  );
}
