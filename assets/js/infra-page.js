webpackJsonp([1,4],{1:function(module,exports){eval("module.exports.addClass = function (el, className) {\n  if (el.className.indexOf(className) === -1) {\n    el.className += ' ' + className;\n  }\n}\n\nmodule.exports.removeClass = function (el, className) {\n  var elClass = ' ' + el.className + ' ';\n  while (elClass.indexOf(' ' + className + ' ') != -1) {\n    elClass = elClass.replace(' ' + className + ' ', '');\n  }\n  el.className = elClass;\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NvdXJjZS9qcy91dGlscy9jbGFzc2VzLmpzPzE0OTkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNsYXNzTmFtZSkge1xuICBpZiAoZWwuY2xhc3NOYW1lLmluZGV4T2YoY2xhc3NOYW1lKSA9PT0gLTEpIHtcbiAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUpIHtcbiAgdmFyIGVsQ2xhc3MgPSAnICcgKyBlbC5jbGFzc05hbWUgKyAnICc7XG4gIHdoaWxlIChlbENsYXNzLmluZGV4T2YoJyAnICsgY2xhc3NOYW1lICsgJyAnKSAhPSAtMSkge1xuICAgIGVsQ2xhc3MgPSBlbENsYXNzLnJlcGxhY2UoJyAnICsgY2xhc3NOYW1lICsgJyAnLCAnJyk7XG4gIH1cbiAgZWwuY2xhc3NOYW1lID0gZWxDbGFzcztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2pzL3V0aWxzL2NsYXNzZXMuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==")},32:function(module,exports,__webpack_require__){eval("var classHelp = __webpack_require__(1);\n\nvar moreInfoButtons = document.querySelectorAll('.package__cta');\n\nfor (i = 0; i < moreInfoButtons.length; i++) {\n  moreInfoButtons[i].addEventListener('click', toggle, false);\n}\n\nfunction toggle (e) {\n  e.preventDefault();\n\n  var package = this.parentNode.parentNode.parentNode;\n\n  var textContainer = package.querySelector('.package__text');\n  if (textContainer.style.maxHeight === '100%') {\n    classHelp.removeClass(package, 'open');\n    this.innerHTML = 'More info'\n    textContainer.style.maxHeight = '50px';\n  } else {\n    classHelp.addClass(package, 'open');\n    this.innerHTML = 'Less info'\n    textContainer.style.maxHeight = '100%';\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvanMvaW5mcmEtcGFnZS5qcz8xMTJiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjbGFzc0hlbHAgPSByZXF1aXJlKCcuL3V0aWxzL2NsYXNzZXMnKTtcblxudmFyIG1vcmVJbmZvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNrYWdlX19jdGEnKTtcblxuZm9yIChpID0gMDsgaSA8IG1vcmVJbmZvQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICBtb3JlSW5mb0J1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGUsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlIChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICB2YXIgcGFja2FnZSA9IHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgdmFyIHRleHRDb250YWluZXIgPSBwYWNrYWdlLnF1ZXJ5U2VsZWN0b3IoJy5wYWNrYWdlX190ZXh0Jyk7XG4gIGlmICh0ZXh0Q29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9PT0gJzEwMCUnKSB7XG4gICAgY2xhc3NIZWxwLnJlbW92ZUNsYXNzKHBhY2thZ2UsICdvcGVuJyk7XG4gICAgdGhpcy5pbm5lckhUTUwgPSAnTW9yZSBpbmZvJ1xuICAgIHRleHRDb250YWluZXIuc3R5bGUubWF4SGVpZ2h0ID0gJzUwcHgnO1xuICB9IGVsc2Uge1xuICAgIGNsYXNzSGVscC5hZGRDbGFzcyhwYWNrYWdlLCAnb3BlbicpO1xuICAgIHRoaXMuaW5uZXJIVE1MID0gJ0xlc3MgaW5mbydcbiAgICB0ZXh0Q29udGFpbmVyLnN0eWxlLm1heEhlaWdodCA9ICcxMDAlJztcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2UvanMvaW5mcmEtcGFnZS5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9")}},[32]);