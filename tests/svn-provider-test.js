import test from 'ava';
import { SubversionProvider } from '../src/svn-repository-provider';

test('svn provider', async t => {
  const provider = new SubversionProvider();

  t.is(provider.type, 'svn');
});
