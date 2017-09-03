'use strict'

const fp = require('fastify-plugin')
const Redis = require('ioredis')

function noop () {}

function fastifyRedis (fastify, options, next) {
  const client = new Redis(options)
  const pub = new Redis(options)
  const sub = new Redis(options)

  client.on('error', noop)
  pub.on('error', noop)
  sub.on('error', noop)

  client.on('connect', function () {
    const redis = {
      client: client,
      pub: pub,
      sub: sub
    }

    fastify
      .decorate('redis', redis)
      .addHook('onClose', close)

    next()
  })
}

function close (fastify, done) {
  const redis = fastify.redis
  redis.client.disconnect()
  redis.pub.disconnect()
  redis.sub.disconnect()
  done()
}

module.exports = fp(fastifyRedis, '>=0.13.1')
