module.exports = {
    title: 'Suggestions Documentation',
    description: 'The official documentation for the Suggestions bot. The only suggestions bot you\'ll ever need. Simple usage and management of suggestions for public and staff use.',
    dest: "public",
    // base: "/suggestions-docs/",
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
                'getting-started',
                'managing-suggestions',
                'staff-suggestions',
                'statistics',
                'commands'
            ]
        },
        lastUpdated: 'Last Updated'
    }
};