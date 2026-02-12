import Fastify, { FastifyInstance, FastifyListenOptions } from 'fastify'
import helmet from '@fastify/helmet'
import cors from '@fastify/cors'
import FastifyMcpServer from 'fastify-mcp-server'

import { createMcpServer } from '../mcp'
import { config } from './config'

export const createFastifyServer = async () => {
  const server: FastifyInstance = Fastify({
    genReqId: () => String(process.hrtime.bigint()),
    disableRequestLogging: config.logger.disableRequestLogging,
    logger: { level: config.logger.level },
  })

  const options: FastifyListenOptions = {
    port: config.port,
    host: '0.0.0.0',
  }

  server.register(helmet, {
    global: true,
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })

  server.register(cors, {
    origin: true,
    credentials: true,
    maxAge: 86400,
  })

  server.get('/', async () => {
    return 'Ok'
  })

  await server.register(FastifyMcpServer, {
    createMcpServer,
    endpoint: '/mcp',
    logLevel: config.dev ? 'debug' : 'info',
  })

  server.setErrorHandler((error, request, reply) => {
    request.log.error(error)
    reply.status(500).send({ error: `Something went wrong (${request.id})` })
  })

  server.listen(options, (err) => {
    if (err) {
      server.log.error(err)
      process.exit(1)
    }
  })

  return server
}
