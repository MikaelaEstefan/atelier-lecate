import express from "express";
import cors from "cors";
import "dotenv/config";
import { MercadoPagoConfig, Preference } from "mercadopago";

const app = express();

app.use(cors());
app.use(express.json());

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

const preference = new Preference(client);

app.post("/create-preference", async (req, res) => {
  const { items } = req.body;

  try {
    const result = await preference.create({
      body: {
        items: items.map((item) => ({
          title: item.title,
          unit_price: item.price,
          quantity: 1,
          currency_id: "UYU",
        })),
      },
    });

    res.json({ init_point: result.init_point });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating preference" });
  }
});

app.listen(4000, () => {
  console.log("Backend running on http://localhost:4000");
});
