import { Worker } from '@temporalio/worker'
import activities from './activities'

export async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows'),
    activities,
    taskQueue: 'hello-world',
  });

  await worker.run();
}

run().catch(error => {
  console.error('Error: ', error);
  process.exit(1);
});