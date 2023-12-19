const validationComment = (data) => {
    const { content } = data;
  
    if (!content) {
      return "All fields are required";
    }

    if (content.length >= 60) {
      return "Content must be less than 60 characters";
    }

    if (content.length < 3) {
      return "Content must be at least 3 characters";
    }
    
    return "validated";
  };
  
  export { validationComment };
  