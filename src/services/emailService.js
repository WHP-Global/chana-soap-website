export const sendEmail = async (dataFromInput, subject) => {
  try {
    await fetch("http://www.chanasoapofficial.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dataFromInput, subject }),
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
