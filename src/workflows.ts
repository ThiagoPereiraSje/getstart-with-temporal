import { proxyActivities } from '@temporalio/workflow'
import activities from './activities'

const { helloWorldEnUs, helloWorldPtBR } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
  heartbeatTimeout: '10s',
  retry: {
    initialInterval: '5s'
  }
})

export async function ExampleWorkflow(username: string): Promise<string[]> {
  const stages: string[] = [];

  stages.push(await helloWorldEnUs(username));
  stages.push(await helloWorldPtBR(username));

  return stages
}