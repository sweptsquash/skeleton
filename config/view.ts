/**
 * View Configuration
 *
 * Controls how the View system resolves and renders templates.
 *
 * paths      - Directories to search for view files (in order).
 * extensions - File extensions to try, in order of preference.
 */

import path from 'path';

export default {
  /**
   * View file directories.
   * Defaults to [<basePath>/resources/views].
   */
  paths: [path.join(process.cwd(), 'resources', 'views')],

  /**
   * Supported file extensions (tried in order).
   */
  extensions: ['.html', '.orchestr.html'],
};
