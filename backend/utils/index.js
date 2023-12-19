const generateId = () => {
  return Math.random().toString(36).substring(2);
};

export { generateId }