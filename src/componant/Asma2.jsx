import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { names } from "./allahNames";
export default function StandardImageList() {
  return (
    <>
      
      <div className="w-100 d-flex flex-wrap justify-content-evenly gap-2 ">
        {names.map((name) => {
          return (
            <MDBCard
              background="dark "
              className="text-light fs-5  hover-zoom rounded-circle "
              style={{ width: "10%" }}
            >
              <MDBCardImage
                className="rounded-circle"
                overlay
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQffZmIZGRuz1d-B3YMppNmuDZAcwU6BR8Du53rPUYjVpHgESytYefpoddz0xqXdvMjoA&usqp=CAU"
                alt="..."
              />
              <MDBCardOverlay>
                <MDBCardTitle className="d-flex justify-content-center mt-1">
                  <p className="text-center  h3">{name.name}</p>
                </MDBCardTitle>
              </MDBCardOverlay>
            </MDBCard>
          );
        })}
      </div>
    </>
  );
}
