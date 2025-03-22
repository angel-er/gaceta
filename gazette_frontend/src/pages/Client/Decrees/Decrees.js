import ContainerCustom from "#components/Container/Container.js";
import AlignItemsList from "#components/List/List.js";
import { Divider } from "@mui/material";

import { data } from "./data-random";

const Decrees = () => {
  return (
    <ContainerCustom title="Decretos Municipales">
      <Divider />
      <AlignItemsList data={data} />
    </ContainerCustom>
  );
};

export default Decrees;
