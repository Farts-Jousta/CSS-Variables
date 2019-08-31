# CSS-Variables

### Add variables to css using javascript.

---

## Overview

The Html and Css were imported off of the Javascript30 course, the javascript and some css being my contribution.

The purposefully dull and lackluster design is simply because this was a test to build my javascript and css variable knowledge, and didn't want to waste too much time on comparitivly unimportant details. This does however leave the site bland and with no unique qualities, which is not optimal to be part of a portfolio.

## Css Information

#### Css Variables

Usually initially defined in the :root class, css variables can be called anywhere in the css file if placed in a var() method first.

These were used to change multiple css properties that used the same variable at the same time, which proved to be incrediably efficient.

`--variable: value` (Within :root)

`property: var(--variable)` (Anywhere else in the css)

## Javascript Information

#### Query Selector All

Very similar to QuerySelector covered in the [Javascript Drum Kit](https://github.com/Farts-Jousta/JavaScript-Drum-Kit) project, QuerySelectorAll creates a "NodeList" of html items, which is like a less powerfull and less useful array. You can call all items with a certain class or tag, or even classes and tags within a specific class or tag.

In this project it was used to collect all input tags from the control class, which was specifically the range  selectors and color selectors.

`document.querySelectorAll('[class/tag] [subclass/subtag]')`

#### Set Property

The .style.setproperty() method expands upon the simple .style method reffered to in my [CSS JS Clock](https://github.com/Farts-Jousta/CSS-JS-Clock) project by refering strait to the css rather than through a html element.

In this project it was used to change variable values used thoughout the css stored in the :root.

`document.documentElement.style.setProperty('[css-property]', [new-value])`

## Review

Despite it's obvious shortcomings in presentation, it served it's purpose in providing a learning tool for me to enhance my javascript and css.

Glaring problems to fix would be the heavy relience on pixel measurement, which makes it incredibly difficult to scale to other devices and screen sizes, as well as the lack of practical customer uses.

Things that could be added include more options, such as a cropping tool or a picture saturation tool, or just other general photo editing tools.