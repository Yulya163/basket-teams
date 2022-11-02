const BASIC_AUTH_TOKEN = 'basic_auth_token';

export type TokenData = {
  token: Token;
};
export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(BASIC_AUTH_TOKEN);
  return token ?? '';
};

export const saveToken = (tokenData: TokenData): void => {  
  localStorage.setItem(BASIC_AUTH_TOKEN, tokenData.token);
  window.location.reload();
};

export const dropToken = (): void => {
  localStorage.removeItem(BASIC_AUTH_TOKEN);
  window.location.reload();
};