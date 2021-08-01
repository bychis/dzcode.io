import { Project } from "src/.common/types";

export interface ProjectsPageState {
  projectsList: Project[] | null;
}

export const projectsPage = (
  state: ProjectsPageState = {
    projectsList: null,
  },
  action: {
    type: string;
    payload: ProjectsPageState;
  },
) => {
  switch (action.type) {
    case "UPDATE_PROJECTS_PAGE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
