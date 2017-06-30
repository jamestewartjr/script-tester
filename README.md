# script-tester
A convenient testing environment only to test small javascript scripts



#Commands
Install: ```npm install ```

Linter(ESLint): ```npm run lint```
- You can change the linter rules directly within the '.eslintrc.json' or get new rules completely with: ```./node_modules/.bin/eslint --init```

Test(Mocha/Chai): ```npm test```
- The linter runs before tests by default. Remove the 'pretest' command in the package.json if you want this removed.
