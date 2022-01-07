/**
 * This files contains all the meta data of your blog. Feel
 * free to change it according to your needs. Please
 * keep in mind, that the actual blog posts are fetched
 * from the Caasy API. This file only contains static
 * information that does not change such as the name
 * of the blog.
 */
export default {
    caasySDKConfig: {
        siteId: '61d888b7ba4f20ae04fde062'
    },
    blogName: 'FE SQL Generator',
    defaultTitle: 'Frontend SQL Generator',
    description: 'This blog for show simple tools SQL Generator',
    // The default language is used to improve accessibility.
    // It is set on the HTML element. You can change this
    // to the main language of your content.
    defaultLanguage: 'en',
    // The locale is used for multi language content. This
    // feature hasn't been released yet. Please don't change
    // this until Caasy fully supports multi language content.
    locale: 'en_US',
    social: {
        github: 'https://github.com/MuhammadSuryono',
        dev: '',
        twitter: 'https://twitter.com',
        linkedin: '',
        youtube: 'https://youtube.com',
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com'
    },
    footer: {
        links: [
            {
                title: 'Website',
                items: [
                    { label: 'SQL Generator', url: '#' }
                ]
            },
            {
                title: 'Developer',
                items: [
                    { label: 'Docs', url: '#' },
                    { label: 'Github', url: '#' },
                ]
            },
            {
                title: 'About',
                items: [
                    { label: 'SQL Generator', url: '#' },
                ]
            }
        ]
    }
}