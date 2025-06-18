const mail = async ({ name, email, message }) =>
  {
    console.log(name,email,message);
    
    return {
      status: 200,
      data: { success: true, message: "brrrrrrrrrrr" },
    };

  }

export default mail;
