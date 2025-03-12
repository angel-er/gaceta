import React from "react";
import { Link } from "react-router-dom";
import Image from "#assets/images/rob.png";
// import IntlMessages from "@iso/components/utility/intlMessages";
import FiveZeroZeroStyleWrapper from "./500.styles";

const Error500 = () => {
  return (
    <FiveZeroZeroStyleWrapper className="iso500Page">
      <div className="iso500Content">
        <h1>
          500
          {/* <IntlMessages id="page500.title" /> */}
        </h1>
        <h3>
          error de servidor interno
          {/* <IntlMessages id="page500.subTitle" /> */}
        </h3>
        <p>
          Algo salió mal. Por favor inténtelo de nuevo.
          {/* <IntlMessages id="page500.description" /> */}
        </p>
        <Link to="/dashboard">
          <button type="button">
            VOLVER A LA CASA
            {/* <IntlMessages id="page500.backButton" /> */}
          </button>
        </Link>
      </div>

      <div className="iso500Artwork">
        <img alt="#" src={Image} />
      </div>
    </FiveZeroZeroStyleWrapper>
  );
};

export default Error500;
