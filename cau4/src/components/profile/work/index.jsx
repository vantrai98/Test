import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addWork, editWork, updateWork } from "../../../slice/index";
import AddButton from "../../shared/AddButton";
import Title from "../../shared/Title";
import WorkForm from "./WorkForm";
import WorkItem from "./WorkItem";

function Education(props) {
  const dispatch = useDispatch();
  const [addNew, isAddNew] = useState(false);
  const data = useSelector((state) => state.profile.works);

  const handleAddNew = (data) => {
    const newData = { ...data, id: uuidv4() };

    dispatch(addWork(newData));
  };

  const handleEdit = (item) => {
    dispatch(editWork({ id: item.id, value: true }));
  };

  const handleCancelEdit = (item) =>
    dispatch(editWork({ id: item.id, value: false }));

  return (
    <Box {...props}>
      <Title>Học vấn</Title>

      {data.map((item) =>
        item.isEditing ? (
          <Box
            padding="16px"
            bgcolor="#f0f2f566"
            borderRadius="4px"
            marginTop="12px"
          >
            <WorkForm
              key={item.id}
              item={{ ...item }}
              marginTop="8px"
              onSubmit={(data) => dispatch(updateWork(data))}
              onCancel={() => handleCancelEdit(item)}
            />
          </Box>
        ) : (
          <WorkItem
            key={item.id}
            item={item}
            marginTop="8px"
            onEdit={() => handleEdit(item)}
          />
        )
      )}

      {addNew && (
        <Box
          padding="16px"
          bgcolor="#f0f2f566"
          borderRadius="4px"
          marginTop="12px"
        >
          <WorkForm onCancel={() => isAddNew(false)} onSubmit={handleAddNew} />
        </Box>
      )}

      {!addNew && (
        <AddButton style={{ marginTop: "12px" }} onClick={() => isAddNew(true)}>
          Thêm công việc mới
        </AddButton>
      )}
    </Box>
  );
}

export default Education;
