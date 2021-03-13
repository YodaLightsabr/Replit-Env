# Replit-Env
Keep your code private without hacker plan

## How to compile
To compile, just download and run `compile.js`. Just enter the file name for the source and destination, and you'll be good to go.

## How to run
To run, make sure your `.env` contains the compiled code. Next, install the `replit-env` module and require it. Then run the function and it will import the code from the `.env` file, write it to a file, require that file, and then delete the file. You can now run code with the source hidden.

## Example
`index.js`:
```js
const env = require('replit-env');
env();
```
`.env`:
```
L0=console.log("Hello, world!");
```
console output:
```
Hello, world!
```
