const api = jQuery(".test")
api.addClass('red')
console.log(api.find('.child'))
jQuery(".test")
    .find('.child')
    .addClass('blue')
    .end()
    .addClass('black')
api.each((div) => (console.log(div)))

api.parent().print()
api.children().print()