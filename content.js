var times = 20;

for(var i = 0; i < times; i++){
    var img = new Image();
    img.setAttribute('style', 'display: block;')
    img.setAttribute('src', 'https://picsum.photos/id/237/200/300');
    img.setAttribute('loading', ((i == 0) ? 'auto' : 'lazy'));
    document.body.appendChild(img);
}