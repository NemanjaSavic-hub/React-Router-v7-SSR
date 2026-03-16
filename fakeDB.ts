import serverSideImg from './assets/images/good-for/server-side.svg'
import mobileImg from './assets/images/good-for/mobile.svg'
import androidImg from './assets/images/good-for/android.svg'
import webImg from './assets/images/good-for/web.svg'

import type { HeaderCard } from '~/models/HeaderCard'
import type { LatestNewsFromKotlin } from '~/models/LatestNewsFromKotlin'

class FakeDb {
    getHeaderCards = () : HeaderCard[] => [
        {
            id: 1,
            title: 'Multiplatform Mobile',
            subTitle: 'Share the logic of your Android and iOS apps while keeping UX native',
            link: '#',
            img: mobileImg
        },
        {
            id: 2,
            title: 'Server-side',
            subTitle: 'Modern development experience with familiar JVM technology',
            link: '#',
            img: serverSideImg
        },
        {
            id: 3,
            title: 'Web Frontend',
            subTitle: 'Extend your projects to web',
            link: '#',
            img: webImg
        },
        {
            id: 4,
            title: 'Android',
            subTitle: 'Recommended by Google for building Android apps',
            link: '#',
            img: androidImg
        },
    ]

    getLatestNewsFromKotlin = () : LatestNewsFromKotlin[] => [
    {
        title: 'Kotlin 1.6.0 is released',
        link: 'https://blog.jetbrains.com/kotlin/2021/11/kotlin-1-6-0-is-released/',
        tag: 'blog.jetbrains.com',
    },
    {
        title: 'The new AWS SDK for Kotlin with Coroutines support',
        link: 'https://blog.jetbrains.com/kotlin/2022/01/the-new-aws-sdk-for-kotlin-with-coroutines-support/',
        tag: 'blog.jetbrains.com',
    },
    {
        title: 'Introducing kotlinx.coroutines 1.6.0',
        link: 'https://blog.jetbrains.com/kotlin/2021/12/introducing-kotlinx-coroutines-1-6-0/',
        tag: 'blog.jetbrains.com',
    },
    {
        title: 'Results of the Kotlin Features Survey 2021',
        link: 'https://blog.jetbrains.com/kotlin/2021/12/kotlin-features-survey-2021-results/',
        tag: 'blog.jetbrains.com',
    },
];

}
export default new FakeDb();
