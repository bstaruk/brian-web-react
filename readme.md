# Brian's Website... in React!

My primary reason for having a website is always having a place that is ready to explore and experiment with. This one was built with React. It all started with a `yo react-webpack`.

## Usage
The following commands are available in your project:
```bash
# Start for development
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Auto-run unit tests on file changes
npm run test:watch

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```
## browserHistory

This app uses [browserHistory](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory) instead of hashHistory, so an .htaccess file may be required to serve the built product via Apache without returning 404 for non-index routes.

```apache
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-l
RewriteRule ^.*$ / [L,QSA]
```

## License
[MIT license](http://opensource.org/licenses/mit-license.php)
