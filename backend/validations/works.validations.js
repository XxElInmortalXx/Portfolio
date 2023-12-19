const validationWork = (data) => {
    const { title, subtitle, content } = data;
  
    if (!title && !subtitle && !content) {
      return "All fields are required";
    }
  
    if (title.length >= 24) {
      return "Title must be less than 24 characters";
    }
  
    if (title.length < 3) {
      return "Title must be at least 3 characters";
    }
  
    if (subtitle.length >= 24) {
      return "Subtitle must be less than 24 characters";
    }
  
    if (subtitle.length < 3) {
      return "Subtitle must be at least 3 characters";
    }
  
    if (content.length >= 2000) {
      return "Content must be less than 2000 characters";
    }
  
    if (content.length < 30) {
      return "Content must be at least 30 characters";
    }
  
    return "validated";
  };
  
  export { validationWork };
  
