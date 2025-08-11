import React from "react";
import homePagevideo from "../../public/HomePageVideo.mp4";
import Nav from "../components/Navbar/Nav";

function Home() {
    return (
        <div style={{ position: "relative", height: "100vh", overflow: "hidden" }} >
            <video autoPlay loop muted playsInline
                style={{ position: "absolute", top: "50%", left: "50%", minWidth: "100%", minHeight: "100%", width: "auto", height: "auto", zIndex: "-1", transform: "translate(-50%, -50%)", objectFit: "cover", }}
            >
                <source src={homePagevideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <Nav />

            <div className="flex justify-center">
                <h1 className="text-4xl font-bold text-white w-200 ">Transforming the Way You Look & Feel, <p className="text-center">While Empowering Skilled Professionals</p></h1>
         
            </div>
            <p></p>
        </div>
    );
}

export default Home;
