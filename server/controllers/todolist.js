import todoList from '../models/todolist';

async function getTodoList (ctx, options) {
  const items = await todoList.findAll(options);
  return items;
}

export const getTodoListByUserId = async function (ctx, next) {
  const id = ctx.params.id;
  const items = await todoList.findAll(
    {
      where: {
        user_id: id
      }
    }
  );
  ctx.body = {
    result: items,
    status: 200
  };
};

export const getAllTodoList = async function (ctx) {
  console.log('getAllTodoList');
  const items = await todoList.findAll();

  ctx.body = {
    result: items,
    status: 200
  };
  // console.log(ctx);
};

export const createTodoList = async function (ctx) {
  const body = ctx.request.body;
  console.log('body', body);
  const result = await todoList.create({
    user_id: body.user_id,
    content: body.content,
    status: body.status
  });
  console.log('create new one', result.toJSON());
  ctx.body = {
    result,
    status: 200
  };
};

export const updateTodoList = async function (ctx, next) {
  try {
    const body = ctx.request.body;
    const id = ctx.params.id;
    console.log(body);
    await todoList.update(Object.assign({}, body), {
      where: {
        id: body.id,
      },
    });
    const items = await getTodoList(ctx, {
      where: {
        id: body.id,
      }
    });
    ctx.body = {
      reuslt: items,
      status: 200
    };
  } catch (e) {
    console.log(e);
  }
};

export async function deleteTodoList (ctx, netx) {
  const id = ctx.params.id;
  const result = await todoList.destroy({
    where: {
      id
    }
  });
  console.log(result);
  ctx.body = {
    status: 200
  };
}
// createTodoList({
//   request: {
//     data: {
//       user_id: 1,
//       content: 'vajra Json'
//     }
//   }
// });

