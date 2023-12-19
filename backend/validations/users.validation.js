const validationRegister = (data) => {
  const { first_name, last_name, email, password } = data;

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if all fields are filled
  if (!first_name && !last_name && !email && !password) {
    return "All fields are required";
  }

  // Check if all fields are valid
  if (!first_name) {
    return "First name is required";
  }
  if (!last_name) {
    return "Last name is required";
  }
  if (!email) {
    return "Email is required";
  }
  if (!password) {
    return "Password is required";
  }

  // Check first name
  if (first_name.length <= 3) {
    return "First name must be at least 3 characters";
  }
  if (first_name.length >= 24) {
    return "First name must be less than 24 characters";
  }

  // Check last name
  if (last_name.length <= 3) {
    return "Last name must be at least 3 characters";
  }
  if (last_name.length >= 24) {
    return "Last name must be less than 24 characters";
  }

  // Check email
  if (!isEmail.test(email)) {
    return "Email is invalid";
  }
  if (email.length >= 60) {
    return "Email must be less than 60 characters";
  }

  // Check password
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
  if (password.length >= 20) {
    return "Password must be less than 20 characters";
  }

  return "validated";
};

const validationLogin = (data) => {
  const { email, password } = data;

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if all fields are filled
  if (!email && !password) {
    return "All fields are required";
  }
  // Check email
  if (!isEmail.test(email)) {
    return "Email is invalid";
  }
  if (email.length >= 50) {
    return "Email must be less than 50 characters";
  }

  // Check password
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
  if (password.length >= 20) {
    return "Password must be less than 20 characters";
  }

  return "validated";
};

const validationForgotPassword = (data) => {
  const { email } = data;

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if all fields are filled
  if (!email) {
    return "Email empty";
  }
  // Check email
  if (!isEmail.test(email)) {
    return "Email is invalid";
  }
  if (email.length >= 50) {
    return "Email must be less than 50 characters";
  }

  return "validated";
};

const validationResetPassword = (data) => {
  const { password } = data;

  // Check if all fields are filled
  if (!password) {
    return "Password empty";
  }
  // Check password
  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }
  if (password.length >= 20) {
    return "Password must be less than 20 characters";
  }

  return "validated";
};

const validationSendEmail = (data) => {
  const { name, email, message } = data;

  // Check if all fields are filled
  if (!name && !email && !message) {
    return "All fields are required";
  }

  // Check name
  if (name.length <= 3) {
    return "Name must be at least 3 characters";
  }
  if (name.length >= 24) {
    return "Name must be less than 24 characters";
  }

  // Check email
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!isEmail.test(email)) {
    return "Email is invalid";
  }
  if (email.length >= 60) {
    return "Email must be less than 60 characters";
  }

  // Check message
  if (message.length <= 3) {
    return "Message must be at least 3 characters";
  }
  if (message.length >= 200) {
    return "Message must be less than 225 characters";
  }

  return "validated";
};

export {
  validationRegister,
  validationLogin,
  validationForgotPassword,
  validationResetPassword,
  validationSendEmail
};
