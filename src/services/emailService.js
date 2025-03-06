export const sendEmail = async (dataFromInput, subject) => {
  try {
    const response = await fetch(
      "http://www.chanasoapofficial.com/send-email",
      {
        // const response = await fetch("http://localhost:8888/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dataFromInput, subject }),
      }
    );

    return response;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
