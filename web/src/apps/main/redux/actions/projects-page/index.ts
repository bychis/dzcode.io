import { ProjectsPageState } from "src/apps/main/redux/reducers/projects-page";
import { ThunkResult } from "src/apps/main/redux";
import { fetchV2 } from "src/common/utils/fetch";

/**
 * shuffleProjects randomize the order of a projects array
 */
const shuffleProjects = <T>(array: T[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

/**
 * fetchProjectsList fetch an array from data api and pass it to the store
 */
export const fetchProjectsList = (): ThunkResult<ProjectsPageState> => async (dispatch) => {
  try {
    const projectsList = await fetchV2("data:projects/list.c.json", {});
    dispatch({
      type: "UPDATE_PROJECTS_PAGE",
      payload: { projectsList: shuffleProjects(projectsList) },
    });
  } catch (error) {
    console.error(error);
  }
};
