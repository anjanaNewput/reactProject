export const USER_NAME = 'USER_NAME';

export function updateUserName(name) {
  return {
    type: USER_NAME,
    username: name,
  };
}