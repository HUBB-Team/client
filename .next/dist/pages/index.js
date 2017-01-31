'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('/home/grisa/.local/lib/node_modules/next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/home/grisa/.local/lib/node_modules/next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/home/grisa/.local/lib/node_modules/next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/home/grisa/.local/lib/node_modules/next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/home/grisa/.local/lib/node_modules/next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/home/grisa/.local/lib/node_modules/next/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/home/grisa/.local/lib/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _Header = require('../Components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../Components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = function (_React$Component) {
  (0, _inherits3.default)(Main, _React$Component);

  function Main() {
    (0, _classCallCheck3.default)(this, Main);
    return (0, _possibleConstructorReturn3.default)(this, (Main.__proto__ || (0, _getPrototypeOf2.default)(Main)).apply(this, arguments));
  }

  (0, _createClass3.default)(Main, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'nav',
            { className: 'top-nav' },
            _react2.default.createElement(
              'div',
              { className: 'container' },
              _react2.default.createElement(
                'div',
                { className: 'nav-wrapper' },
                _react2.default.createElement(
                  'a',
                  { className: 'page-title' },
                  'About HUBB Team'
                ),
                _react2.default.createElement('img', { className: 'huinea', src: '/static/images/bum.png', alt: 'bum' }),
                _react2.default.createElement(
                  'div',
                  { className: 'card green lighten-5' },
                  _react2.default.createElement(
                    'div',
                    { className: 'card-content black-text' },
                    _react2.default.createElement(
                      'span',
                      { className: 'card-title' },
                      'Who we are and what is our goal'
                    ),
                    _react2.default.createElement(
                      'p',
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'a',
              { href: '#', 'data-activates': 'nav-mobile', className: 'button-collapse top-nav full hide-on-large-only' },
              _react2.default.createElement(
                'i',
                { className: 'material-icons' },
                'menu'
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { id: 'nav-mobile', className: 'side-nav fixed ' },
            _react2.default.createElement(
              'li',
              { className: 'logo' },
              _react2.default.createElement(
                'a',
                { id: 'logo-container', href: 'index.html' },
                _react2.default.createElement('img', { src: '/static/logo/hubbteam.png', alt: 'My Logo' })
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'nav',
                { className: 'purple' },
                _react2.default.createElement(
                  'div',
                  { className: 'nav-wrapper' },
                  _react2.default.createElement(
                    'form',
                    null,
                    _react2.default.createElement(
                      'div',
                      { className: 'input-field' },
                      _react2.default.createElement('input', { id: 'search', type: 'search', required: true }),
                      _react2.default.createElement(
                        'label',
                        { className: 'label-icon', htmlFor: 'search' },
                        _react2.default.createElement(
                          'i',
                          { className: 'material-icons' },
                          'search'
                        )
                      ),
                      _react2.default.createElement(
                        'i',
                        { className: 'material-icons' },
                        'close'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                'About'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'no-padding' },
              _react2.default.createElement(
                'ul',
                { className: 'collapsible collapsible-accordion' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'collapsible-header waves-effect waves-purple', href: '#' },
                    'Team'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'collapsible-body' },
                    _react2.default.createElement(
                      'ul',
                      null,
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: 'index.html' },
                          'Horos Gregory'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: '#' },
                          'Ungur Stephen'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: '#' },
                          'Bumbu Tudor'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: '#' },
                          'Bostan John'
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'a',
                          { href: '#' },
                          'Tkacenko Alexander'
                        )
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Credo'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                'Contact'
              )
            )
          )
        ),
        _react2.default.createElement(
          'main',
          null,
          _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement('div', { className: 'row' })
          ),
          _react2.default.createElement(_Footer2.default, null)
        )
      );
    }
  }]);
  return Main;
}(_react2.default.Component);

exports.default = Main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1haW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7OzZCQUNUO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRSw2REFERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUEsaUJBREY7QUFFRSx1REFBSyxXQUFVLFFBQWYsRUFBd0IsS0FBSSx3QkFBNUIsRUFBcUQsS0FBSSxLQUF6RCxHQUZGO0FBSUU7QUFBQTtBQUFBLG9CQUFLLFdBQVUsc0JBQWY7QUFFRTtBQUFBO0FBQUEsc0JBQUssV0FBVSx5QkFBZjtBQUVFO0FBQUE7QUFBQSx3QkFBTSxXQUFVLFlBQWhCO0FBQUE7QUFBQSxxQkFGRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUZGO0FBSkY7QUFERjtBQURGLFdBREY7QUE0QkU7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssR0FBUixFQUFZLGtCQUFlLFlBQTNCLEVBQXdDLFdBQVUsaURBQWxEO0FBQW9HO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGdCQUFiO0FBQUE7QUFBQTtBQUFwRztBQURGLFdBNUJGO0FBK0JFO0FBQUE7QUFBQSxjQUFJLElBQUcsWUFBUCxFQUFvQixXQUFVLGlCQUE5QjtBQUNFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLE1BQWQ7QUFDRTtBQUFBO0FBQUEsa0JBQUcsSUFBRyxnQkFBTixFQUF1QixNQUFLLFlBQTVCO0FBQXlDLHVEQUFLLEtBQUksMkJBQVQsRUFBcUMsS0FBSSxTQUF6QztBQUF6QztBQURGLGFBREY7QUFHRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSx3QkFBSyxXQUFVLGFBQWY7QUFDRSwrREFBTyxJQUFHLFFBQVYsRUFBbUIsTUFBSyxRQUF4QixFQUFpQyxjQUFqQyxHQURGO0FBRUU7QUFBQTtBQUFBLDBCQUFPLFdBQVUsWUFBakIsRUFBOEIsU0FBUSxRQUF0QztBQUErQztBQUFBO0FBQUEsNEJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFBL0MsdUJBRkY7QUFHRTtBQUFBO0FBQUEsMEJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFIRjtBQURGO0FBREY7QUFERjtBQURGLGFBSEY7QUFnQkU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBSixhQWhCRjtBQWlCRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxZQUFkO0FBQ0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsbUNBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSw4Q0FBYixFQUE0RCxNQUFLLEdBQWpFO0FBQUE7QUFBQSxtQkFBSjtBQUNFO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLDRCQUFHLE1BQUssWUFBUjtBQUFBO0FBQUE7QUFBSix1QkFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSw0QkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQUosdUJBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsNEJBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQUFKLHVCQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLDRCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBSix1QkFKRjtBQUtFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSw0QkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQUo7QUFMRjtBQURGO0FBREY7QUFERjtBQURGLGFBakJGO0FBZ0NFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQUosYUFoQ0Y7QUFpQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBSjtBQWpDRjtBQS9CRixTQUZGO0FBcUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFLG1EQUFLLFdBQVUsS0FBZjtBQURGLFdBREY7QUFJRTtBQUpGO0FBckVGLE9BREY7QUE4RUQ7OztFQWhGK0IsZ0JBQU1DLFM7O2tCQUFuQkQsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ncmlzYS/Qn9GA0L7QtdC60YLRiy9IVUJCLVRlYW0vdGVzdC1jbGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Db21wb25lbnRzL0Zvb3RlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInRvcC1uYXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+QWJvdXQgSFVCQiBUZWFtPC9hPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaHVpbmVhXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYnVtLnBuZ1wiIGFsdD1cImJ1bVwiIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgZ3JlZW4gbGlnaHRlbi01XCI+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50IGJsYWNrLXRleHRcIj5cblxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+V2hvIHdlIGFyZSBhbmQgd2hhdCBpcyBvdXIgZ29hbDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm5hdi1tb2JpbGVcIiBjbGFzc05hbWU9XCJidXR0b24tY29sbGFwc2UgdG9wLW5hdiBmdWxsIGhpZGUtb24tbGFyZ2Utb25seVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvaT48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsIGlkPVwibmF2LW1vYmlsZVwiIGNsYXNzTmFtZT1cInNpZGUtbmF2IGZpeGVkIFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgPGEgaWQ9XCJsb2dvLWNvbnRhaW5lclwiIGhyZWY9XCJpbmRleC5odG1sXCI+PGltZyBzcmM9XCIvc3RhdGljL2xvZ28vaHViYnRlYW0ucG5nXCIgYWx0PVwiTXkgTG9nb1wiIC8+PC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwicHVycGxlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2hcIiB0eXBlPVwic2VhcmNoXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtaWNvblwiIGh0bWxGb3I9XCJzZWFyY2hcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNlYXJjaDwvaT48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5vLXBhZGRpbmdcIj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbGxhcHNpYmxlIGNvbGxhcHNpYmxlLWFjY29yZGlvblwiPlxuICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJjb2xsYXBzaWJsZS1oZWFkZXIgd2F2ZXMtZWZmZWN0IHdhdmVzLXB1cnBsZVwiIGhyZWY9XCIjXCI+VGVhbTwvYT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2libGUtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJpbmRleC5odG1sXCI+SG9yb3MgR3JlZ29yeTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlVuZ3VyIFN0ZXBoZW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5CdW1idSBUdWRvcjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkJvc3RhbiBKb2huPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+VGthY2Vua28gQWxleGFuZGVyPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNyZWRvPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==