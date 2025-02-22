---
sidebar_position: 3
---

# Create a articles Post

Docusaurus creates a **page for each articles post**, but also a **articles index page**, a **tag system**, an **RSS** feed...

## Create your first Post

Create a file at `articles/2021-02-28-greetings.md`:

```md title="articles/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much as you like.
```

A new articles post is now available at [http://localhost:3000/articles/greetings](http://localhost:3000/articles/greetings).
