import test from 'ava';
import { _, register } from '../src/minicu';

const afterRegister = 'After registering a language';

test(`${afterRegister}, the new messages should be present`, (t) => {
  register('en-US', { calvin: 'hobbes' });
  t.is(_('calvin', 'en-US'), 'hobbes');
});

test(`${afterRegister}, other messages should be undefined`, (t) => {
  register('en-US', { calvin: 'hobbes' });
  t.is(_('hobbes', 'en-US'), undefined);
});

test(`${afterRegister}, previous messages should be lost`, (t) => {
  register('en-US', { calvin: 'hobbes' });
  register('en-US', { hobbes: 'calvin' });
  t.is(_('hobbes', 'en-US'), 'calvin');
  t.is(_('calvin', 'en-US'), undefined);
});
