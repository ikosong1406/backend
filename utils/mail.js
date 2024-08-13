const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.zunim.com.ng",
  port: 465, //465 is true & other port are false
  secure: true,
  auth: {
    user: "support@zunim.com.ng",
    pass: "Zunimsupport@14",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendMail(to, subject, text, html) {
  const mailOptions = {
    from: "support@zunim.com.ng",
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
