import { Connection, Client } from '@temporalio/client';

export async function startWorkflow() {
  const connection = await Connection.connect();
  const client = new Client({
    connection
  })

  const handle = await client.workflow.start('ExampleWorkflow', {
    args: ['thiago.pereira'],
    taskQueue: 'hello-world',
    workflowId: `workflow-id-${Date.now()}`
  })

  console.log('Started workflow: ', handle.workflowId);
  console.log('Result: ', await handle.result());
}