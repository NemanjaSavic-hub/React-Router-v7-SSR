import "./index.scss";
import GithubIcon from "../../../assets/images/socials/github.svg?react";
import RedditIcon from "../../../assets/images/socials/reddit.svg?react"; 
import SlackIcon from "../../../assets/images/socials/slack.svg?react";
import StackOverflowIcon from "../../../assets/images/socials/stack-overflow.svg?react";
import TwitterIcon from "../../../assets/images/socials/twitter.svg?react";
import YoutubeIcon from "../../../assets/images/socials/youtube.svg?react";

export default function Footer() {
  const list : React.FunctionComponent<React.SVGProps<SVGSVGElement>>[] = [GithubIcon, RedditIcon, SlackIcon, StackOverflowIcon, TwitterIcon, YoutubeIcon]
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
        <nav>

        </nav>
        <div>

        </div>
        <a>

        </a>
    </div>
  )
}
