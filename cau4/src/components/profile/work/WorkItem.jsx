import { BusinessCenter as BusinessCenterIcon } from "@material-ui/icons";
import React from "react";
import InfoItem from "../../shared/InfoItem";

function WorkItem({ item, ...props }) {
  return (
    <InfoItem
      title={item.name}
      description={item.position}
      IconComponent={BusinessCenterIcon}
      {...props}
    />
  );
}

export default WorkItem;
