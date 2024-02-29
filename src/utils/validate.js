export const validate = (email, password) => {
  const validEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!validEmail && !validPassword) {
    return "email and password invalid";
  }
  if (!validEmail) {
    return "Email is invalid";
  }
  if (!validPassword) {
    return "Password is invalid";
  }
  return null;
};
