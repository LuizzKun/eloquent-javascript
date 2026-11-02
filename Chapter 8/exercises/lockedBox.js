const box = new class {
  locked = true;
  #content = [];

  unlock() {
    this.locked = false;
  }

  lock() {
    this.locked = true;
  }

  get content() {
    if(this.locked) {
      throw new Error("Locked!")
    }
    return this.#content;
  }
}

function withBoxUnlocked(body) {
  let wasLocked = box.locked;

  if (wasLocked) {
    box.unlock();
  }

  try {
    body();
  } finally {
    if (wasLocked) {
      box.lock();
    }
  }
}