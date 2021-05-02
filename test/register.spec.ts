import test from 'ava';
import { _, register } from '../src/minicu';

const when = 'When registering a dictionary';
const after = 'After registering a language';

test(`${when}, empty object should not fail`, (t) => {
  t.notThrows(() => register('en-US', { galaxy: {} }));
  t.is(_('galaxy', 'en-US'), undefined);
});

test(`${after}, the new messages should be present`, (t) => {
  register('en-US', { calvin: 'hobbes' });
  t.is(_('calvin', 'en-US'), 'hobbes');
});

test(`${after}, other messages should be undefined`, (t) => {
  register('en-US', { calvin: 'hobbes' });
  t.is(_('hobbes', 'en-US'), undefined);
});

test(`${after}, previous messages should be lost`, (t) => {
  register('en-US', { calvin: 'hobbes' });
  register('en-US', { hobbes: 'calvin' });
  t.is(_('hobbes', 'en-US'), 'calvin');
  t.is(_('calvin', 'en-US'), undefined);
});

test(`${after}, nested keys should be accessible with a path`, (t) => {
  register('en-US', { galaxy: { system: { planet: 'Earth' } } });
  t.is(_('galaxy.system.planet', 'en-US'), 'Earth');
});

test(`${after}, nested parents should be undefined`, (t) => {
  register('en-US', { galaxy: { system: { planet: 'Earth' } } });
  t.is(_('galaxy', 'en-US'), undefined);
  t.is(_('galaxy.system', 'en-US'), undefined);
});
