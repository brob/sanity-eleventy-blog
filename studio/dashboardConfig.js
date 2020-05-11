export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb9c396c6dc4af1a25b0d77',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-fuz1kefn',
                  apiId: '7e9a7ca9-9606-4d20-9146-044395c42970'
                },
                {
                  buildHookId: '5eb9c397129f12db6880467a',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-wo9up9dk',
                  apiId: '1403173c-4f73-4860-b83c-3d35326cc7a1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brob/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-wo9up9dk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
