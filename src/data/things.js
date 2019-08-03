import React from "react";

const things = [
  {
    title: "Jest coverage missing files",
    content: () => (
      <>
        <p>
          It seems that jest doesn't collect coverage from all files in your
          project by default. It could be that the project I'm working on has
          some configuration option that I am unaware of.. But these are my
          observations so far:
        </p>
        <p>
          I have built a new page into our front-end microservice for my job at
          IBM. This microservice is a React app, and is made of many different
          pages. Test coverage varies by page. And I have been quite sinful in
          that I built most of my new page before writing any test coverage for
          it. (deadlines! that's my one excuse.) Anyways, now that the page is
          built, it's time to write some tests for these new features, so that
          any future developers will have some boundaries and a better
          understanding of the page's intention.
        </p>
        <p>
          My first objective was to run a test coverage report, and I expected
          to see a whole lot of{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>0%</span> initially
          but I surprisingly saw nothing related to my new page at all. Weird.
          Jest wasn't even aware of these new files in the repository? It wasn't
          until I started adding small unit tests to the individual components
          and containers that Jest started reporting coverage for these file and
          adjacent ones. Even then, however, it hasn't fully "picked up" all of
          the files related to my new page yet.
        </p>
        <p>
          What is the point of code coverage reporting if you don't even see the
          files that aren't being tested? That seems like the kind of thing I'd
          want a coverage report to make me aware of. Anyways, this is something
          interesting to think about, and something I'd like to understand more.
          But for now, I'll leave it as a pending question. It's the weekend
          after all.
        </p>
      </>
    ),
    tags: ["observation", "question"]
  }
];

export default things;
