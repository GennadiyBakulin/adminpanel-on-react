"*.(js|jsx)": ["npm run prettier", "npm run lint:fix"]

npx lint-staged

{
  "*.(js, jsx)": ["prettier --write src/*.jsx", "eslint --fix ."]
}


npm run lint -- --fix
/* "src/**/*.{js,jsx}": "npm run lint:fix" */

{
  "*{js,jsx,css,html}": "prettier --write",
  "*{js,jsx}": "eslint --fix"
}