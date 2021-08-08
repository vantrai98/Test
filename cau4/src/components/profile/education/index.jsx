import { Box } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddButton from "../../shared/AddButton";
import Title from "../../shared/Title";
import EducationForm from "./EducationForm";
import EducationItem from "./EducationItem";
import {
  addEducation,
  editEducation,
  updateEducation,
} from "../../../slice/index";
import { v4 as uuidv4 } from "uuid";

function Education(props) {
  const dispatch = useDispatch();
  const [addNew, isAddNew] = useState(false);
  const data = useSelector((state) => state.profile.educations);

  const handleCancelAddNew = () => isAddNew(false);

  const handleAddNew = (data) => {
    const newData = { ...data, id: uuidv4() };

    dispatch(addEducation(newData));
  };

  const handleEdit = (item) => {
    dispatch(editEducation({ id: item.id, value: true }));
  };

  const handleCancelEdit = (item) =>
    dispatch(editEducation({ id: item.id, value: false }));

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
            <EducationForm
              key={item.id}
              item={{ ...item }}
              marginTop="8px"
              onSubmit={(data) => dispatch(updateEducation(data))}
              onCancel={() => handleCancelEdit(item)}
            />
          </Box>
        ) : (
          <EducationItem
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
          <EducationForm
            onCancel={handleCancelAddNew}
            onSubmit={handleAddNew}
          />
        </Box>
      )}

      {!addNew && (
        <AddButton style={{ marginTop: "12px" }} onClick={() => isAddNew(true)}>
          Thêm học vấn mới
        </AddButton>
      )}
    </Box>
  );
}

export default Education;
