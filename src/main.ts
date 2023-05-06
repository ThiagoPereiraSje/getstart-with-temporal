import express, { Express, Request, Response, json } from 'express'
import dotenv from 'dotenv'
import { run } from './worker';
import { startWorkflow } from './client';
import { handleTemporalError } from './functions';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(json());

app.post('/deploy', (req: Request, res: Response) => {
  const client_name = req.body.client_name;
  startWorkflow().catch(handleTemporalError)

  res.status(200).send(`Express hello! client_name: ${client_name}`);
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  run().catch(handleTemporalError)
})