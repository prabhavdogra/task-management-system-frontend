const HOST = `https://task-management-system-backend-production.up.railway.app`
// Uncomment while testing on local
// const HOST = 'http://0.0.0.0:4002';

const AUTH_HOST = `${HOST}/api/auth`;
const TASK_HOST = `${HOST}/api/task`;
const USER_HOST = `${HOST}/api/user`

export const AUTH_SIGNUP_POST = `${AUTH_HOST}/signup`;
export const AUTH_LOGIN_POST = `${AUTH_HOST}/login`;
export const AUTH_LOGOUT_POST = `${AUTH_HOST}/logout`;
export const AUTH_AUTHENTICATE_POST = `${AUTH_HOST}/authenticate`;

export const USER_GET = `${USER_HOST}/get`;
export const USER_UPDATE_POST = `${USER_HOST}/update`;

export const TASK_CREATE_POST = `${TASK_HOST}/create`;
export const TASK_GET = `${TASK_HOST}`;
export const TASK_BY_ID_DELETE = (id) => `${TASK_HOST}/${id.toString()}`;
export const TASK_UPDATE_POST = `${TASK_HOST}/update`;

