'use strict';
// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
class Todo {
  constructor(items = []) {
    this.items = items;
  }

  /**
   * TODOを追加する
   * @param {string} task
   */
  add(task) {
    this.items = [...this.items, { name: task, state: false }];
  }

  /**
   * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了したかを返す
   * @param {object} taskAndIsDonePair
   * @return {boolean} 完了したかどうか
   */
  isDone(taskAndIsDonePair) {
    return taskAndIsDonePair.state;
  }

  /**
   * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了していないかを返す
   * @param {object} taskAndIsDonePair
   * @return {boolean} 完了していないかどうか
   */
  isNotDone(taskAndIsDonePair) {
    return !isDone(taskAndIsDonePair);
  }

  /**
   * TODOの一覧の配列を取得する
   * @return {Array} tasks
   */
  list() {
    return this.items?.filter(this.isNotDone).map(t => t.name);
  }

  /**
   * TODOを完了状態にする
   * @param {string} task
   */
  done(task) {
    const item = this.items?.find(t => t.name === task);
    const index = this.items?.indexOf(item);
    this.items[index] = { ...item, state: true };
  }

  /**
   * 完了済みのタスクの一覧の配列を取得する
   * @return {Array} tasks
   */
  donelist() {
    return this.items?.filter(this.isDone).map(t => t.name);
  }

  /**
   * 項目を削除する
   * @param {string} task
   */
  del(task) {
    this.items = this.items?.filter(t => t.name === task);
  }
}

module.exports = Todo;
