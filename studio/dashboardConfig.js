export default {
  widgets: [
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
                  buildHookId: '5ebd7a95021029bb990078db',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-p1g5i8pr',
                  apiId: 'ebc19b6d-403f-44ab-a814-cb5bcf83d11b'
                },
                {
                  buildHookId: '5ebd7a95aa0e3187dc57b335',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6up1nkjc',
                  apiId: '8e73ae39-a012-48c4-a4a6-3b061e1705f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6up1nkjc.netlify.app', category: 'apps'}
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
