"*.(js|jsx)": ["npm run prettier", "npm run lint:fix"]

npx lint-staged

{
  "*.(js, jsx)": ["prettier --write src/*.jsx", "eslint --fix ."]
}