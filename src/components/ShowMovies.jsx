import React from "react";
import NavBar from "./NavBar";
//import {useSelector} from "react-redux"

const ShowMovies = () => {
  return (
    <div>
      <NavBar />

      <div className="m-4">
        <div className="col-sm-12">
          <div className="card p-2">
            <div style={{ display: "flex" }}>
              <div class="card " style={{ width: "25rem" }}>
                <img
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4xLzEwICBMaW1pdGVkIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00002956-rujpenevgf-portrait.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div className="m-4">
                <h1 style={{fontWeight:"bold"}}>Gadar: Ek Prem Katha</h1><br />

                <h6 style={{fontWeight:"bold"}}> - 2D,3D,MX4D 3D,ICE 3D,4DX 3D,IMAX 3D</h6><br />

                <h6 style={{fontWeight:"bold"}}> - 2h 50m • Action, Drama, Romantic • UA • 15 Jun, 2001</h6><br />

                <h4 style={{fontWeight:"bold"}}>About Movie</h4>

                <h5 > RE-RELEASING IN CINEMAS ON 9 JUNE 2023 in 4K and DOLBY ATMOS. Re-live the epic cult of Indian Cinema Gadar: Ek Prem Katha returning to the big screens after 22 years.</h5>

                <button className="mt-5" style={{backgroundColor:"#F94465", color:"white",width:"27vh",height:"8vh",borderRadius:"20px",fontSize:"3vh",fontWeight:"bold",border:"none"}}>Book Tickets</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="mx-5" src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="" />
    </div>
  );
};

export default ShowMovies;
