import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  personal: {
    name: "Mai Văn Trãi",
    email: "maivantrai@gmail.com",
    birthday: "19/02/1998",
    ID: "197374497",
  },
  educations: [
    {
      name: "Đại học Khoa học tự nhiên - HCM",
      majoring: "Điện tử viễn thông",
      id: uuidv4(),
    },
    {
      name: "THPT Trần Thị Tâm - Quảng Trị",
      majoring: "Lớp 12B1",
      id: uuidv4(),
      isEditing: true,
    },
  ],
  works: [
    {
      name: "Logix technology",
      position: "Full-stack developer",
      id: uuidv4(),
    },
  ],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addEducation: (state, action) => ({
      ...state,
      educations: [...state.educations, action.payload],
    }),

    addWork: (state, action) => ({
      ...state,
      works: [...state.works, action.payload],
    }),

    editEducation: (state, { payload }) => {
      const index = state.educations.findIndex((x) => x.id === payload.id);

      if (index >= 0) {
        const educations = [...state.educations];
        educations[index] = {
          ...educations[index],
          isEditing: payload.value,
        };

        return { ...state, educations: educations };
      }

      return state;
    },

    editWork: (state, { payload }) => {
      const index = state.works.findIndex((x) => x.id === payload.id);

      if (index >= 0) {
        const works = [...state.works];
        works[index] = {
          ...works[index],
          isEditing: payload.value,
        };

        return { ...state, works: works };
      }

      return state;
    },

    updateEducation: (state, { payload }) => {
      const index = state.educations.findIndex((x) => x.id === payload.id);

      if (index >= 0) {
        const educations = [...state.educations];
        educations[index] = payload;
        educations[index].isEditing = false;

        return { ...state, educations: educations };
      }

      return state;
    },

    updateWork: (state, { payload }) => {
      const index = state.works.findIndex((x) => x.id === payload.id);

      if (index >= 0) {
        const works = [...state.works];
        works[index] = payload;
        works[index].isEditing = false;

        return { ...state, works: works };
      }

      return state;
    },
  },
});

export const {
  addEducation,
  addWork,
  updateEducation,
  updateWork,
  editWork,
  editEducation,
} = profileSlice.actions;

export default profileSlice.reducer;
