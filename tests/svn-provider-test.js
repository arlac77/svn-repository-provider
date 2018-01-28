import test from 'ava';
import { SubversionProvider } from '../src/svn-repository-provider';

const credentials = {
  password: 'xxx',
  user: 'yyy'
};

if (process.env.SVN_USER) {
  credentials.user = process.env.SVN_USER;
}

if (process.env.SVN_PASSWORD) {
  credentials.password = process.env.SVN_PASSWORD;
}

test('svn provider type', async t => {
  const provider = new SubversionProvider();

  t.is(provider.type, 'svn');
});

test.skip('svn provider', async t => {
  const provider = new SubversionProvider(credentials);

  const repository = await provider.repository(
    'https://subversion.assembla.com/svn/delivery_notes'
  );

  t.is(repository.name, 'delivery_notes');
});
