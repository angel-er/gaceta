import ContainerCustom from "#components/Container/Container.js";
import AlignItemsList from "#components/List/List.js";
import { Divider } from "@mui/material";
import { data } from "./data-random";

const Lows = () => {
  return (
    <ContainerCustom title="Leyes Municipales">
      <Divider />
      <AlignItemsList data={data} />
    </ContainerCustom>
  );
};

export default Lows;
