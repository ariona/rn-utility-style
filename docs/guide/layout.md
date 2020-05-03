# Layout

## Flex

All component in React Native is a flex layout. So what you need to do is just modify the flex container props and the children

class | style
--- | ---
flex-initial | flexGrow: 0, flexShrink: 1
flex-1 | flex: 1
flex-auto | flexGrow: 1, flexShrink: 1
flex-row | flexDirection: row
flex-row-reverse | flexDirection: row-reverse
flex-col | flexDirection: column
flex-col-reverse | flexDirection: column-reverse
flex-no-wrap | flexWrap: nowrap
flex-wrap | flexWrap: wrap
flex-wrap-reverse | flexWrap: wrap-reverse

## Align Item
class | style
--- | ---
items-stretch | alignItems: stretch
items-start | alignItems: flex-start
items-center | alignItems: center
items-end | alignItems: flex-end
items-baseline | alignItems: baseline

## Align Content
class | style
--- | ---
content-start | alignContent: flex-start
content-center | alignContent: center
content-end | alignContent: flex-end
content-between | alignContent: space-between
content-around | alignContent: space-around

## Align Self
class | style
--- | ---
self-auto | alignSelf: auto
self-start | alignSelf: flex-start
self-center | alignSelf: center
self-end | alignSelf: flex-end
self-stretch | alignSelf: stretch

## Justify Content
class | style
--- | ---
justify-start | justifyContent: flex-start
justify-center | justifyContent: center
justify-end | justifyContent: flex-end
justify-between | justifyContent: space-between
justify-around | justifyContent: space-around

## Flex Grow & Shrink
class | style
--- | ---
flex-grow | flexGrow: 1
flex-grow-0 | flexGrow: 0
flex-shrink | flexShrink: 1
flex-shrink-0 | flexShrink: 0

> There is no order property in React Native flex layout, so we are not adding it to the utility.

## Position

Default position for all component in React Native is relative. Adding relative class is optional

Class | Style
--- | ---
absolute | position: absolute
relative | position: relative

## Top/Right/Bottom/Left

Reposition the component using top/right/bottom/left/axis class

Class | Style
--- | ---
top-0 | top: 0
right-0 | right: 0
bottom-0 | bottom: 0
left-0 | left: 0
top-auto | top: auto
bottom-auto | bottom: auto
left-auto | left: auto
right-auto | right: auto
inset-0 | top: 0,<br>  right: 0,<br>  bottom: 0,<br>  left: 0
inset-y-0 | top: 0,<br>  bottom: 0
inset-x-0 | right: 0,<br>  left: 0
inset-auto | top: auto,<br>  right: auto,<br>  bottom: auto,<br>  left: auto
inset-y-auto | top: auto,<br>  bottom: auto
inset-x-auto | left: auto,<br>  right: auto

## Z-Index

Class | Style
--- | ---
z-0 | zIndex: 0
z-10 | zIndex: 10
z-20 | zIndex: 20
z-30 | zIndex: 30
z-40 | zIndex: 40
z-50 | zIndex: 50