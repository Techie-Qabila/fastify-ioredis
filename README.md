# fastify-redis

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Fastify ioredis connection plugin, with this you can share the same Redis connection in every part of your server.

Under the hood the [ioredis](https://github.com/luin/ioredis) client is used, the options that you pass to `register` will be passed to the Redis client.

## Install
```
npm i fastify-ioredis --save
```
## Usage
Add it to you project with `register` and you are done!  
You can access the *Redis* client via `fastify.redis.client`.
```js
const fastify = require('fastify')

fastify.register(require('fastify-ioredis'), {
  host: '127.0.0.1'
}, err => {
  if (err) throw err
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
```

## License

Licensed under [MIT](./LICENSE).
