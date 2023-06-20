import emailjs from 'emailjs-com';
import {client} from '../../sanityclient'; 

export const sendEmail = (formData) => {
  emailjs.init('H1gzgXLZ1Z9NxvYEK');
  emailjs
    .send("service_z6xpptm", "template_sv8se54", {
      from_name: formData.dzName,
      to_name: "Raj Singh",
      message: formData.dzmessage
    })
    .then((result) => {
      console.log(result.text);
      alert("Our Team Will Contact you soon");
    })
    .catch((error) => {
      console.log(error.text);
    });
  console.log(formData);
};

export const sendToDatabase = async (data) => {
  try {
    const { dzName, countrycode, dzphone, dzEmail, dztitle, dzmessage } = data;

    const contactData = {
      _type: 'Contact',
      name: dzName,
      phone: `${countrycode} ${dzphone}`,
      email: dzEmail,
      title: dztitle,
      message: dzmessage
    };

    await client.create(contactData);
    console.log('Data sent to Sanity database:', contactData);
  } catch (error) {
    console.error('Error while sending data to Sanity database:', error);
  }
};
