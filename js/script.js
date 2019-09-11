$(document).ready(function(){
    new TypeIt('#nameIntro', {
    speed: 200,
    startDelay: 900,
    waitUntilVisible: true,
    cursor:false
  })
  .type('{$ophie Kim}')
  .go();
});

$('.navBtn').on('click',function(){
  $('.mainUl').removeClass('d-none').toggle();
  setTimeout(function(){
    $('.mainUl').addClass('d-none');
  },3000)
});

$('.demo-1').percentcircle({
  animate:true,
  diameter:150,
  guage: 3,
  coverBg: '#fff',
  bgColor: '#efefef',
  percentSize: '20px'
});

$('.demo-2').percentcircle({
  animate : true,
  diameter : 150,
  guage: 3,
  coverBg: '#fff',
  bgColor: '#efefef',
  fillColor: '#E95546',
  percentSize: '20px'
});

$('.demo-3').percentcircle({
  animate : true,
  diameter : 150,
  guage: 3,
  coverBg: '#fff',
  bgColor: '#efefef',
  fillColor: '#cdc032',
  percentSize: '20px'
});
$('.demo-4').percentcircle({
  animate : true,
  diameter : 150,
  guage: 3,
  coverBg: '#fff',
  bgColor: '#efefef',
  fillColor: '#0f2d3f',
  percentSize: '20px'
});

$('.demo-5').percentcircle({
  animate : true,
  diameter : 150,
  guage: 3,
  coverBg: '#fff',
  bgColor: '#efefef',
  fillColor: '#9068D2',
  percentSize: '20px'
});
$('.demo-6').percentcircle({
  animate : true,
  diameter : 150,
  guage: 3,
  coverBg: '#fff',
  bgColor: '#efefef',
  fillColor: '#154784',
  percentSize: '20px'
});
