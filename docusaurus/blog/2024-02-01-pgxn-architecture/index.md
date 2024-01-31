---
slug: pgxn-architecture
title: "Presentation: Introduction to the PGXN Architecture"
authors: [theory]
tags: [postgres, pgxn, extensions, architecture, presentation, video]
# image: ./dw_social.png
date: "2024-02-01T18:45:39Z"
description: |
  As we begin to imagine and design the Postgres extension ecosystem of the
  future, we thought it would be useful to review some of what exists today.
  This presentation provides a high-level overview of the PGXN (PostgreSQL
  Extension Network) architecture: its design and component services, and how
  they work together.
---

At Tembo, our customers have benefited significantly from the development of a
vast array of PostgreSQL extensions. We firmly believe they're the key to the
"just use Postgres" future: along with workload-specific infrastructure, new
extensions and combinations of tools power the success of [Tembo Stacks].

We want to see those benefits continue, and indeed to grow, which is why we've
made a significant investment to improve the Postgres extension distribution
ecosystem, most recently by [adding PGXN creator David Wheeler] to our team. We
want to work with the Postgres community to design, build, and benefit from the
best possible system of extension design, development, and distribution as we
can.

But as we start collaborating with the community and thinking through the [jobs
and tools] required of the extension ecosystem of the future, we thought it
would be useful to learn about some of the distribution architecture that exists
today.

To that end, [PGXN] creator and maintainer [David Wheeler] put together a
presentation on the PGXN architecture: its design and component services, and
how they work together. David recorded the presentation made to the Tembo team,
and now we're happy to share it more widely. Here's the video:

<div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', marginBottom: '5%'}}>
  <iframe 
    style={{ position: 'absolute', top:'10px', width: '100%', height: '100%' }}
    width="900" 
    height="315" 
    src="https://www.youtube.com/embed/sjZPA3HA_q8"
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>

Links:

*   [Video (YouTube)](https://www.youtube.com/watch?v=sjZPA3HA_q8)
*   [Keynote](pgxn-architecture.key "“PGXN Architecture” Keynote deck")
*   [PDF (one page per slide)](pgxn-architecture.pdf)
*   [PDF (one page per stage)](pgxn-architecture-stages.pdf)

[Tembo Stacks]: https://tembo.io/docs/category/tembo-stacks
[adding PGXN creator David Wheeler]: /blog/2024-01-22-welcoming-pgxn-creator-david-wheeler/index.md
 "PGXN creator David Wheeler joins Tembo to strengthen PostgreSQL extension ecosystem"
[jobs and tools]: https://gist.github.com/theory/898c8802937ad8361ccbcc313054c29d
  "Extension Ecosystem: Jobs and Tools"
[David Wheeler]: https://justatheory.com "Just a Theory"
[PGXN]: https://pgxn.org "PGXN — PostgreSQL Extension Network"
