---
title: What is GitHub?
keywords: github, github explained, open source collaboration
description: An introduction to GitHub and the available alternatives for social coding and contributing to open-source.
menu:
  main:
    parent: topics
    name: What is GitHub?
---

## What alternatives are there to GitHub?

While GitHub has the majority of the market share regarding hosted version control and social coding environments, it is not the only available option. Below is a list of some of the available alternatives.

### [Gitlab](https://gitlab.com/)

{{< youtube id="MqL6BMOySIQ" title="What is GitLab?" >}}

Gitlab is probably one of the more well-known alternatives to GitHub and is trusted by many large and small [open-source repositories](https://about.gitlab.com/solutions/open-source/projects/). Gitlab is backed by [Git](https://git-scm.com/), the same version control system used by GitHub.

Gitlab heavily focuses on development operations or DevOps, especially continuous integration (CI) and [deployment](https://www.ibm.com/cloud/learn/continuous-deployment) (CD) pipelines. Another difference is that GitHub offers a [marketplace](https://github.com/marketplace?type=) where users can curate their own tools instead of Gitlab’s mostly predefined platform. Gitlab does offer roughly 30 integration, such as Microsoft Teams, Slack, Jira, and Gmail. Kinsta offers a [very detailed comparison](https://kinsta.com/blog/gitlab-vs-github/#gitlab-vs-github-key-differences) between Gitlab and Github if you want to learn more.

### [BitBucket](https://bitbucket.org/)

{{< youtube id="BD8xfCILcBs" title="Bitbucket - The Git solution for professional teams" >}}

BitBucket is another well-known alternative to GitHub. As with Gitlab, Bitbucket is also focused on the entire CI/CD pipeline in a largely controlled environment. The other aspect is that BitBucket is one product of a portfolio of products from Atlassian. It is tightly integrated with other tools such as [Jira](https://www.atlassian.com/software/jira) and [Trello](https://trello.com/) for issue management and planning. It also integrates with [Atlassian Open DevOps](https://www.atlassian.com/blog/devops/open-devops), a pre-configured DevOps solution.

While some open source projects use BitBucket, it is a product aimed largely at enterprise software development companies.

### [SourceForge](https://sourceforge.net/)

SourceForge is one of the original platforms for hosting and collaborating on software projects. The company was founded in 1999 and was [acquired in 2016](https://www.computerworld.com/article/2816990/collabnet-acquires-sourceforge-from-va-software.html) by CollabNet which itself was formed in 1999 by, among others, [Tim O’Reilly](https://en.wikipedia.org/wiki/Tim_O%27Reilly) the founder of [O’Reilly Media](https://www.oreilly.com/). In 2020 CollabNet merged with XebiaLabs and later the same here was joined by Arxan. The new company is now known as [Digital.ai](https://www.collab.net/).

SourceForge states that it is a more user friendly experience for end-users looking for open source software to use and install, and to have the most robust discovery system of any open source repository on the web. [In their own words](https://sourceforge.net/blog/brief-history-sourceforge-look-to-future/):

> “We’re talking about a destination for end-users to find and download and install the software they need, similar to an App Store but for FOSS. GitHub and SourceForge are both great for developers, but for the layman, non-technical, end-user, SourceForge is much easier to find and install a project.”

### [Gogs](https://gogs.io/)

{{< youtube id="ueqSAoKt04Q" title="Gogs - self-hosted Git" >}}

Gogs is an open-source [self-hosted](https://github.com/gogs/gogs) Git service. This essentially means that you need to install, run and maintain the service on your own. If you want the ultimate control, you might opt for a self-hosted service such as Gogs. Gogs in written in [Go](https://go.dev/) and can run anywhere where the Go compiler can run, which is pretty much everywhere. It is very lightweight and, as a result, can be run on a [Raspberry Pi](https://www.raspberrypi.org/) or even [network-attached storage](https://www.qnap.com/solution/what-is-nas/en-us/)(NAS).

### [Gitea](https://gitea.io/)

Gitea is a community-supported fork of Gogs. You can read the reason for forking [on their blog](https://blog.gitea.io/2016/12/welcome-to-gitea/). If you have decided to go the self-hosted route, this is most likely the solution. There is also a multitude of ways to deploy Gitea. You can install it as a Docker container, from a binary, as a Linux service, from source, or using a [cloud provider](https://docs.gitea.io/en-us/install-on-cloud-provider/). The Gitea project also maintains a feature comparison page as part of its documentation. Two of the notable missing features with Gitea are Git powered static pages([GitHub pages](https://pages.github.com/)) and a built-in CI/CD pipeline.
