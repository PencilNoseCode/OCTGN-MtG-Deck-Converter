# Getting started
- Clone this repo
- Run `npm install`
- Run `npm run start`

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

# Deployment
- Ensure you have pulled the latest changes from master after merging your PR: `git pull origin master`
- Run `npm run deploy`
