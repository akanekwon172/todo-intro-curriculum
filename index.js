'use strict';
// { name: タスクの名前, isDone: 完了しているかどうかの真偽値 }
const tasks = [];

/**
 * タスクを追加する
 * @param {string} taskName
 */
function add(taskName) {
  tasks.push({ name: taskName, isDone: false });
}

/**
 * タスクの一覧の配列を取得する
 * @return {Array} tasks
 */
function list() {
  return tasks.filter(task => !task.isDone).map(task => task.name);
}

/**
 * タスクを完了状態にする
 * @param {string} taskName
 */
function done(taskName) {
  const indexFound = tasks.findIndex(task => task.name === taskName);
  if (indexFound !== -1) {
    tasks[indexFound].isDone = true;
  }
}

/**
 * 完了済みのタスクの一覧の配列を取得する
 * @return {Array} tasks
 */
function donelist() {
  return tasks.filter(task => task.isDone).map(task => task.name);
}

/**
 * 項目を削除する
 * @param {string} taskName
 */
function del(taskName) {
  const indexFound = tasks.findIndex(task => task.name === taskName);
  if (indexFound !== -1) {
    tasks.splice(indexFound, 1);
  }
}

module.exports = {
  add,
  list,
  done,
  donelist,
  del,
};
