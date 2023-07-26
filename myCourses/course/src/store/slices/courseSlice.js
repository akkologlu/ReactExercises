import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addCourse(state, action) {
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCourse(state, action) {
      const updatedCourses = state.data.filter((course) => {
        return course.id !== action.payload;
      });
      state.data = updatedCourses;
    },
    changeSearchterm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});
export const { addCourse, removeCourse, changeSearchterm } =
  courseSlice.actions;
export const courseReducer = courseSlice.reducer;
