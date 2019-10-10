export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5d9f50e7a4fbc0e0c8d11753',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2zbyiada',
                  apiId: '13335d9f-e785-4ebd-b198-60ee2eeb0630'
                },
                {
                  buildHookId: '5d9f50e8da4f0519a8c668ff',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cdnrhgwh',
                  apiId: '5a033e55-b4b3-4268-a96e-9b8438709262'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/carloshcorrea/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cdnrhgwh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
