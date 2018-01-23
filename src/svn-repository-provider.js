import { Provider, Repository, Branch } from 'repository-provider';

/**
 * Provider for subversion repositories
 */
export class SubversionProvider extends Provider {
  get repositoryClass() {
    return SubversionRepository;
  }

  get branchClass() {
    return SubversionBranch;
  }
}

/**
 * a subversion repository
 */
export class SubversionRepository extends Repository {}

/**
 *
 */
export class SubversionBranch extends Branch {}
