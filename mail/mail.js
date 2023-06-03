import dotenv from "dotenv";
dotenv.config();
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SG);

const Email = async () => {
  function getMessage() {
    const body = "mike testing 123";
    return {
      to: "chandrasekaran2996@gmail.com",
      from: "awsuriya@gmail.com",
      subject: "Test email with Node.js and SendGrid",
      text: body,
      html: `<strong>${body}</strong>`,
    };
  }

  async function sendEmail() {
    try {
      await sgMail.send(getMessage());
      console.log("Test email sent successfully");
    } catch (error) {
      console.error("Error sending test email");
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  }

  (async () => {
    console.log("Sending test email");
    await sendEmail();
  })();
};
export default Email;
