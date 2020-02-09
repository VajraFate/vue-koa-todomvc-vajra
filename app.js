import Koa from 'koa';
import apiRouter from './server/routes/api';
import logger from 'koa-logger';
import cors from 'koa2-cors';

const path = require('path');
const KoaRouter = require('koa-router');
const koaBodyparser = require('koa-bodyparser');
const server = require('koa-static');

const app = new Koa();
const router = new KoaRouter();
app.use(cors());
// app.use(router);
app.use(koaBodyparser());

app.use(server(path.resolve('./dist')));

router.get('/vajra', (ctx, next) => {
  ctx.body = `这是一个基础的ctx${JSON.stringify(ctx)}`;
  console.log(ctx);
  return ctx;
});

// router.get('/api/todoList', (ctx, next) => {
//   ctx.body = 'todoList';
//   return ctx;
// });
app.use(logger());

app.use(router.routes());
app.use(router.allowedMethods());
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());

app.listen(8888, () => {
  console.log('open 8888');
});
