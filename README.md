# plugin-database

# Usage

> npm install --save git+https://github.com/asotirov/plugin-database.git

## Include in serverConfig.js

>     module.exports = [
>     ....
>     {
>        packagePath: '../node_modules/plugin-database'
>     }

## package.json:

>       ..
>       "plugin": {
>           "provides": [
>             "database"

## Related:

> This is just an invoker for database wrappers (see below full list). Consume one or more of those in order to use them in a project.

 [plugin-database-sql](https://github.com/asotirov/plugin-database-sql.git)
 [plugin-database-mongo](https://github.com/asotirov/plugin-database-mongo.git)

