---
title: What is Git?
keywords: git, git 101, git explained

description: A collection of informational pieces that explains what Git is.
menu:
  main:
    parent: topics
    name: What is Git?
---

## So, what is Git?


Git is a free and open-source Distributed Version Control System (DVCS). It allows tracking changes in any set of files with speed and efficiency. Git supports multiple local branches that can be entirely independent of each other. Creating a local copy enables you to work on changes without interfering with the original project files. Git is great for collaborations, offline work, or even branching off with new or risky ideas. 

Most developers use Git from the command line, but plenty of modern IDE's come with Git integrations (like [VSCode](https://code.visualstudio.com/docs/sourcecontrol/overview), for instance), as well as there are a lot of [GUI tools for users looking for platform-specific experience](https://git-scm.com/downloads/guis/).

There are also many platforms for hosting Git repositories, so they can be used collaboratively over the internet, such as [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/) and [BitBucket](https://bitbucket.org/).


Fun fact! According to a [2022 Developer Survey from Stack Overflow](https://survey.stackoverflow.co/2022/#section-version-control-version-control-systems), just under 97% of professional developers use Git. 

**See also:**

* [Git vs GitHub: What's the difference?](https://www.youtube.com/watch?v=wpISo9TNjfU&ab_channel=IBMTechnology): This video briefly discusses the difference between Git and GitHub/GitLab.
* [Getting Started - What is Git?](https://www.git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F): Git official documentation gives an overall explanation of how it works.

### History of Git

The creation of Git is an interesting story which holds its origins within the Linux kernel community. Between 1991-2002, changes made to Linux were passed around as patches and archived files; developers even mailed code to one another using disks or flash drives. The creator of Linux, Linus Torvalds, needed to apply these changes to his own source tree. Because of this, the only way to see a history of changes was to compare the large files between releases. 

In 2002, the Linux kernel community began using [BitKeeper](http://www.bitkeeper.org/) (developed by BitMover), which was a proprietary DVCS. In order for the community to use this paid software for free, there were limitations. BitMover would control metadata, as well as disallow Linux developers to be involved in competing revision control projects while using BitKeeper. This relationship ended when Andrew Tridgell reverse-engineered BitKeeper. BitMover was not happy about this.

Torvalds decided to figure out another solution. In 2005, Git was born! Since its creation, a community of developers has continued to improve and maintain the project. BitKeeper, on the other hand, [went open source in 2016](https://lwn.net/Articles/686986/), after more than a decade of trying to maintain relevance in the shadow of Git.

**References and additional reading:**  
1. [A Short History of Git](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git)
2. [History of Git](https://www.geeksforgeeks.org/history-of-git/)
3. [A Git Origin Story](https://www.linuxjournal.com/content/git-origin-story)

### How to use Git


Need help? Git can be quite the learning curve. Below are some resources to help get you started.

* [Git Tutorial for Beginners: Learn Git in 1 Hour](https://www.youtube.com/watch?v=8JJ101D3knE&ab_channel=ProgrammingwithMosh): This video walks beginners through the basics of Git, starting with the setup.

* [Git Cheatsheet (PDF Download - 86KB)](https://about.gitlab.com/images/press/git-cheat-sheet.pdf): This is a short PDF file from GitLab with some basic Git commands and a brief explanation of each.
* [50 Git Commands](https://www.freecodecamp.org/news/git-cheat-sheet/): 50 Git commands with brief explanations
* [Dangit, Git!?!](https://dangitgit.com/en): Git got ya down? Mess up? We’ve all been there. This guide helps you get back into the flow (and keeps you from panicking) by helping you fix some common Git mistakes.

Feeling adventurous? Play these games to practice using Git! 

* [git-game](https://github.com/git-game/git-game)
* [git-game-2](https://github.com/git-game/git-game-v2)
