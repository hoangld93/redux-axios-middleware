export const GET_REPOS = 'my-awesome-app/repos/LOAD';
export const GET_REPOS_SUCCESS = 'my-awesome-app/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'my-awesome-app/repos/LOAD_FAIL';

const initialState = { repoInfo: {}, user: {}, loading: true};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, loading: true };
    case GET_REPOS_SUCCESS:
      return { ...state, loading: false, repos: action.payload.data };
    case GET_REPOS_FAIL:
      return { ...state, loading: false, error: action.error};
    default:
      return state;
  }
}

export function listRepos(user) {
  return {
    type: [GET_REPOS],
    payload: {
      request: {
        method: 'get',
        url: `/users/${user}/repos`
      }
    }
  };
}

export function listReposSuccess(response) {
  return {
    type: [GET_REPOS_SUCCESS],
    payload: response
  };
}

export function listReposFailed(error) {
  return {
    type: [GET_REPOS_FAIL],
    error: error
  };
}