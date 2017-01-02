# Brian's Website... in React!

The only real reason I even have a website is so that I always have a place that is ready to play and explore with.
This one is in React, because I think React just might be the next big thing. It all started with a `yo react-webpack`.

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

Because this app uses [browserHistory](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory) (instead of hashHistory) an .htaccess file may be required to serve the built product via Apache without returning 404.

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
