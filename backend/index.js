import express from "express";
import cors from "cors";
import "dotenv/config";
import { MercadoPagoConfig, Preference } from "mercadopago";

const app = express();

const FRONT_ORIGINS = ["http://localhost:5173", "http://localhost:5174"];
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true, backend: "atelier-backend", ts: Date.now() });
});

console.log("MP_ACCESS_TOKEN loaded?", Boolean(process.env.MP_ACCESS_TOKEN));
console.log("Token preview:", process.env.MP_ACCESS_TOKEN?.slice(0, 12));

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
});

const preference = new Preference(client);

const PORT = process.env.PORT || 4000;

app.post("/create-preference", async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Items missing" });
    }

    const toNumber = (v) => {
      if (typeof v === "number") return v;
      const cleaned = String(v ?? "").replace(/[^\d.]/g, "");
      return Number(cleaned);
    };

    const mpItems = items.map((item) => ({
      title: item.title ?? "Obra",
      unit_price: toNumber(item.price),
      quantity: Number(item.quantity ?? 1),
      currency_id: "UYU",
    }));

    console.log("MP items:", mpItems);

  
    const result = await preference.create({
      body: { items: mpItems },
    });

    res.json({
      init_point: result.init_point,
      sandbox_init_point: result.sandbox_init_point,
    });
  } catch (error) {
    console.error("MP error:", error);
    res.status(500).json({
      error: "Error creating preference",
      message: error?.message,
      status: error?.status,
      cause: error?.cause,
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});

