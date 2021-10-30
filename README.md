# SM64 Tasks
This is a website that stores information about SM64 tasks. Tasks are small challenges that take place in Super Mario 64,
normally by speedrunners of the game. There are a few reasons we have a website at all:

* We needed a better place than [MarkdownPastebin](https://markdownpastebin.com/) to store the extended-form of the rules.
* The concept of **Seaons** were being brought back, but managing scoring across a season would have been prohibitively hard.
* It adds features you can't have on Discord (e.g, "Sort By Category", "Sort By Season")
* It allows you to participate in older Tasks, from previous seasons. These submissions appear as a different color.
* It lets you use a more complex formula for scoring. The scoring algorithm will eventually factor in all of these at various weights:
    - Score / Time
    - "Upsets" (did you bop someone with a high season position?)
    - Consistency (have you gotten around the same score back-to-back)
    - Participation (you can't just do 1 task, get a perfect score, and win the season)
    
Participation happens at the [SM64 Tasks Discord](https://discord.gg/aY32gBM7Xc)


# About this website
The tech that runs this website is frankly pretty bad. There's no authentication or anything, and we don't use API controllers
for the API... Yeah.

But anyway, this website:

* Is built with Laravel, PHP 8, MySQL, React.
* Is hosted on Digital Ocean, and deployed with Ploi.
* Has no unit tests, but okay documentation :D

# Submitting Code
If you'd rather submit code than tasks, it would be appreciated! There are no issues in the tracker, but any code that:

* Fixes bugs
* Fixes styling (I am NOT a UI designer)
* Adds documentation
* Adds features that you think are cool

will be reviewed and maybe accepted, if you do a pull request.

# License
This project is licensed under the terms of the MIT license. It basically states that you can do most things with the code.
