"*.(js|jsx)": ["npm run prettier", "npm run lint:fix"]

npx lint-staged

{
  "*.(js, jsx)": ["prettier --write src/*.jsx", "eslint --fix ."]
}

правила для Линта
"rules": {
        "linebreak-style": "off",
        "arrow-parens": "off",
        "object-curly-newline": "off",
        "no-mixed-operators": "off",
        "function-paren-newline": "off",
        "no-plusplus": "off",
        "space-before-function-paren": 0,
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": [0, { }],
        "import/prefer-default-export": "off",
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/label-has-associated-control": [ "error", {
            "required": {
              "some": [ "nesting", "id"  ]
            }
          }]
}


"*.{js,jsx}": "npm run lint:fix"

npm run lint -- --fix