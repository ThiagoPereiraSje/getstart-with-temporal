import { proxyActivities } from '@temporalio/workflow'
import activities from './activities'

const { helloWorldEnUs, helloWorldPtBR } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute'
})

export async function ExampleWorkflow(username: string): Promise<string> {
  const enUs = await helloWorldEnUs(username);
  const ptBR = await helloWorldPtBR(username);

  return `Hellos: ${enUs} - ${ptBR}`
}