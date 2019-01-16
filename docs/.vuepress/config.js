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
        ]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Discord', link: 'https://discord.gg/g7wr8xb' },
            { text: 'Patreon', link: 'https://patreon.com/acollierr17' }
        ],
        sidebar: {
            '/guide/': [
                '',
                'managing-suggestions',
                'staff-suggestions',
                'statistics',
                'commands'
            ]
        },
        lastUpdated: 'Last Updated'
    }
};