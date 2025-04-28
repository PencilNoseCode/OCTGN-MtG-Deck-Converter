# Getting started
- Clone this repo
- Run `npm run install` (this runs `npm install` in the `client` and `server` folders)
- Run `npm run start-client` and `npm run start-server` in separate terminals

# Development
- Create a branch using `git branch <branch-name>` or `git checkout -b <branch-name> 
- Your `<branch-name>` should be in the form `<task-type>/PNC-<task-number>-short-desc`
    - `<task-type>` should be replaced with one of the following: `feature`, `bug`
    - `<task-number>` should be replaced with the ID number of the task
- When development is finished, push the branch to the remote
    - `git add .` to stage your files
    - `git commit -m "commit message goes here"` to commit your changes
    - `git push` to push your changes to the remote branch
    - `git push --set-upstream origin <task-type>/PNC-<task-number>-short-desc` if the remote branch doesn't exist yet
- Create a PR to merge your branch into the `master` branch
- After it has be reviewed and merged, make sure to upadte your `master` branch: `git pull origin master`

# Build & Deploy
- Run `npm run deploy`
- Run `npm run deploy`
    - This first runs `npm run build` which builds all of the static files from the client app
    - Then second it packages the static files with the server app as a standalone exe
- Run `npm run prod` OR manually double click `/dist/octgnmagic.exe` and open `http://localhost:8080`
