import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import './reactYtWrap.css';
import { faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var autoplayBool = function autoplayBool(video) {
  if (video) {
    if (video.autoplay) {
      return false;
    }
  }

  return true;
};

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
      thumb: autoplayBool(_this.props.video),
      pip: false,
      time: ''
    };

    _this.changeThumb = function () {
      _this.setState({
        thumb: false
      }, function () {
        _this.loadVideo();
      });
    };

    _this.changePIP = function () {
      _this.setState(function (prevstate) {
        return {
          pip: !prevstate.pip
        };
      });
    };

    _this.seekTo = function (time) {
      _this.player.seekTo(time, true);
    };

    _this.loadVideo = function () {
      var id = _this.props.id;
      _this.player = new window.YT.Player("youtube-player-".concat(id), {
        videoId: id,
        events: {
          onReady: _this.onPlayerReady,
          onStateChange: _this.onPlayerStateChange
        }
      });
    };

    _this.onPlayerReady = function (event) {
      event.target.loadVideoById(_objectSpread({
        'videoId': _this.props.id
      }, _this.props.video));

      _this.props.onReadyState();
    };

    _this.onPlayerStateChange = function () {
      var vals = {};
      Object.values(window.YT.PlayerState).forEach(function (d, i) {
        vals = _objectSpread({}, vals, _defineProperty({}, d, Object.keys(window.YT.PlayerState)[i]));
      });
      console.log(vals);
      return vals[_this.player.getPlayerState()];
    };

    _this.getDuration = function () {
      return _this.player.getCurrentTime();
    };

    return _this;
  }

  _createClass(YtWrap, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.YT) {
        // If not, load the script asynchronously
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        if (!this.state.thumb) window.onYouTubeIframeAPIReady = this.loadVideo;
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
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
        src: "https://i3.ytimg.com/vi/".concat(id, "/maxresdefault.jpg"),
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
      }), React.createElement("div", {
        id: "youtube-player-".concat(id)
      }))), React.createElement("button", {
        onClick: this.getDuration
      }, "GetTime"));
    }
  }]);

  return YtWrap;
}(Component);

export default YtWrap;