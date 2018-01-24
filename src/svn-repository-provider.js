import { Provider, Repository, Branch } from 'repository-provider';

/**
 * Provider for subversion repositories
 */
export class SubversionProvider extends Provider {
  /**
   * @return {Class} SubversionRepository
   */
  get repositoryClass() {
    return SubversionRepository;
  }

  /**
   * @return {Class} SubversionBranch
   */
  get branchClass() {
    return SubversionBranch;
  }

  /**
   * Deliver the repository type
   * @return {string} 'svn'
   */
  get type() {
    return 'svn';
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
