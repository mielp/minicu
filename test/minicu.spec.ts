import minicu from '../src/minicu';
import test from 'ava';

test('should be an empty object', (t) => {
  t.deepEqual(minicu, {});
});
