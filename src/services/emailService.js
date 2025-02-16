export const sendEmail = async (dataFromInput, subject) => {
  try {
    await fetch("http://localhost:8888/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dataFromInput, subject }),
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
