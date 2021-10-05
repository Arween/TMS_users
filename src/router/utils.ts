export const login = (userName: string) => {
  localStorage.setItem("refresh", userName);
};

export const logout = () => {
  localStorage.removeItem("refresh");
};

export const isLogin = () => {
  if (localStorage.getItem("refresh")) {
    return true;
  }

  return false;
};
