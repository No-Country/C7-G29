const mercadopago = require("mercadopago");
require("dotenv").config();
mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN,
});

const buy = async (req, res) => {
  const data = req.body;
  var buyMe = [];
  data.forEach((element) => {
    buyMe.push({
      title: element.title,
      unit_price: element.price,
      quantity: 1,
    });
  });

  var preference = {
    items: buyMe,
    auto_return: "approved",
    back_urls: {
      success: "http://localhost:3000/cart",
      pending: "http://localhost:3000/cart",
      failure: "http://localhost:3000/cart ",
    },
  };

  try {
    var q = "";
    // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso

    await mercadopago.preferences
      .create(preference)
      .then((response) => (q = response.body.init_point))
      .catch((e) => console.log(e));
    res.status(200).json(q);
  } catch (error) {}
};

module.exports = {
  buy,
};
