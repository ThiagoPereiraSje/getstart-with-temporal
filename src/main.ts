import express, { Express, Request, Response, json } from 'express'
import dotenv from 'dotenv'
import { runWorker } from './worker';
import { startWorkflow } from './client';
import { handleTemporalError } from './functions';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(json());

app.post('/deploy', async (req: Request, res: Response) => {
  const client_name = req.body.client_name;
  const result = await startWorkflow(client_name).catch(handleTemporalError)

  res.status(200).json(result);
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  runWorker().catch(handleTemporalError)
})