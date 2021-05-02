import { _, register } from '../src/minicu';
import test from 'ava';

const when = 'When getting a message';

test(`${when}, unknown language should not throw`, (t) => {
  t.notThrows(() => _('calvin', 'fr-FR'));
});

test(`${when}, unknown messages should be undefined`, (t) => {
  t.is(_('calvin', 'fr-FR'), undefined);
});

test(`${when}, the desired locale should be used`, (t) => {
  register('en-US', { calvin: 'hobbes' });
  register('fr-BE', { spirou: 'spip' });
  t.is(_('calvin', 'en-US'), 'hobbes');
  t.is(_('spirou', 'fr-BE'), 'spip');
  t.is(_('spirou', 'en-US'), undefined);
  t.is(_('calvin', 'fr-BE'), undefined);
});
