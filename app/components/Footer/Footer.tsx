import "./index.scss";
import GithubIcon from "../../../assets/images/socials/github.svg?react";
import RedditIcon from "../../../assets/images/socials/reddit.svg?react";
import SlackIcon from "../../../assets/images/socials/slack.svg?react";
import StackOverflowIcon from "../../../assets/images/socials/stack-overflow.svg?react";
import TwitterIcon from "../../../assets/images/socials/twitter.svg?react";
import YoutubeIcon from "../../../assets/images/socials/youtube.svg?react";
import { useTextStyles } from '@rescui/typography';
import cn from 'classnames';

interface FooterLink{name: string, link: string}

 const listOfLinks: FooterLink[] = [
  {name: "Contributing to Kotlin", link: "https://kotlinlang.org/docs/contribute.html?_gl=1*163dd5y*_gcl_au*MjU5MDc5OTgzLjE3NzM1ODA4MjU.*_ga*MTUxMDk5MzY1Mi4xNzczNTgwODI2*_ga_9J976DJZ68*czE3NzQwMDg0MDQkbzE1JGcwJHQxNzc0MDA4NDA0JGo2MCRsMCRoMA.."},
  {name: "Releases", link: "https://kotlinlang.org/docs/releases.html?_gl=1*1wacns4*_gcl_au*MjU5MDc5OTgzLjE3NzM1ODA4MjU.*_ga*MTUxMDk5MzY1Mi4xNzczNTgwODI2*_ga_9J976DJZ68*czE3NzQwMzQzMDgkbzE2JGcwJHQxNzc0MDM0MzA4JGo2MCRsMCRoMA.."},
  {name: "Press Kit", link: "https://kotlinlang.org/assets/kotlin-media-kit.pdf?_gl=1*167jnf8*_gcl_au*MjU5MDc5OTgzLjE3NzM1ODA4MjU.*_ga*MTUxMDk5MzY1Mi4xNzczNTgwODI2*_ga_9J976DJZ68*czE3NzQwMzQzMDgkbzE2JGcwJHQxNzc0MDM0MzA4JGo2MCRsMCRoMA.."},
  {name: "Security", link: "https://kotlinlang.org/docs/security.html?_gl=1*bri7t0*_gcl_au*MjU5MDc5OTgzLjE3NzM1ODA4MjU.*_ga*MTUxMDk5MzY1Mi4xNzczNTgwODI2*_ga_9J976DJZ68*czE3NzQwMzQzMDgkbzE2JGcwJHQxNzc0MDM0MzA4JGo2MCRsMCRoMA.."},
  {name: "Blog", link: "https://blog.jetbrains.com/kotlin/?_gl=1*iyq0c4*_gcl_au*MjU5MDc5OTgzLjE3NzM1ODA4MjU.*_ga*MTUxMDk5MzY1Mi4xNzczNTgwODI2*_ga_9J976DJZ68*czE3NzQwMzQzMDgkbzE2JGcwJHQxNzc0MDM0MzA4JGo2MCRsMCRoMA.."},
  {name: "Issue Tracker", link: "https://youtrack.jetbrains.com/issues/KT?_gl=1*iyq0c4*_gcl_au*MjU5MDc5OTgzLjE3NzM1ODA4MjU.*_ga*MTUxMDk5MzY1Mi4xNzczNTgwODI2*_ga_9J976DJZ68*czE3NzQwMzQzMDgkbzE2JGcwJHQxNzc0MDM0MzA4JGo2MCRsMCRoMA.."},
  {name: "Brands Assets", link: "https://resources.jetbrains.com/storage/products/kotlin/docs/kotlin_logos.zip?_gl=1*1xtj4k5*_gcl_au*MjU5MDc5OTgzLjE3NzM1ODA4MjU.*_ga*MTUxMDk5MzY1Mi4xNzczNTgwODI2*_ga_9J976DJZ68*czE3NzQwMzQzMDgkbzE2JGcwJHQxNzc0MDM0MzA4JGo2MCRsMCRoMA.."},
  {name: "Careers", link: "https://job-boards.eu.greenhouse.io/jetbrains?_gl=1*ki6gzp*_gcl_au*MjU5MDc5OTgzLjE3NzM1ODA4MjU.*_ga*MTUxMDk5MzY1Mi4xNzczNTgwODI2*_ga_9J976DJZ68*czE3NzQwMzQzMDgkbzE2JGcwJHQxNzc0MDM0MzA4JGo2MCRsMCRoMA..&team=Kotlin"}
]
export default function Footer() {
  // const list: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[] = [GithubIcon, RedditIcon, SlackIcon, StackOverflowIcon, TwitterIcon, YoutubeIcon]
  const textCn = useTextStyles();
 
  return (
    <div className="footer">
      <div className="footer__container-first-row">

        <div className="footer__stay-in-touch rs-h4 rs-h4_theme_dark ">
          Stay in touch:
        </div>
        <div className="footer__social-list">
          <a target="_blank" className="" href="https://github.com/JetBrains/kotlin" title="Kotlin on GitHub">
            <GithubIcon color="white" />
          </a>
          <a target="_blank" className="" href="https://twitter.com/kotlin" title="Kotlin on Twitter">
            <TwitterIcon color="white" />
          </a>
          <a target="_blank" className="" href="https://surveys.jetbrains.com/s3/kotlin-slack-sign-up" title="Kotlin Slack">
            <SlackIcon color="white" />
          </a>
          <a target="_blank" className="" href="https://www.reddit.com/r/Kotlin/" title="Kotlin on Reddit">
            <RedditIcon color="white" />
          </a>
          <a target="_blank" className="" href="https://stackoverflow.com/questions/tagged/kotlin" title="Kotlin on Stack Overflow">
            <StackOverflowIcon color="white" />
          </a>
          <a target="_blank" className="" href="https://www.youtube.com/channel/UCP7uiEZIqci43m22KDl0sNw" title="Kotlin on Youtube">
            <YoutubeIcon color="white" />
          </a>
        </div>

      </div>
      <nav className="footer__nav-container">
        <ul className="footer__ul">
          {listOfLinks.map(footerLink => <li>
            <span className={cn(textCn('rs-text-2'))}>
              <a
                href={footerLink.link}
                className={textCn('rs-link')}
              >
                {footerLink.name}
              </a>
            </span>
          </li>)}
        </ul>

      </nav>
      <div>

      </div>
      <a>

      </a>
    </div>
  )
}
