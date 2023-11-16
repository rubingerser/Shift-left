var path = require('path');

module.exports = {
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: [
        'react',
        'import',
        '@typescript-eslint'
    ],
    env: {
        browser: true
    },
    parserOptions: {
        project: path.join(__dirname, "tsconfig.json")
    },
    rules: {
        'arrow-parens': [2, 'as-needed'],
        'comma-dangle': [2, 'never'],
        'no-constant-condition': 0,
        'no-prototype-builtins': 0,
        'no-unused-expressions': 2,
        'no-unused-vars': 0,
        'prefer-arrow-callback': 2,
        'quote-props': [2, 'as-needed'],
        'quotes': [2, 'single', { 'avoidEscape': true }],
        'no-console': 2,
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/array-type': 0,
        '@typescript-eslint/eofline': 0,
        '@typescript-eslint/max-classes-per-file': 0,
        '@typescript-eslint/max-line-length': 0,
        '@typescript-eslint/member-access': 0,
        '@typescript-eslint/member-ordering': 0,
        '@typescript-eslint/no-conditional-assignment': 0,
        '@typescript-eslint/no-empty': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-unused-vars': [2, { 'argsIgnorePattern': '_' }],
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/object-literal-sort-keys': 0,
        '@typescript-eslint/object-literal-shorthand': 0,
        '@typescript-eslint/ordered-imports': 0,
        '@typescript-eslint/prefer-const': 0,
        '@typescript-eslint/prefer-for-of': 0,
        '@typescript-eslint/space-before-function-paren': [0, 'always'],
        '@typescript-eslint/unified-signatures': 0,
        '@typescript-eslint/variable-name': 0
    }
};
