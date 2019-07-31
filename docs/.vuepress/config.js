module.exports = {
    title: 'Suggestions Documentation',
    description: 'The official documentation for the Suggestions bot. The only suggestions bot you\'ll ever need. Simple usage and management of suggestions for public and staff use.',
    dest: 'public',
    theme: 'dark-new',
    head: [
        [
            'link', {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: './favicon.ico'
            }
        ],
        [
            'meta', {
                name: 'theme-color',
                content: '#dd9323'
            }
        ],
        [
            'meta', {
                property: 'og:image',
                content: '/images/suggestions-icon.png'
            }
        ]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/docs/' },
            { text: 'Website', link: 'https://suggestionsbot.com' },
            { text: 'Discord', link: 'https://discord.gg/ntXkRan' },
            { text: 'Patreon', link: 'https://patreon.com/acollierr17' }
        ],
        sidebar: {
            '/docs/': [
                '',
                'managing-suggestions',
                'staff-suggestions',
                'statistics',
                'configuration',
                'commands',
            ]
        },
        lastUpdated: 'Last Updated'
    },
    ga: 'UA-126253498-2',
    plugins: [
        ['@vuepress/back-to-top', true]
    ]
};