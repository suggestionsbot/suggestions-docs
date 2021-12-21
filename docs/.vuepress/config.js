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
        repo: 'suggestionsbot/suggestions-bot',
        repoLabel: 'Contribute!',
        docsRepo: 'suggestionsbot/suggestions-docs',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Help us improve this page!',
        smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Documentation', link: '/docs/' },
            { text: 'Website', link: 'https://suggestionsbot.com' },
            { text: 'Discord', link: 'https://discord.gg/suggestions' },
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
