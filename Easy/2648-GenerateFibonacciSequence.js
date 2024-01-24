/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  const arr = [0, 1, 1];
  let id = 2;
  yield arr[0];
  yield arr[1];
  while (true) {
    arr[id] = arr[id - 1] + arr[id - 2];
    yield arr[id++];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
