/*
** Global imported components
 */

import Vue from 'vue'

import Header from '~/components/Header'
import Post from '~/components/Post'
import Preview from '~/components/Post/Preview'
import Tags from '~/components/Post/Tags'
import List from '~/components/Post/List'

Vue.component('Header', Header)
Vue.component('PostPreview', Preview)
Vue.component('Post', Post)
Vue.component('PostTags', Tags)
Vue.component('PostList', List)
