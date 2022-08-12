const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context, callback) => {
  const { name, email, subject, message } = JSON.parse(event.body);

  const msg = {
    to: process.env.ADMIN_EMAIL,
    from: process.env.SENDER_EMAIL,
    subject,
    html: `${message} \n from ${name} | ${email}`,
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
