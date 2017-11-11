'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var person = {
  name: 'Tom Erickson',
  location: 'Boulder, Colorado',
  occupation: {
    title: 'Developer of Exciting Stuff',
    employer: 'SpotX'
  },
  photo: {
    src: './images/escalante.png',
    height: '225px',
    width: '300px'
  },
  updates: [{
    platform: 'twitter',
    status: 'I\'m happy, hope you\'re happy too!'
  }, {
    platform: 'twitter',
    status: 'The better the singer\'s voice, the harder it is to hear what they\'re saying'
  }, {
    platform: 'twitter',
    status: 'Fear makes the wolf look bigger'
  }, {
    platform: 'facebook',
    status: 'If you\’re working on something that you think is going to get accomplished in this lifetime then you’re not thinking big enough'
  }]
};

var Photo = function (_React$Component) {
  _inherits(Photo, _React$Component);

  function Photo() {
    _classCallCheck(this, Photo);

    return _possibleConstructorReturn(this, (Photo.__proto__ || Object.getPrototypeOf(Photo)).apply(this, arguments));
  }

  _createClass(Photo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'photo' },
        React.createElement('img', { width: this.props.photoWidth, height: this.props.photoHeight, src: this.props.photoSrc, alt: 'Photo' })
      );
    }
  }]);

  return Photo;
}(React.Component);

var Bio = function (_React$Component2) {
  _inherits(Bio, _React$Component2);

  function Bio() {
    _classCallCheck(this, Bio);

    return _possibleConstructorReturn(this, (Bio.__proto__ || Object.getPrototypeOf(Bio)).apply(this, arguments));
  }

  _createClass(Bio, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'bio' },
        React.createElement(
          'h1',
          { className: 'name' },
          this.props.name
        ),
        React.createElement(
          'h2',
          { className: 'location' },
          this.props.location
        ),
        React.createElement(
          'div',
          { className: 'occupation' },
          React.createElement(
            'p',
            null,
            this.props.occupation.title,
            ' at ',
            this.props.occupation.employer
          )
        )
      );
    }
  }]);

  return Bio;
}(React.Component);

var Updates = function (_React$Component3) {
  _inherits(Updates, _React$Component3);

  function Updates() {
    _classCallCheck(this, Updates);

    return _possibleConstructorReturn(this, (Updates.__proto__ || Object.getPrototypeOf(Updates)).apply(this, arguments));
  }

  _createClass(Updates, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'updates' },
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            { className: 'update' },
            'Updates'
          ),
          React.createElement(
            'li',
            { className: 'update' },
            'Updates'
          )
        )
      );
    }
  }]);

  return Updates;
}(React.Component);

var Card = function (_React$Component4) {
  _inherits(Card, _React$Component4);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'card' },
        React.createElement(Photo, { photoHeight: person.photo.height, photoWidth: person.photo.width, photoSrc: person.photo.src }),
        React.createElement(Bio, { name: person.name, location: person.location, occupation: person.occupation }),
        React.createElement(Updates, null)
      );
    }
  }]);

  return Card;
}(React.Component);

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));