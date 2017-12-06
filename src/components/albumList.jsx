import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  root: {
    height: "100%",
  },
  progress: {
    height: '100%',
    width:'100%',
    display:'flex',
    alignItems:'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}

const AlbumList = (props) => {
  return (
    <List style={styles.root}>

      {!props.isSearching && props.searchResults.tracks &&
        <h4>Showing {props.searchResults.tracks.items.length} Tracks from {props.searchResults.tracks.total} Total</h4>
      }

        {!props.isSearching && props.searchResults.tracks && props.searchResults.tracks.items.map((track, idx) => (
              <ListItem
                key={idx}
                primaryText={<div style={{color:'#FFFFFF', fontSize:'1.2em'}}>{idx + 1}.&nbsp;&nbsp;{track.name}</div>}
                secondaryText={
                  <div style={{color:'gray', fontSize:'1em'}}>
                    {track.artists.map((a,idx)=><span key={idx}>{a.name}{(idx<(track.artists.length-1))&&", "}</span>)}
                    &nbsp;&middot;&nbsp;
                    {track.album.name}
                  </div>
                }
                leftAvatar={ track.album.images[2] &&
                  <Avatar size={64} src={track.album.images[2].url} />
                }
                innerDivStyle={{paddingLeft:'100px'}}
                style={{lineHeight:'32px'}}
                hoverColor="#0B0B0B"
              />
        ))}

        {props.isSearching &&
            <CircularProgress  size={300} thickness={25} style={styles.progress}/>
        }

  </List>
  )
}

export default AlbumList