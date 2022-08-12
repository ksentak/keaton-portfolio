const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context, callback) => {
  const { name, email, subject, message } = JSON.parse(event.body);

  const msg = {
    to: process.env.ADMIN_EMAIL,
    from: email,
    subject,
    html: `${message} \n from ${name}`,
  };

  try {
    await sgMail.send(msg);

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: 'Message sent successfully.' }),
    });
  } catch (err) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Failed to send email.' }),
    });
  }
};
