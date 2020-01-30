export const required = (value) => {
  const message = "Field is required";

  if (value === undefined || value === null) {
    return message;
  }
  if (typeof value === 'string' && value.trim() === "") {
    return message;
  }
};

const patternValidator = (pattern, message) => (value) => {
  if(!pattern.test(value)) {
    return message;
  }
};

export const calculateEntropy = (val) => {
  if(!val) {
    return 0;
  }
  const r = [...new Set([...val])].length;
  const l = val.length;
  return Math.log2(Math.pow(r, l));
};

export const emailValidator = patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email");
export const passwordValidator = patternValidator(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Password must contain 1 uppercase letter, 1 lowercase, special char and must be 8 chars or longer");