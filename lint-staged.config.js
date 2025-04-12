module.exports = {
    '*.{js,jsx}': ['eslint --fix', 'prettier --write'],
    '*.{ts,tsx}': [
        'eslint --fix',
        'prettier --write',
        () => 'npx tsc --noEmit',
    ],
    '*.{json}': ['prettier --write'],
};
