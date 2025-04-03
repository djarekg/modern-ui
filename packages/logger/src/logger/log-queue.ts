export class LogQueue {
  #queue = new Array<() => void>();

  get empty() {
    return this.#queue.length === 0;
  }
  get length() {
    return this.#queue.length;
  }

  enqueue(fn: () => void) {
    this.#queue.push(fn);
    setTimeout(() => this.flush());
  }

  dequeue() {
    const fn = this.#queue.shift();
    if (fn) {
      fn();
    }
  }

  clear() {
    this.#queue = [];
  }

  flush() {
    while (!this.empty) {
      this.dequeue();
    }
  }
}
