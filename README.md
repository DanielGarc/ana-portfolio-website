This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Portafolio is live at https://anarosadesigns.com/

PR's/Commits trigger a github action that publish changes to firebase hosting.

### Requirments

- Nodejs
    > https://nodejs.org/en/download/


### How to run locally

- Clone project locally
    > git clone ...
- cd into directory
- Run npm install
- Run npm start
 
### Deploy to firebase

- [Install firebase](https://firebase.google.com/docs/cli#macos)
    > npm install -g firebase-tools
- Login
    > firebase login
- Make sure you build the project first
    > npm run build
- [Upload project](https://firebase.google.com/docs/hosting/test-preview-deploy#deploy-project-directory-to-live)
    > firebase deploy --only hosting

Wuu Done!