import google from "/google.png"
import slack from "/slack.png"
import atlassian from "/atlassian.png"
import dropbox from "/dropbox.png"
import shopify from "/shopify.png"

interface IAsset {
  src: string
  alt: string
}

export const assets: IAsset[] = [
  {
    src: google,
    alt: "Google",
  },
  {
    src: slack,
    alt: "Slack",
  },
  {
    src: atlassian,
    alt: "Atlassian",
  },
  {
    src: dropbox,
    alt: "Dropbox",
  },
  {
    src: shopify,
    alt: "Shopify",
  },
]
