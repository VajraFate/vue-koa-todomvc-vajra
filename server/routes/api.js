import KoaRouter from 'koa-router';
import * as todoList from '../controllers/todolist';
const apiRouter = new KoaRouter();
const pathName = '/api/todolist';

apiRouter.get(`${pathName}/:id`, todoList.getTodoListByUserId);
apiRouter.get(`${pathName}`, todoList.getAllTodoList);
apiRouter.post(`${pathName}`, todoList.createTodoList);
apiRouter.put(`${pathName}/:id`, todoList.updateTodoList);
apiRouter.delete(`${pathName}/:id`, todoList.deleteTodoList);

export default apiRouter;
