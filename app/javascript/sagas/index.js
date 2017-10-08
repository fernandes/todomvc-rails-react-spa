import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../api'

function* loginUser(action) {
   try {
      const user = yield call(Api.Auth.login, action.username, action.password);
      yield call(Api.setToken, user.jwt)
      yield put({type: "LOGIN_SUCCEEDED", payload: user.jwt, username: action.username});
      yield put({type: "TODOS_INDEX"});
   } catch (e) {
      yield put({type: "LOGIN_FAILED", message: e.message});
   }
}

function* logoutUser(action) {
   try {
     yield put({type: "LOGOUT_SUCCEEDED"});
   } catch (e) {
     yield put({type: "LOGOUT_FAILED", message: e.message});
   }
}

function* loadTodos(action) {
   try {
      const todos = yield call(Api.Todo.index);
      yield put({type: "TODOS_INDEX_SUCCEEDED", todos: todos});
   } catch (e) {
      yield put({type: "TODOS_INDEX_FAILED", message: e.message});
   }
}

function* createTodo(action) {
   try {
      const todo = yield call(Api.Todo.create, action.todo);
      yield put({type: "TODO_CREATE_SUCCEEDED", todo: todo});
   } catch (e) {
      yield put({type: "TODO_CREATE_FAILED", message: e.message});
   }
}

function* updateTodo(action) {
   try {
      const todo = yield call(Api.Todo.update, action.id, action.todo);
      yield put({type: "TODO_UPDATE_SUCCEEDED", todo: todo});
   } catch (e) {
      yield put({type: "TODO_UPDATE_FAILED", message: e.message});
   }
}

function* deleteTodo(action) {
   try {
      const todo = yield call(Api.Todo.delete, action.id);
      yield put({type: "TODO_DELETE_SUCCEEDED", id: action.id});
   } catch (e) {
      yield put({type: "TODO_DELETE_FAILED", message: e.message});
   }
}

function* clearCompletedTodos(action) {
   try {
      const todos = yield call(Api.Todo.clearCompleted);
      yield put({type: "TODOS_CLEAR_COMPLETED_SUCCEEDED", todos: todos});
   } catch (e) {
      yield put({type: "TODOS_CLEAR_COMPLETED_FAILED", message: e.message});
   }
}

function* toggleStatusTodos(action) {
   try {
      const todos = yield call(Api.Todo.toggleStatus, action.status);
      yield put({type: "TODOS_TOGGLE_STATUS_SUCCEEDED", todos: todos, status: action.status});
   } catch (e) {
      yield put({type: "TODOS_TOGGLE_STATUS_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeLatest("LOGIN_REQUESTED", loginUser);
  yield takeLatest("LOGOUT_REQUESTED", logoutUser);
  yield takeLatest("TODOS_INDEX", loadTodos);
  yield takeLatest("TODOS_CLEAR_COMPLETED", clearCompletedTodos);
  yield takeLatest("TODOS_TOGGLE_STATUS", toggleStatusTodos);
  yield takeLatest("TODO_CREATE", createTodo);
  yield takeLatest("TODO_UPDATE", updateTodo);
  yield takeLatest("TODO_DELETE", deleteTodo);
}

export default mySaga;
