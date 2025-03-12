import React from "react";
import { Link } from "react-router-dom";
import Image from "#assets/images/rob.png";
// import IntlMessages from "@iso/components/utility/intlMessages";
import FourZeroFourStyleWrapper from "./404.styles";

const Error404 = () => {
  return (
    <FourZeroFourStyleWrapper className="iso404Page">
      <div className="iso404Content">
        <h1>404{/* <IntlMessages id="page404.title" /> */}</h1>
        <h3>
          Parece que te has perdido
          {/* <IntlMessages id="page404.subTitle" /> */}
        </h3>
        <p>
          La página que estás buscando no existe o se ha movido.
          {/* <IntlMessages id="page404.description" /> */}
        </p>
        <Link to="/dashboard">
          <button type="button">
            VOLVER A LA CASA
            {/* <IntlMessages id="page404.backButton" /> */}
          </button>
        </Link>
      </div>

      <div className="iso404Artwork">
        <img alt="#" src={Image} />
      </div>
    </FourZeroFourStyleWrapper>
  );
};

export default Error404;
