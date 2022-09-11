import { send, init } from "emailjs-com";

const serviceId = "service_xkbqujp";
const templateId = "template_1h162ks";
const userID = "Hg0uJdp30gUWdtjYV";

const sendEmail = (content) => {
  init(userID);
  const toSend = {
    from_name: content.from_name,
    to_name: content.to_name,
    to_email: content.to_email,
    from_email: content.from_email,
    message: content.message,
  };
  send(serviceId, templateId, toSend)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { sendEmail };
