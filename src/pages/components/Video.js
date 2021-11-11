import React from 'react';
import Player from 'griffith'

const Page3 = () => {
  let mystyle = {
    width: '100%',
    height: '80px',
    backgroundColor: 'burlywood',
    fontSize: '34px',
    textAlign: 'center',
    lineHeight: '80px',
    // "& p": {
    //   fontSize: "16px"
    // }
  };

  const classes = {
    pStyle: {
      fontSize: "16px",
      lineHeight: "20px"
    },
    colorStyle: {
      color: "white"
    },
    h3Style: {
      fontSize: "24px"
    }
  }

  const sources = {
    hd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    },
    sd: {
      play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
    },
  }

  // const sources1 = {
  //   hd: {
  //     play_url: 'https://www.youtube.com/watch?v=bRlx37wtBFM',
  //   },
  //   sd: {
  //     play_url: 'https://www.youtube.com/watch?v=bRlx37wtBFM',
  //   },
  // }



  return (
    <div style={mystyle}>
      <h2 style={{ ...classes.h3Style }}>YouTube嵌入</h2>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/bRlx37wtBFM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

      {/* <p style={{ ...classes.pStyle }}>111111</p>
      <p style={{ ...classes.pStyle }}>
        <Player sources={sources1} />
      </p> */}
      {/* <p style={{ ...classes.pStyle }}>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/PNJqec5Jcdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </p> */}
      {/* <p style={{ ...classes.pStyle }}></p> */}
      <p style={{ ...classes.pStyle, ...classes.colorStyle }}> http://react-china.org/t/react/30921 </p>
      <p style={{ ...classes.pStyle }}>Griffith 是什么？</p>
      <p style={{ ...classes.pStyle }}>Griffith 是一个基于 React 的视频播放器，目前已在知乎 web 和 mobile web 内使用，并在 GitHub 上开源。</p>
      <div style={{ ...classes.pStyle }}>
        <Player sources={sources} />
        这是一个MP4格式资源文件
      </div>

    </div >
  );
}

export default Page3;
