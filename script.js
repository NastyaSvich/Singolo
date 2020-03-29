function func(){
var k, j, n, d, m, a;
document.querySelectorAll('img').forEach(el => el.classList.remove('imgJS'));
a=document.getElementById("i").getElementsByTagName("img");
j=k=a.length;
m=[];
while(k--){m.push(a[k].src)};
k=j;
while(k--){
n=Math.floor(Math.random()*(k+1));
d=m[n];
m[n]=m[k];
m[k]=d};
k=j;
while(k--){a[k].src=m[k]};}

///////////////////////////////////////////////////

const MENU1 = document.getElementById('tag1');

MENU1.addEventListener('click', (event) => {
 MENU1.querySelectorAll('button').forEach(el => el.classList.remove('active'));
event.target.classList.add('active');
});

//////////////////////////////////////////////////

const IMG = document.getElementById('i');

IMG.addEventListener('click', (event) => {
IMG.querySelectorAll('img').forEach(el => el.classList.remove('imgJS'));
event.target.classList.add('imgJS');
});

//////////////////////////////////////////////////

const CLOSE = document.getElementById('close_button');
CLOSE.addEventListener('click', () => {
document.getElementById('result').innerText="";
document.getElementById('result2').innerText="";
document.getElementById('message_block').classList.add('hidden');
});


//////////////////////////////////////////////////

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

//////////////////////////////////////////////////

  var click=0;
  function setBg() {
  {
  document.getElementsByClassName('sl').value = ++click;
  if (click%2!=0) {
  document.getElementById('slider').style.backgroundColor='#648bf0';
  document.getElementById('slider').style.borderBottom='8px solid #648bf0';}
  if (click%2==0) {
  document.getElementById('slider').style.backgroundColor='#f06c64';
  document.getElementById('slider').style.borderBottom='8px solid #ea676b';}
  }
  }

//////////////////////////////////////////////////

var click1=1;
function set() {
{
document.getElementById('q').value = ++click1;
if (click1%2!=0) {
document.getElementById('t').style.opacity = "0";}
if (click1%2==0) {
document.getElementById('t').style.opacity = "1";
}
}
}

//////////////////////////////////////////////////

var click2=1;
function set1() {
{
document.getElementById('b').value = ++click2;
if (click2%2!=0) {
document.getElementById('p').style.opacity = "0";}
if (click2%2==0) {
document.getElementById('p').style.opacity = "1";}
}
}

//////////////////////////////////////////////////

var click3=1;
function set2() {
{
document.getElementById('fo').value = ++click3;
if (click3%2!=0) {
document.getElementById('menu').classList.add('spr');}
if (click3%2==0) {
document.getElementById('menu').classList.remove('spr');}
}
}

//////////////////////////////////////////////////

function validate(){

   var x=document.forms["form"]["name"].value;
   var y=document.forms["form"]["email"].value;
   at=y.indexOf("@");
   dot=y.indexOf(".");
   if (x.length==0 && y.length==0 && at<1 || dot <1 ){
alert("Необходимо ввести данные(почта должна быть в таком формате: ###@####.##)");
      return false;
   }

   else {
   const SUBMIT = document.getElementById('submit');
   SUBMIT.addEventListener('click', () => {
   const subject = document.getElementById('subject').value.toString();

   if(document.getElementById('subject').value == '')
   {document.getElementById('result').innerText="Без темы";}
   else{document.getElementById('result').innerText=subject;}

   const subject2 = document.getElementById('comment').value.toString();

   if(document.getElementById('comment').value == '')
   {document.getElementById('result2').innerText="Без описания";}
   else{
     document.getElementById('result2').innerText=subject2;
   }
   document.getElementById('message_block').classList.remove('hidden');
   });}
  }

//////////////////////////////////////////////////

'use strict';
    var multiItemSlider = (function () {

      function _isElementVisible(element) {
        var rect = element.getBoundingClientRect(),
          vWidth = window.innerWidth || doc.documentElement.clientWidth,
          vHeight = window.innerHeight || doc.documentElement.clientHeight,
          elemFromPoint = function (x, y) { return document.elementFromPoint(x, y) };
        if (rect.right < 0 || rect.bottom < 0
          || rect.left > vWidth || rect.top > vHeight)
          return false;
        return (
          element.contains(elemFromPoint(rect.left, rect.top))
          || element.contains(elemFromPoint(rect.right, rect.top))
          || element.contains(elemFromPoint(rect.right, rect.bottom))
          || element.contains(elemFromPoint(rect.left, rect.bottom))
        );
      }

      return function (selector, config) {
        var
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = [], // массив элементов
          _interval = 0,
          _html = _mainElement.innerHTML,
          _states = [
            { active: false, minWidth: 0, count: 1 },
            { active: false, minWidth: 980, count: 2 }
          ],
          _config = {
            isCycling: false, // автоматическая смена слайдов
            direction: 'right', // направление смены слайдов
            interval: 50000, // интервал между автоматической сменой слайдов
            pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
          };

        for (var key in config) {
          if (key in _config) {
            _config[key] = config[key];
          }
        }

        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        var _setActive = function () {
          var _index = 0;
          var width = parseFloat(document.body.clientWidth);
          _states.forEach(function (item, index, arr) {
            _states[index].active = false;
            if (width >= _states[index].minWidth)
              _index = index;
          });
          _states[_index].active = true;
        }

        var _getActive = function () {
          var _index;
          _states.forEach(function (item, index, arr) {
            if (_states[index].active) {
              _index = index;
            }
          });
          return _index;
        }

        var position = {
          getItemMin: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position < _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getItemMax: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position > _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getMin: function () {
            return _items[position.getItemMin()].position;
          },
          getMax: function () {
            return _items[position.getItemMax()].position;
          }
        }

        var _transformItem = function (direction) {
          var nextItem;
          if (!_isElementVisible(_mainElement)) {
            return;
          }
          if (direction === 'right') {
            _positionLeftItem++;
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
              nextItem = position.getItemMin();
              _items[nextItem].position = position.getMax() + 1;
              _items[nextItem].transform += _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform -= _step;
          }
          if (direction === 'left') {
            _positionLeftItem--;
            if (_positionLeftItem < position.getMin()) {
              nextItem = position.getItemMax();
              _items[nextItem].position = position.getMin() - 1;
              _items[nextItem].transform -= _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        var _cycle = function (direction) {
          if (!_config.isCycling) {
            return;
          }
          _interval = setInterval(function () {
            _transformItem(direction);
          }, _config.interval);
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
          if (e.target.classList.contains('slider__control')) {
            e.preventDefault();
            var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
            _transformItem(direction);
            clearInterval(_interval);
            _cycle(_config.direction);
          }
        };

        // обработка события изменения видимости страницы
        var _handleVisibilityChange = function () {
          if (document.visibilityState === "hidden") {
            clearInterval(_interval);
          } else {
            clearInterval(_interval);
            _cycle(_config.direction);
          }
        }

        var _refresh = function () {
          clearInterval(_interval);
          _mainElement.innerHTML = _html;
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper');
          _sliderItems = _mainElement.querySelectorAll('.slider__item');
          _sliderControls = _mainElement.querySelectorAll('.slider__control');
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left');
          _sliderControlRight = _mainElement.querySelector('.slider__control_right');
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
          _positionLeftItem = 0;
          _transform = 0;
          _step = _itemWidth / _wrapperWidth * 100;
          _items = [];
          _sliderItems.forEach(function (item, index) {
            _items.push({ item: item, position: index, transform: 0 });
          });
        }

        var _setUpListeners = function () {
          _mainElement.addEventListener('click', _controlClick);
          if (_config.pause && _config.isCycling) {
            _mainElement.addEventListener('mouseenter', function () {
              clearInterval(_interval);
            });
            _mainElement.addEventListener('mouseleave', function () {
              clearInterval(_interval);
              _cycle(_config.direction);
            });
          }
          document.addEventListener('visibilitychange', _handleVisibilityChange, false);
          window.addEventListener('resize', function () {
            var
              _index = 0,
              width = parseFloat(document.body.clientWidth);
            _states.forEach(function (item, index, arr) {
              if (width >= _states[index].minWidth)
                _index = index;
            });
            if (_index !== _getActive()) {
              _setActive();
              _refresh();
            }
          });
        }

        // инициализация
        _setUpListeners();
        if (document.visibilityState === "visible") {
          _cycle(_config.direction);
        }
        _setActive();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          },
          stop: function () { // метод stop
            _config.isCycling = false;
            clearInterval(_interval);
          },
          cycle: function () { // метод cycle
            _config.isCycling = true;
            clearInterval(_interval);
            _cycle();
          }
        }

      }
    }());

    var slider = multiItemSlider('.slider', {
      isCycling: false
    })

////////////////////////////////////////////////////////////////////////

    var sc = (function() {

      var section = document.querySelectorAll(".scroll");
      var sections = {};
      var i = 0;

      Array.prototype.forEach.call(section, function(e) {
        sections[e.id] = e.offsetTop;
      });

      window.onscroll = function() {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
          if (sections[i] <= scrollPosition) {
            document.querySelector('.active').setAttribute('class', ' ');
            document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
          }
        }
      };
    })();
