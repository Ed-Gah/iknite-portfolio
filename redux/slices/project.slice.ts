import { createSlice } from "@reduxjs/toolkit";
interface Projects {
  projects: any;
}

const initialState: Projects = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    resetProjectState: (state) => {
      state.projects = [];
    },
    handleProjectsData: (state, { payload }) => {
      state.projects = payload;
    },
  },
});

const { actions, reducer } = projectSlice;

/** Actions */
export const { resetProjectState, handleProjectsData } = actions;

/** Selectore method */
export const getProjectState = (state: any) => state.project;

/** Reducer */
export default reducer;
