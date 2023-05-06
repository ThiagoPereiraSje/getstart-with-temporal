async function helloWorldEnUs(username: string): Promise<string> {
  return `Hello world! ${username}`
}

async function helloWorldPtBR(username: string): Promise<string> {
  return `Olá mundo! ${username}`
}

export default {
  helloWorldEnUs,
  helloWorldPtBR
}