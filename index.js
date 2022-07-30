'use strict';
const fs = require('fs');
const fileName = './tasks.json';

// { name: タスクの文字列, state: 完了しているかどうかの真偽値 }
class Todo {
  constructor(items = []) {
    this.items = items;

    try {
      const data = fs.readFileSync(fileName, 'utf8');
      this.items = JSON.parse(data);
    } catch (ignore) {
      console.log(`${fileName}から復元できませんでした`);
    }
  }

  /**
   * タスクをファイルに保存する
   */
  saveTasks() {
    fs.writeFileSync(fileName, JSON.stringify(this.items), 'utf8');
  }

  /**
   * タスクを追加する
   * @param {string} taskName
   */
  add(taskName) {
    this.items = [...this.items, { name: taskName, state: false }];
    this.saveTasks();
  }

  /**
   * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了したかを返す
   * @param {object} task
   * @return {boolean} 完了したかどうか
   */
  isDone(task) {
    return task.state;
  }

  /**
   * タスクと完了したかどうかが含まれるオブジェクトを受け取り、完了していないかを返す
   * @param {object} task
   * @return {boolean} 完了していないかどうか
   */
  isNotDone(task) {
    return !this.isDone(task);
  }

  /**
   * タスクの一覧の配列を取得する
   * @return {Array} tasks
   */
  list() {
    return this.items?.filter(this.isNotDone.bind(this)).map(t => t.name);
  }

  /**
   * タスクを完了状態にする
   * @param {string} taskName
   */
  done(taskName) {
    const item = this.items?.find(t => t.name === taskName);
    const index = this.items?.indexOf(item);
    this.items[index] = { ...item, state: true };
    this.saveTasks();
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
   * @param {string} taskName
   */
  del(taskName) {
    this.items = this.items?.filter(t => t.name === taskName);
    this.saveTasks();
  }
}

module.exports = Todo;
