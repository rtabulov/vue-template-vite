module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-recommended', 'prettier'],
  ignorePatterns: ['dist', 'node_modules'],
  rules: {
    'import/no-unresolved': [2, { ignore: ['virtual:*'] }],
  },
};
