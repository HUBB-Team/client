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

var _Styles = require('../Components/Styles');

var _Styles2 = _interopRequireDefault(_Styles);

var _Scripts = require('../Components/Scripts');

var _Scripts2 = _interopRequireDefault(_Scripts);

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
        _react2.default.createElement(_Styles2.default, null),
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
          _react2.default.createElement(_Scripts2.default, null)
        )
      );
    }
  }]);
  return Main;
}(_react2.default.Component);

exports.default = Main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk1haW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7OzZCQUNUO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRSw2REFERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUEsaUJBREY7QUFFRSx1REFBSyxXQUFVLFFBQWYsRUFBd0IsS0FBSSx3QkFBNUIsRUFBcUQsS0FBSSxLQUF6RCxHQUZGO0FBSUU7QUFBQTtBQUFBLG9CQUFLLFdBQVUsc0JBQWY7QUFFRTtBQUFBO0FBQUEsc0JBQUssV0FBVSx5QkFBZjtBQUVFO0FBQUE7QUFBQSx3QkFBTSxXQUFVLFlBQWhCO0FBQUE7QUFBQSxxQkFGRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUZGO0FBSkY7QUFERjtBQURGLFdBREY7QUE0QkU7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFHLE1BQUssR0FBUixFQUFZLGtCQUFlLFlBQTNCLEVBQXdDLFdBQVUsaURBQWxEO0FBQW9HO0FBQUE7QUFBQSxrQkFBRyxXQUFVLGdCQUFiO0FBQUE7QUFBQTtBQUFwRztBQURGLFdBNUJGO0FBK0JFO0FBQUE7QUFBQSxjQUFJLElBQUcsWUFBUCxFQUFvQixXQUFVLGlCQUE5QjtBQUNFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLE1BQWQ7QUFDRTtBQUFBO0FBQUEsa0JBQUcsSUFBRyxnQkFBTixFQUF1QixNQUFLLFlBQTVCO0FBQXlDLHVEQUFLLEtBQUksMkJBQVQsRUFBcUMsS0FBSSxTQUF6QztBQUF6QztBQURGLGFBREY7QUFHRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSx3QkFBSyxXQUFVLGFBQWY7QUFDRSwrREFBTyxJQUFHLFFBQVYsRUFBbUIsTUFBSyxRQUF4QixFQUFpQyxjQUFqQyxHQURGO0FBRUU7QUFBQTtBQUFBLDBCQUFPLFdBQVUsWUFBakIsRUFBOEIsU0FBUSxRQUF0QztBQUErQztBQUFBO0FBQUEsNEJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFBL0MsdUJBRkY7QUFHRTtBQUFBO0FBQUEsMEJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFIRjtBQURGO0FBREY7QUFERjtBQURGLGFBSEY7QUFnQkU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBSixhQWhCRjtBQWlCRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxZQUFkO0FBQ0U7QUFBQTtBQUFBLGtCQUFJLFdBQVUsbUNBQWQ7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsc0JBQUcsV0FBVSw4Q0FBYixFQUE0RCxNQUFLLEdBQWpFO0FBQUE7QUFBQSxtQkFBSjtBQUNFO0FBQUE7QUFBQSxzQkFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLDRCQUFHLE1BQUssWUFBUjtBQUFBO0FBQUE7QUFBSix1QkFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSw0QkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQUosdUJBRkY7QUFHRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsNEJBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQUFKLHVCQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLDRCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBSix1QkFKRjtBQUtFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSw0QkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQUo7QUFMRjtBQURGO0FBREY7QUFERjtBQURGLGFBakJGO0FBZ0NFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxrQkFBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQUosYUFoQ0Y7QUFpQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBSjtBQWpDRjtBQS9CRixTQUZGO0FBcUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsV0FBZjtBQUNFLG1EQUFLLFdBQVUsS0FBZjtBQURGLFdBREY7QUFJRTtBQUpGO0FBckVGLE9BREY7QUE4RUQ7OztFQWhGK0IsZ0JBQU1DLFM7O2tCQUFuQkQsSSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ncmlzYS/Qn9GA0L7QtdC60YLRiy9IVUJCLVRlYW0vdGVzdC1jbGllbnQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uL0NvbXBvbmVudHMvU3R5bGVzJ1xuaW1wb3J0IFNjcmlwdHMgZnJvbSAnLi4vQ29tcG9uZW50cy9TY3JpcHRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFN0eWxlcyAvPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwidG9wLW5hdlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5BYm91dCBIVUJCIFRlYW08L2E+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJodWluZWFcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9idW0ucG5nXCIgYWx0PVwiYnVtXCIgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBncmVlbiBsaWdodGVuLTVcIj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnQgYmxhY2stdGV4dFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5XaG8gd2UgYXJlIGFuZCB3aGF0IGlzIG91ciBnb2FsPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluIHJlcHJlaGVuZGVyaXQgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdCBub25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibmF2LW1vYmlsZVwiIGNsYXNzTmFtZT1cImJ1dHRvbi1jb2xsYXBzZSB0b3AtbmF2IGZ1bGwgaGlkZS1vbi1sYXJnZS1vbmx5XCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgaWQ9XCJuYXYtbW9iaWxlXCIgY2xhc3NOYW1lPVwic2lkZS1uYXYgZml4ZWQgXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICA8YSBpZD1cImxvZ28tY29udGFpbmVyXCIgaHJlZj1cImluZGV4Lmh0bWxcIj48aW1nIHNyYz1cIi9zdGF0aWMvbG9nby9odWJidGVhbS5wbmdcIiBhbHQ9XCJNeSBMb2dvXCIgLz48L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJwdXJwbGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInNlYXJjaFwiIHR5cGU9XCJzZWFyY2hcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1pY29uXCIgaHRtbEZvcj1cInNlYXJjaFwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2VhcmNoPC9pPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFib3V0PC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibm8tcGFkZGluZ1wiPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sbGFwc2libGUgY29sbGFwc2libGUtYWNjb3JkaW9uXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImNvbGxhcHNpYmxlLWhlYWRlciB3YXZlcy1lZmZlY3Qgd2F2ZXMtcHVycGxlXCIgaHJlZj1cIiNcIj5UZWFtPC9hPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzaWJsZS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImluZGV4Lmh0bWxcIj5Ib3JvcyBHcmVnb3J5PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+VW5ndXIgU3RlcGhlbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkJ1bWJ1IFR1ZG9yPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Qm9zdGFuIEpvaG48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ua2FjZW5rbyBBbGV4YW5kZXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q3JlZG88L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ==