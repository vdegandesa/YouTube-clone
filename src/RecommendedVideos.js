import React from 'react';
import VideoCard from './VideoCard';
import './recommendedVideos.css';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        <VideoCard
          title='Become a Web Developer | 2019/2020'
          views='2.3M Views'
          timestamp='3 days ago'
          channelImage=''
          channel=''
          image='https://i.ytimg.com/vi/1XA3WA_4SKM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCLaf8L5dLrIuAHQMR7JPdngv9A-w'
        />
        <VideoCard
          title='Will Javascript Take Over the World? | Brian Kernighan'
          views='567K Views'
          timestamp='7 days ago'
          channelImage=''
          channel=''
          image='https://i.ytimg.com/vi/7EmboKQH8lM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCURMFd7NqtJ2dT51ARGvXWw3hgrA'
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default RecommendedVideos;
