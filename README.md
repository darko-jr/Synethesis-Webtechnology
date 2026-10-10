# Synethesis-Webtechnology
This is an application of what I've learned in web technology class from lesson 1 to lesson 9

# CSS Box Model Visualizer & Playground

An interactive web application designed to demonstrate the mechanics of the CSS box model, visually comparing the standard `content-box` and modern alternative `border-box` sizing models in real time.

## Overview

Understanding how margins, borders, padding, and content dimensions interact is essential for building predictable web layouts. This tool provides an interactive sandbox where users can adjust spacing properties via HTML form controls and observe immediate visual feedback alongside an exact mathematical breakdown of horizontal and vertical space occupied.

## Features

- **Live Concentric Layer Inspection:** Visualizes `margin`, `border`, `padding`, and `content` boxes as nested layers styled to mimic browser developer tools.
- **Sizing Model Toggle:** Dynamically switch between `content-box` (where padding and border add to declared dimensions) and `border-box` (where padding and border are absorbed into declared dimensions).
- **Tabular Calculation Breakdown:** An accessible metrics table detailing exact horizontal and vertical space distribution across all box layers.
- **Responsive Layout:** Built with Flexbox and media queries to adapt smoothly between desktop split-view and mobile stacked viewports
- **Dedicated Concepts Glossary:** A multi-page reference guide (`glossary.html`) utilizing semantic description lists (`<dl>`, `<dt>`, `<dd>`) to explain core CSS layout terminology.

## Project Structure

```text
├── index.html       # Visualizer stage, control form, and calculation table
├── glossary.html    # Standalone reference page for box model terminology
├── styles.css       # Unified stylesheet with responsive layout and layer themes
├── app.js           # DOM querying, event handling, and box model math engine
└── README.md        # Project documentation and run instructions

Technical Concepts Applied
HTML5 Semantics & Accessibility: Document landmarks (<header>, <nav>, <main>, <aside>, <footer>), grouped form controls (<fieldset>, <legend>, <label for="...">), and structured tabular data (<table>, <caption>, <thead>, <tbody>, <tfoot>, <th scope="row/col">).

CSS3 Layout & Architecture: Implementation of standard vs. alternative box-sizing models (box-sizing: border-box)[cite: 6, 7], flexible multi-column UI via Flexbox, tactile :hover interactions, and responsive design using @media queries.

Vanilla JavaScript (DOM Manipulation): Non-blocking script loading via <script defer>, live event listening via addEventListener('input'), dynamic inline style updates via .style, and dynamic text node rendering.

Citations:

Google Gemini: Assisted as an interactive AI thought partner and technical collaborator, guiding the architectural design, semantic HTML structure, box model mathematics, and project troubleshooting.
MDN Web Docs & web.dev: Educational curriculum resources referenced for modern web standards, CSS box-sizing principles, and accessibility best practices
