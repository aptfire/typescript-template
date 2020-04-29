# GETTING STARTED WITH THIS TEMPLATE
To create a new project using the template, click the green `Use this template` button at the top of this page.

This template is intended to provide a baseline to quickly create other templates and new repos that are based on the following stack:
* NodeJS
* TypeScript
* Prettier/ESLint
* Compilation with `tsc`
* Testing with `nyc` providing code coverage and test execution using `mocha`/`chai` via [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
* Out of the box console logging using [winstonjs/winston](https://github.com/winstonjs/winston)

This is a configuration that I've found works for me. If there are changes or improvements you'd like to see made, submit an issue and I'll take a look at it.

After you clone/create your repo from the template you'll want to:
* Update `README.md`
* Update `package.json`

## Update `README.md`
Change all occurrence of `<<project_name>>` to the name of your project.

## Update `package.json`
Update the following fields in `package.json`:

* `name`
* `description`
* `author`
* `repository`
* `license`

Copy this snippet to your package.json file and update accordingly.
```
{
    ...
    "license": "UNLICENSED",
    "repository": {
        "type": "git",
        "url": "github:<<team_or_acct>>/<<project_name>>"
    }
    ...
}
```

**NOTE**: For internal projects, be sure to set license to: `UNLICENSED`.

**After creating your project from this template, delete this line and ***everything*** above it. Update everything below based on your needs.** 

# <<project_name>>
## Configuring the Local Environment

### Environment Variables
The easiest way to configure your environment is to copy the `.env.sample` file to `.env` and adjust according to your local environment.

The `npm test` command uses `./test/bootstrap.ts` to load configuration settings from an `.env.test` file.

### .tmignore (macOS only)
If you would like to better manage how Time Machine tracks changes within your project, you can run the `tmignore` script to prevent Time Machine from
backing up the directories specified in the `.tmignore` file (e.g. exclude test run results and `node_modules`)

## Running the Project
To verify your environment do the following:

```
npm i
npm test
```

You should see all tests pass successfully.

To start the app run either: 

* `npm run build && npm run start` - Compiles using tsc and then starts the app without a watcher 
* `npm run start:watch` - This will use `ts-node-dev` to transpile only along with watching for any changes within the `src` directory. 

***NOTE:*** The start scripts use the `-r dotenv/config` setting and will default to using the `.env` file if it's available; the test script uses `.env.test`

