export const USER = 'USER';
export const URL = 'URL';

export function updateUserName(user) {
  return {
    type: USER,
    user: user,
  };
}

export function getAttachmentUrl(url) {
  return {
    type: URL,
    url: url
  };
}