# Installation
Content based on Traversy Media Tutorial at: <https://www.youtube.com/watch?v=dFgzHOX84xQ>  
Code: <https://github.com/bradtraversy/tailwind-landing-page>  
Tailwind installation guide: <https://tailwindcss.com/docs/installation>  
1. Initialize package.json file.  
    ```npm init -y```  
2. Install tailwind as a dev dependency. (note: dev dependencies consist of all the packages that are used in a project's development phase and not in the production or testing environment with its version number)  
    ```npm install -D tailwindcss```
3. Add config file.  
    ```npx tailwindcss init```
Add appropriate paths to config. For simple project, add './*.html'.
4. Add the Tailwind directives to your CSS. Create input.css and add:  
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
5. Configure Tailwind CLI build process.  
    ```package.json```

# Developing with Tailwind
Run ```npm run build``` to build or ```npm run watch``` to watch files for changes during development.