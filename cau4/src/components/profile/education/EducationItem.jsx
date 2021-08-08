import { School as SchoolIcon } from "@material-ui/icons";
import React from "react";
import InfoItem from "../../shared/InfoItem";

function EducationItem({ item, ...props }) {
  return (
    <InfoItem
      title={item.name}
      description={item.majoring}
      IconComponent={SchoolIcon}
      {...props}
    />
  );
}

export default EducationItem;
