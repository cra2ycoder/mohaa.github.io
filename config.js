var overview = [
  {
    title: 'Design Tools',
    count: '5+',
    categories: ['art', 'design', 'photo edit'],
  },
  {
    title: 'Tech Stacks',
    count: '11+',
    categories: [
      'languages',
      'frameworks',
      'libraries',
      'unit testing',
      'docs',
      'dev tools',
      'pkg managers',
    ],
  },
  {
    title: 'Business Tools',
    count: '8+',
    categories: ['IDE', 'Utility'],
  },
  {
    title: 'Experience',
    count: '14+',
    categories: ['infosys', 'skava', 'astute', 'cyber web'],
  },
  {
    title: 'Education',
    count: '3',
    categories: ['SSLC', 'diploma', 'graduate'],
  },
  {
    title: 'Awards',
    count: '8+',
    categories: ['star', 'best employee', 'distinguised'],
  },
  {
    title: 'Own Libraries/Tools',
    count: '14+',
    categories: ['automation', 'product', 'js libs', 'tools'],
  },
  {
    title: 'Works',
    count: '50+',
    categories: ['art', 'designs', '2D'],
  },
]

const designTools = [
  {
    title: 'Photoshop',
    url: 'logo_ps.jpg',
  },
  {
    title: 'XD',
    url: 'logo_xd.png',
  },
  {
    title: 'Sketch',
    url: 'logo_sketch.jpg',
  },
  {
    title: 'Flash',
    url: 'logo_flash.jpg',
  },
  {
    title: 'Autodesk',
    url: 'logo_autodesk.png',
  },
  {
    title: 'Lightroom',
    url: 'logo_lr.png',
  },
]

const techStacks = {
  languages: [
    { url: 'logo_html.png', title: 'HTML' },
    { url: 'logo_css.png', title: 'CSS' },
    { url: 'logo_js.jpeg', title: 'JS/ES5' },
    { url: 'logo_es6.jpg', title: 'JS/ES6+' },
    { url: 'logo_ts.jpg', title: 'Typescript' },
    { url: 'logo_nodejs.png', title: 'NodeJS' },
    { url: 'logo_ftl.jpg', title: 'FTL' },
    { url: 'logo_xml.png', title: 'XML' },
    { url: 'logo_hb.png', title: 'Handlebars' },
    { url: 'logo_graphql.png', title: 'GraphQL' },
    { url: 'logo_md.png', title: 'Markdown' },
    { url: 'logo_sass.png', title: 'SASS' },
    { url: 'logo_yaml.png', title: 'YAML' },
    { url: 'logo_as3.png', title: 'AS3' },
  ],
  frameworks: [
    { url: 'logo_cra.png', title: 'CRA' },
    { url: 'logo_nextjs.png', title: 'Next.js ' },
    { url: 'logo_mui.png', title: 'Material UI' },
    { url: 'logo_mdbreact.png', title: 'MDB React' },
    { url: 'logo_reactbootstrap.png', title: 'React Bootstrap' },
  ],
  libraries: [
    { url: 'logo_react.png', title: 'React' },
    { url: 'logo_redux.png', title: 'Redux' },
    { url: 'logo_mobx.png', title: 'Mobx' },
    { url: 'logo_styledcomp.png', title: 'Styled Components' },
    { url: 'logo_webpack.png', title: 'Webpack' },
    { url: 'logo_rollup.jpg', title: 'Rollup' },
    { url: 'logo_jquery.jpg', title: 'jQuery' },
    { url: 'logo_jquery_ui.png', title: 'jQuery UI' },
    { url: 'logo_expressjs.png', title: 'Express.js' },
    { url: 'logo_apollo.png', title: 'Apollo Link State' },
  ],
  unittesting: [
    { url: 'logo_jest.png', title: 'Jest' },
    { url: 'logo_cypress.webp', title: 'Cypress' },
    { url: 'logo_puppeteer.png', title: 'Puppeteer' },
    { url: 'logo_rtl.png', title: 'React Testing Library' },
  ],
  docs: [
    { url: 'logo_docsify.png', title: 'Docsify' },
    { url: 'logo_md.png', title: 'Markdown' },
    { url: 'logo_jsdoc3.png', title: 'JS Docs' },
  ],
  devtools: [
    { url: 'logo_git.png', title: 'GIT' },
    { url: 'logo_babel.png', title: 'Babel' },
    { url: 'logo_prettier.jpg', title: 'Prettier' },
    { url: 'logo_editorconfig.png', title: 'Editor Config' },
    { url: 'logo_make.png', title: 'Make' },
    { url: 'logo_eslint.jpg', title: 'ES Lint' },
    { url: 'logo_tslint.png', title: 'TS Lint' },
    { url: 'logo_sonarlint.png', title: 'Sonar Lint' },
    { url: 'logo_storybook.png', title: 'Storybook' },
  ],
  packagemanagers: [
    { url: 'logo_yarn.jpg', title: 'Yarn' },
    { url: 'logo_npm.png', title: 'NPM' },
    { url: 'logo_verdaccio.jpg', title: 'Verdaccio' },
    { url: 'logo_lerna.jpg', title: 'Lerna' },
  ],
}

const businessTools = {
  ide: [
    { url: 'logo_vs.png', title: 'VS Code' },
    { url: 'logo_sublime.jpg', title: 'Sublime' },
    { url: 'logo_eclipse.png', title: 'Eclipse' },
    { url: 'logo_notepad.png', title: 'Notepad++' },
  ],
  utility: [
    { url: 'logo_codesandbox.png', title: 'Code sandbox' },
    { url: 'logo_jira.jpg', title: 'JIRA' },
    { url: 'logo_confluence.jpg', title: 'Confluence' },
    { url: 'logo_trello.jpg', title: 'Trello' },
    { url: 'logo_gitlab.png', title: 'GitLab' },
    { url: 'logo_gdrive.jpg', title: 'G Drive' },
    { url: 'logo_bitbucket.jpg', title: 'Bitbucket' },
    { url: 'logo_tortoisegit.jpg', title: 'Tortoise Git' },
    { url: 'logo_tower.png', title: 'Tower' },
    { url: 'logo_github.png', title: 'Git Hub' },
    { url: 'logo_sourcetree.png', title: 'Source Tree' },
  ],
}
