import Vue from 'vue'
import Page from '~/components/Page.vue'
import Teaser from '~/components/Teaser.vue'
import FullscreenTeaser from '~/components/FullscreenTeaser.vue'
import ContactForm from '~/components/ContactForm.vue'
import SitemapItem from '~/components/SitemapItem.vue'
import MarkdownContent from '~/components/MarkdownContent.vue'
import ArticleTile from '~/components/ArticleTile.vue'
import Skid from '~/components/Skid.vue'

Vue.component('page', Page)
Vue.component('teaser', Teaser)
Vue.component('fullscreen-teaser', FullscreenTeaser)
Vue.component('contactform', ContactForm)
Vue.component('sitemap-item', SitemapItem)
Vue.component('markdown-content', MarkdownContent)
Vue.component('article-tile', ArticleTile)
Vue.component('skid', Skid)
