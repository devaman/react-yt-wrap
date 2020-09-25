import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import './reactYtWrap.css';
import { faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var YtWrap =
/*#__PURE__*/
function (_Component) {
  _inherits(YtWrap, _Component);

  function YtWrap() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, YtWrap);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(YtWrap)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      thumb: true,
      pip: false
    };

    _this.changeThumb = function () {
      _this.setState({
        thumb: false
      });
    };

    _this.changePIP = function () {
      _this.setState(function (prevstate) {
        return {
          pip: !prevstate.pip
        };
      });
    };

    return _this;
  }

  _createClass(YtWrap, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var params = [];
      if (this.props.video) params = Object.keys(this.props.video).map(function (d) {
        return "".concat(d, "=").concat(_this2.props.video[d]);
      });
      return React.createElement("div", {
        className: "react-youtube-player-wrap",
        style: this.props.style
      }, this.state.pip ? React.createElement("div", {
        style: {
          width: "100%",
          backgroundColor: "#000",
          position: "relative",
          paddingBottom: "56.25%",
          borderRadius: "10px",
          height: "auto",
          display: "flex",
          color: "#fff",
          justifyContent: "center",
          alignItems: "center"
        }
      }, React.createElement(FontAwesomeIcon, {
        alt: "Picture in Picture",
        style: {
          color: !this.state.thumb ? "#fff" : null
        },
        className: "react-youtube-player-wrap-pip-but",
        onClick: this.changePIP,
        icon: faExternalLinkAlt
      }), React.createElement("label", {
        style: {
          position: "absolute",
          top: "50%",
          left: "6%",
          fontFamily: "monospace",
          fontSize: "20px"
        }
      }, "Video Playing in Picture in Picture")) : null, React.createElement("div", {
        className: this.state.pip ? "react-youtube-player-pip" : null
      }, this.state.thumb ? React.createElement("div", {
        className: "react-youtube-player-wrap-thumb",
        onClick: this.changeThumb
      }, this.state.pip ? React.createElement(FontAwesomeIcon, {
        alt: "Picture in Picture",
        className: "react-youtube-player-wrap-pip-but",
        style: {
          color: "#fff"
        },
        onClick: this.changePIP,
        icon: faTimes
      }) : React.createElement(FontAwesomeIcon, {
        alt: "Picture in Picture",
        style: {
          color: !this.state.thumb ? "#fff" : null
        },
        className: "react-youtube-player-wrap-pip-but",
        onClick: this.changePIP,
        icon: faExternalLinkAlt
      }), React.createElement("button", {
        className: "video-play-button"
      }, React.createElement("span", null)), React.createElement("img", {
        src: "https://i3.ytimg.com/vi/".concat(this.props.id, "/maxresdefault.jpg"),
        alt: "thumb"
      })) : React.createElement("div", {
        className: "react-youtube-player-wrap-video"
      }, this.state.pip ? React.createElement(FontAwesomeIcon, {
        alt: "Picture in Picture",
        className: "react-youtube-player-wrap-pip-but",
        style: {
          color: "#fff"
        },
        onClick: this.changePIP,
        icon: faTimes
      }) : React.createElement(FontAwesomeIcon, {
        alt: "Picture in Picture",
        style: {
          color: !this.state.thumb ? "#fff" : null
        },
        className: "react-youtube-player-wrap-pip-but",
        onClick: this.changePIP,
        icon: faExternalLinkAlt
      }), React.createElement("iframe", {
        title: "YoutubeEmbed",
        src: "https://www.youtube-nocookie.com/embed/".concat(this.props.id, "?").concat(params.join('&')),
        allowFullScreen: "allowfullscreen",
        frameBorder: "0"
      }))));
    }
  }]);

  return YtWrap;
}(Component);

export default YtWrap;