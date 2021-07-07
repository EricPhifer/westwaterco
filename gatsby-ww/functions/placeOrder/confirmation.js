const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
  return `<div>
    <h2>Your Recent Order for ${total} was received!</h2>
    <p>Please start walking over, we will have your order ready in the next 20 mins.</p>
    <ul>
      ${order
        .map(
          (item) => `<li>
        <img src="${item.thumbnail}" alt="${item.name}"/>
        ${item.size} ${item.name} - ${item.price}
        </li>`
        )
        .join('')}
    </ul>
    <p>Your total of <strong>$${total}</strong> due at pickup.</p>
    <style>
        ul {
          list-style: none;
        }
    </style>
  </div>`;
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function wait(ms = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

exports.handler = async (event, context) => {
  await wait(5000);
  const body = JSON.parse(event.body);
  // Check if honeypot is filled out
  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'beep beep boop bop zzzzssstt good bye Error: 35425',
      }),
    };
  }
  // Validate the data coming in is correct
  const requiredFields = ['email', 'name', 'order'];

  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! You are missing the ${field} field.`,
        }),
      };
    }
  }

  // Make sure pizzas exist
  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Uh-oh! Something went wrong!`,
      }),
    };
  }
  const info = await transporter.sendMail({
    from: 'Eric Phifer LLC <eric@ericphiferllc.com>',
    to: `${body.name} <${body.email}>`,
    subject: 'Payment Confirmation!',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
