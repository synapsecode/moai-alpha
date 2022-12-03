# SET-Stack
A Quick Way to start developing web apps using ```Svelte, ExpressJS and Tailwind```
<br>
SCSS Support is also provided! This makes developing apps incredibly fast and easy.
ExpressJS allows you to make apis and serve both the frontend and backend from one endpoint itself! This means that your svelte app is no longer just a static site with dynamic components, its actually a full fledged webapp that runs on nodeJS

## Instructions
1. On the terminal, run the command ```npx degit synapsecode/set-stack <project_name>```
2. On the terminal run the command ```yarn deps```
3. to start the app in dev mode, run ```yarn dev```
4. to start the app in production mode, run ```yarn build-prod``` for the first time and ```yarn prod``` subsequently (to avoid recompiling)
5. To Deploy to (Vercel): run ```yarn vercel-deploy```

## More Information
- The standard port number that the server runs on is ```PORT 80```. If you need to change this, edit the value of the ```SERVER_PORT``` variable in ```index.js```
- The standard port that the frontend runs on (dev-only) is ```PORT 3000```. Although you will never need to use this since the server serves the frontend automatically. If you need to change this find and replace '3000' using the editor.
- In-App Routes are handled by the ```routes.js``` file in the ```client/src``` directory
- SCSS Tags can be used in the svelte files by using this syntax 
```html
<style lang='scss'>
  ...
</style>
```
- Any server endpoints that you want to create (Node & Express) can be created in the server directory, the routes that you define there are given first priority and then everything else is passed on to the client app which handles the actual app routing
- An Example Blog app has been provided so that you can better understand the way everything works!