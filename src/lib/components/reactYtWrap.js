import React, { Component } from 'react';
import './reactYtWrap.css'
import { faExternalLinkAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const autoplayBool = (video) => {
  if (video) {
    if (video.autoplay) {
      return false
    }
  } return true
}
class YtWrap extends Component {
  state = {
    thumb: autoplayBool(this.props.video),
    pip: false,
    time: ''
  }

  changeThumb = () => {
    this.setState({
      thumb: false
    }, () => {
      this.loadVideo();

    })
  }
  changePIP = () => {
    this.setState(prevstate => ({
      pip: !prevstate.pip
    }))
  }
  componentDidMount() {
    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      if (!this.state.thumb)
        window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    }
  }
  seekTo = (time) => {
    this.player.seekTo(time, true)
  }
  loadVideo = () => {
    let { id } = this.props
    this.player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange
      },
    });
  };

  onPlayerReady = event => {
    event.target.loadVideoById({
      'videoId': this.props.id,
      ...this.props.video
    });
    this.props.onReadyState();
  };
  onPlayerStateChange = () => {
    let vals = {};
    Object.values(window.YT.PlayerState).forEach((d,i)=>{
      vals = {...vals,[d]:Object.keys(window.YT.PlayerState)[i]}
    });
    console.log(vals);
    return vals[this.player.getPlayerState()];
  }
  getDuration = () => {
    return this.player.getCurrentTime();

  }

  render() {
    const { id } = this.props;

    return (
      <div className="react-youtube-player-wrap" style={this.props.style}>
        {this.state.pip ?
          <div style={{
            width: "100%", backgroundColor: "#000",
            position: "relative",
            paddingBottom: "56.25%",
            borderRadius: "10px",
            height: "auto",
            display: "flex",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <FontAwesomeIcon alt="Picture in Picture" style={{ color: !this.state.thumb ? "#fff" : null }} className="react-youtube-player-wrap-pip-but" onClick={this.changePIP} icon={faExternalLinkAlt} />

            <label style={{ position: "absolute", top: "50%", left: "6%", fontFamily: "monospace", fontSize: "20px" }}>Video Playing in Picture in Picture</label>
          </div>
          : null}
        <div className={this.state.pip ? "react-youtube-player-pip" : null}>
          {this.state.thumb ?
            <div className="react-youtube-player-wrap-thumb" onClick={this.changeThumb}>
              {this.state.pip ? <FontAwesomeIcon alt="Picture in Picture" className="react-youtube-player-wrap-pip-but" style={{ color: "#fff" }} onClick={this.changePIP} icon={faTimes} /> : <FontAwesomeIcon alt="Picture in Picture" style={{ color: !this.state.thumb ? "#fff" : null }} className="react-youtube-player-wrap-pip-but" onClick={this.changePIP} icon={faExternalLinkAlt} />}
              <button className="video-play-button">
                <span></span>
              </button>

              <img src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`} alt="thumb" />
            </div>
            :
            <div className="react-youtube-player-wrap-video">
              {this.state.pip ? <FontAwesomeIcon alt="Picture in Picture" className="react-youtube-player-wrap-pip-but" style={{ color: "#fff" }} onClick={this.changePIP} icon={faTimes} /> : <FontAwesomeIcon alt="Picture in Picture" style={{ color: !this.state.thumb ? "#fff" : null }} className="react-youtube-player-wrap-pip-but" onClick={this.changePIP} icon={faExternalLinkAlt} />}
              <div id={`youtube-player-${id}`} />
            </div>
          }
        </div>
        <button onClick={this.getDuration}>GetTime</button>
      </div>
    )

  }

}
export default YtWrap;