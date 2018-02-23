# Mural Landing

This landing is built on Next.js framework. It’s kind of an overkill for something this simple but I really wanted to show my work implementing HTML and SASS in a Javascript framework.

## Dev Enviroment

```
npm install
```

And then to start the development environment you run

 ```
npm run dev
```

## Log

First of all I wanted to thank for the opportunity to work with Mural, I think you have a great platform that I would love to work with.

## The Stack

I wanted to use Next.js since it’s the latest technology I’ve been using. I’ve developed the new site for A24 news channel in my current company, Aerolab.
Also, I used SASS as a CSS Pre-Processor since it’s still my favorite.
To keep my code clean I used the eslint config from Airbnb with a couple a tweaks.

## The Process

First of all I scaned the AI file looking for components.
PlanReview seemed a good start so I made component since in the future it could get states to show changes if needed.

Since the PlanDescriptionItem (the bottom part of the design) are repeated items I decided to make a fake ‘API’ in lib/PlanItems.js. Here I have every item I need with its corresponding description.

After coding this out I started the PlanItems, that was the hardest part of the challenge. At the beginning the component PlanItem had all the information even if it was a PlanItemWithSlider (that’s what I named that item later). But with this way of thinking every plan item had a state and the only one that really needed it was the PlanItemWithSlider, so that wasn’t efficient - that’s why I made it a separated component.

After implementing all this,  came the fun part for me, coding animations. I really didn’t find anything that could benefit the experience by animating it so I thought, why not animate the Mural logo? That could give the sense of post-it’s and reflect Mural’s identity. The trick was done with a couple of CSS lines and the letters in SVG. I really hope you like it :D!

## Responsive and Design

I took the liberty to make the CTA of de PlanSliderSliderItem a little bit wider than the rest since that seemed the most important plan, so to give it a little bit of punch, the CTA is bigger.

PlanItemDecriptions where going to look really weird after the three PlanItems, they would have had no visual correlation between them so I decided to put every description inside its PlanItem box. Though I chose not to show every PlanItemDescription from the getgo since the user would need to scroll too much before getting to the next item, I hid them inside a dropdown menu.

Also for the mobile look I took the liberty to reorder the PlanItems, since I though that the slider one was the most important.
I changed the number from 5 to 6 users in PlanItemWithSlider since the first option already offered a deal for five users.

Tablet viewport gets really weird when you have an odd number of items. Sometimes it seems that is OK with three elements rather than making every element full width, that would’ve looked weird so I decided to keep it to three column.

## Misc

Had a really weird bug on mobile where heading tags weren’t loading the proper font, to hack this and still have CEO, I changed heading tags for paragraph tags and left the heading tags with display: none.
The AI file had an image that should had been text so I had to guess the font sizes and weights.

## Tested On

iOS 11.2 Safari and Chrome - iPhone 7
iOS 11.2 Safari and Chrome - iPad Mini 2
High Sierra Safari, Chrome and Firefox

## Project Time

12hs

## License

MIT © Turbofacu 2018