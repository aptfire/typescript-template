# GETTING STARTED WITH THIS TEMPLATE
To create a new project using the template, click the green `Use this template` button at the top of this page.

# <<project_name>>
The project was created by copying the @aptfire/typescript-template project template. To configure the project you will need to make the following changes:

* Update `README.md`
* Update `package.json`
* Create an `.env.test` file

# `.tmignore` File
If you have the `tmignore` script installed on your macOS machine, run the command to exclude the directories mentioned in the `.tmignore` file from  being included in Time Machine backups (e.g. `node_modules`).

# Running the Project
To verify your environment do the following:

```
npm i
npm test
npm run start
```

You should see all tests pass successfully.

## Update `README.md`
Change all occurrence of `<<project_name>>` to the name of your project.

## Update `package.json`
Update the following fields in `package.json`:

* `name`
* `description`
* `author`
* `repository`

```
{
    ...
    repository: {
        "type": "git",
        "url": "github:jscottarmstrong/<<project_name>>"
    }
    ...
}
```

## Create `.env` and `.env.test` Files
Create an `.env.test` file. It will not be checked into git, and it should contain settings specific to your enviroment. It is specifically loaded when running `npm test`.

