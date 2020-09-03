import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image='https://i.ytimg.com/vi/7EmboKQH8lM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCURMFd7NqtJ2dT51ARGvXWw3hgrA'
        channel='Clever Programmer'
        verified
        subs='660K'
        noOfVideos={382}
        description='You can find awesome programming lessons'
      />
      <hr />

      <VideoRow
        views='1.4M views'
        subs='659K'
        description='Do you want a FREE one hour training... check this out'
        timestamp='59 seconds ago'
        channel='Clever Programmer'
        title="Let's Build a YouTube Cloner with REACT JS for beginners"
        image='https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ'
      />
    </div>
  );
}

export default SearchPage;
