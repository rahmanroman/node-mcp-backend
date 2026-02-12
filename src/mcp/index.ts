import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

import pkg from '../../package.json' with {type: 'json'}

export const createMcpServer = () => {
  const mcp = new McpServer({
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
  })

  mcp.registerTool('ping', {}, () => ({
    content: [{
      type: 'text',
      text: 'pong',
    }],
  }))

  return mcp
}
