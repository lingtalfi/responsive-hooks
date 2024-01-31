(function(window) {
  const screenBreakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  };




  let currentBreakpoint = null;
  const callbacks = {};

  function getBreakpoint(width) {
    let breakpoint = null;
    for (let size in screenBreakpoints) {
      if (width >= screenBreakpoints[size]) {
        breakpoint = size;
      }
    }
    return breakpoint;
  }

  function triggerCallbacks(breakpoint) {
    if (callbacks[breakpoint]) {
      callbacks[breakpoint].forEach(callback => callback());
    }
  }

  function resizeHandler() {
    const iw = window.innerWidth;
    const newBreakpoint = getBreakpoint(iw);

    if (newBreakpoint !== currentBreakpoint) {
      currentBreakpoint = newBreakpoint;
      triggerCallbacks(newBreakpoint);
    }
  }

  window.ResponsiveHooks = {
    on: function(breakpoints, callback) {
      if (!Array.isArray(breakpoints)) {
        breakpoints = [breakpoints];
      }

      breakpoints.forEach(breakpoint => {
        if (!callbacks[breakpoint]) {
          callbacks[breakpoint] = [];
        }
        callbacks[breakpoint].push(callback);
        if (currentBreakpoint === null) {
          currentBreakpoint = getBreakpoint(window.innerWidth);
        }

        if (currentBreakpoint === breakpoint) {
          callback();
        }
      });
    }
  };


  window.addEventListener('resize', resizeHandler);
  resizeHandler();
})(window);