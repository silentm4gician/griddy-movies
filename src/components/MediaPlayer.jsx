const MediaPlayer = ({ url }) => {
  return <iframe
          src={url}
          width={'80%'} 
          height={400} 
          allowFullScreen
          style={{borderRadius:'8px'}}
          ></iframe>;
};

export default MediaPlayer;
