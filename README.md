# react-yt-wrap

[![npm](https://img.shields.io/npm/v/react-yt-wrap.svg)](https://www.npmjs.com/package/react-yt-wrap)
![npm](https://img.shields.io/npm/dw/react-yt-wrap.svg)
![GitHub issues](https://img.shields.io/github/issues/devaman/react-yt-wrap.svg)
![GitHub pull requests](https://img.shields.io/github/issues-pr/devaman/react-yt-wrap.svg)
[![HitCount](http://hits.dwyl.io/devaman/react-yt-wrap.svg)](http://hits.dwyl.io/devaman/react-yt-wrap)

## Import the modal.

```js
import YtWrap from 'react-yt-wrap';
```
## Usage

```js
 <ReactYtWrap ref={child} id="GoTjn6hD_io" style={{ padding: "0 10%" }}
          video={{ autoplay: false, startSeconds: start }}
          onReadyState={onReady}
        />
 ```
 See the example in src/index.js.
 To run demo npm start.

 ## Props

 id : https://www.youtube.com/watch?v=SKh1MJromYk 
  means => __SKh1MJromYk__

 video : JSON object which contains all the props for the iframe . [See this](https://developers.google.com/youtube/player_parameters)

# Only for single video

# ChangeLog

- Picture in Picture mode added