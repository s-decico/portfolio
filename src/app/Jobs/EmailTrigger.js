import toast from "react-hot-toast";

export const emailTrigger = async ({ name, email, message }) => {
  try {
    var data = {
      service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_USER_ID,
      template_params: {
        name: name,
        email: email,
        message: message,
      },
    };

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      return true;
    } else {
      console.log("Something went wrong in email:", response);
      throw new Error("Oops... " + JSON.stringify(response));
    }
  } catch (error) {
    console.log("Error in email:", error);
    return false;
  }
};
