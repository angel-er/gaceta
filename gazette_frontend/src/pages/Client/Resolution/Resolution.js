import ContainerCustom from "#components/Container/Container.js";
import AlignItemsList from "#components/List/List.js";
import { Divider } from "@mui/material";

const Resolutions = () => {
  return (
    <ContainerCustom title="Resoluciones">
      <Divider />
      <AlignItemsList />
    </ContainerCustom>
  );
};

export default Resolutions;
