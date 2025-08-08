# Frontend Resources

We use the following libraries and versions for React development:

- typescript >= 5.0
- react >= 18.0
- react query >= 5.0
- react router >=7.0
- vitest >= 3.0 for unit tests
- playwright >=1.40 for integration tests
- Material UI >= 5.0 (included verus-v5-theme-options.ts theme file)
- Use prettier formatting (included `.prettierrc` config file)
- Use ESLint linter (included `.eslintrc` config file)

Note the `*rc` files listed above are included without their leading `.` for
visibility.

## Components

The separately supplied project mocks are all based on standard MUI 5 Pro
components. No custom components should be required. Our Storybook component
library is also included. The Storybook files are static resources that should
be easy to stand up in your infrastructure. Combined with the theme options file
included above, it should provide the necessary capabilities to generate
component code that conforms to our styling and behavior.

### Running Storybook

1. Unzip the file
2. Run `npx http-server storybook-static` in the parent directory (may require
   install of a package)
3. If running on your local machine, you should see storybook at
   http://127.0.0.1:8080/

reference:
https://storybook.js.org/docs/faq#i-see-a-no-preview-error-with-a-storybook-production-build
