# ResponsiveHooks

ResponsiveHooks is a lightweight JavaScript library designed to manage and respond to changes in screen size breakpoints. It provides an easy-to-use API to execute specific callback functions when the browser window enters a defined breakpoint. Ideal for enhancing responsive design with JavaScript.

## Features

- Lightweight and simple.
- Easy to integrate with any web project.
- Supports custom callbacks for specific breakpoints.
- Efficiently triggers callbacks only when breakpoints change.

## Getting Started

To use ResponsiveHooks in your project, include the `responsive-hooks.js` (or `responsive-hooks.min.js` for the minified version) in your HTML file.

```html
<script src="path/to/responsive-hooks.js"></script>
```

## Usage

After including the script in your project, you can use ResponsiveHooks to register callback functions for various breakpoints. You can specify a single breakpoint or an array of breakpoints.

To register a callback for a single breakpoint:

```js
window.ResponsiveHooks.on('sm', function() {
    // Your code here will run when the screen size changes to 'sm'
});
```

To register the same callback for multiple breakpoints:

```js
window.ResponsiveHooks.on(['lg', 'xl', 'xxl'], function() {
    // Your code here will run when the screen size changes to 'lg', 'xl', or 'xxl'
});
```

This flexibility allows you to easily manage responsive behavior for various screen sizes with minimal code.


## API Reference

`on(breakpoint, callback)`

Registers a callback function to be executed when the specified breakpoint is reached.


- `breakpoint`: A string representing the breakpoint ('xs', 'sm', 'md', 'lg', 'xl', 'xxl').
- `callback`: The function to execute when the breakpoint is reached.


## Breakpoints

The default breakpoints are defined as follows:

- xs: 0px
- sm: 576px
- md: 768px
- lg: 992px
- xl: 1200px
- xxl: 1400px


Those are the default breakpoints from bootstrap 5.


## Customization

To customize breakpoints, modify the `screenBreakpoints` object in `responsive-hooks.js`.



## Browser Support

ResponsiveHooks is compatible with all modern browsers, including Chrome, Firefox, Safari, and Edge.










