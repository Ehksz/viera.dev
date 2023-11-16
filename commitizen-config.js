const custom = require('@digitalroute/cz-conventional-changelog-for-jira/configurable');
// You can do this optionally if you want to extend the commit types
const defaultTypes = require('@digitalroute/cz-conventional-changelog-for-jira/types');

module.exports = custom({
  types: {
    ...defaultTypes,
    feat: { title: 'Feature', description: 'A new feature' },
    fix: { title: 'Bugfix', description: 'A bug fix' },
    hotfix: { title: 'Hotfix', description: 'An urgent fix for a critical issue on production' },
    docs: { title: 'Docs', description: 'Documentation only changes' },
    style: {
      title: 'Style',
      description:
        'Changes that do not affect the meaning of the code (white-space, formatting, etc)',
    },
    refactor: {
      title: 'Refactor',
      description: 'A code change that neither fixes a bug nor adds a feature',
    },
    perf: { title: 'Performance', description: 'A code change that improves performance' },
    test: { title: 'Test', description: 'Adding missing tests or correcting existing tests' },
    chore: {
      title: 'Chore',
      description:
        'Changes to the build process or auxiliary tools and libraries such as documentation generation',
    },
    revert: { title: 'Revert', description: 'Reverting back to a previous version' },
    ci: {
      title: 'CI',
      description:
        'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
    },
    build: {
      title: 'Build',
      description:
        'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
    },
    update: { title: 'Update', description: 'Updating the version of a dependency' },
    security: { title: 'Security', description: 'Security related changes' },
    config: { title: 'Config', description: 'Changing configuration files' },
    i18n: { title: 'I18n', description: 'Internationalization and localization' },
    lint: { title: 'Lint', description: 'Linting fixes' },
    breaking: {
      title: 'Breaking',
      description: 'A code change that breaks backward compatibility',
    },
    merge: { title: 'Merge', description: 'Merge branch commits' },
    upgrade: { title: 'Upgrade', description: 'Upgrading dependencies' },
    downgrade: { title: 'Downgrade', description: 'Downgrading dependencies' },
  },
  skipScope: false,
  scopes: [
    'web',
    'strapi',
    'infra',
    'api',
    'testing',
    'documentation',
    'config',
    'deployment',
    'performance',
    'maintenance',
    'design',
    'analytics',
    'logging',
    'build',
    'dependency',
    'release',
  ],
  customScope: false,
  maxHeaderWidth: 100,
  jiraMode: false,
  jiraOptional: true,
  exclamationMark: true
});
