/**
 * PROJECT CONTEXT FOR GITHUB COPILOT
 *
 * Tech stack:
 * - Node.js (latest LTS)
 * - Yarn (berry)
 * - Hugo (extended, latest)
 * - webpack (latest)
 * - PostCSS (NO Sass/SCSS)
 * - Netlify deployment
 *
 * Project structure:
 * - /content - All markdown content
 * - /layouts - Hugo templates
 * - /assets - Source files for webpack
 *   - /assets/js - JavaScript modules
 *   - /assets/css - CSS files (PostCSS)
 * - /static - Files copied directly to output
 *
 * Build workflow:
 * 1. webpack processes JS and CSS from /assets
 * 2. Hugo builds the site using processed assets
 * 3. Output is generated to /public
 * 4. Netlify deploys from /public
 *
 * CSS guidelines:
 * - Use CSS custom properties for theming
 * - Use CSS Grid and Flexbox for layouts
 * - Mobile-first approach
 * - Use imports for partials
 * - No preprocessors (Sass/Less)
 *
 * JavaScript guidelines:
 * - ES modules only
 * - Minimal dependencies
 * - Browser support: last 2 versions
 */