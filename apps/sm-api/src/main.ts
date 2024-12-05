import express from 'express';
import mongoose from "mongoose";
import cors from "cors"
import { servicesRoutes } from "./routes/services";

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost/service-management`)
app.use("/services", servicesRoutes);
app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});

