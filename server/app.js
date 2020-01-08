import Koa from 'koa';
// import path from 'path';
import koaRouter from 'koa-router';
import koaBodyparser from 'koa-bodyparser';

const app = new Koa();
const router = koaRouter();
app.use(router);
app.use(koaBodyparser());

app.listen(8888);
