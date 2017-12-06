import * as React from 'react'
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

const styles = {
  appBar: {
    position: 'fixed',
    top: '0px',
    backgroundColor: '#242424'
  },
  toolbarStyle: {
    background: 'transparent',
    height:'64px'
  },
  title: {
    cursor: 'pointer',
    fontWeight: 'bolder'
  },
  searchBox: {
    backgroundColor: 'transparent',
    margin:'8px',
    marginLeft: '90px'
  },
  materialIcon: {
    display: 'inline-flex',
    alignItems: 'center',
    lineHeight:'1',

  },
  searchIconButton: {
    borderColor: 'lightGray',
    borderStyle: 'solid',
    borderWidth: '0px 0px 0px 0px',
    width: "50px"
  },
  flexCenter: {
    display: 'flex',
    alignItems:'center'
  }

}

//can ignore error 'types' can only be used in a .ts file
//as this is a known issue with Code's internal linter
const SearchBar = (props: Props) => {

  let onChangeSearchKey = (e)=>{
    props.newSearch(e.target.value);
  }

  let getUserImage = (e)=>{
    var url = "";
    if(props.user.images[0]){
      url = "http://i.imgur.com/dkY1gph.jpg";
      //url = props.user.images[0].url.value();
    } else {
      url = "http://i.imgur.com/dkY1gph.jpg";
    }
    return url;
  }

  return (
    <AppBar
      style={styles.appBar}
      showMenuIconButton={false}
      title={
        <Toolbar style={styles.toolbarStyle}>
          <ToolbarGroup firstChild={true}>
            <div style={styles.flexCenter}>
              <IconButton style={styles.materialIcon}  href="/">
                <FontIcon
                  className="fa fa-spotify"
                  color="#DADADA" />
              </IconButton>
              <a href="/"><strong style={styles.title}>Spotify Search</strong></a>
              { props.isLoggedIn &&
                <div  style={{...styles.searchBox, ...styles.flexCenter}} >
                    <IconButton
                      disabled={props.isSearching}
                      style={{...styles.materialIcon,...styles.searchIconButton}}
                      hoveredStyle={{background:'#0C0C0C'}}>
                      <FontIcon
                        className="zmdi zmdi-search"
                        color={props.muiTheme.palette.primary1Color}
                        style={{lineHeight:'auto'}} />
                    </IconButton>
                    <TextField
                        disabled={props.isSearching}
                        id="searchKey"
                        value={props.searchKey}
                        onChange={e=>onChangeSearchKey(e)}
                        hintText="Search for Album"
                        underlineStyle={{display: 'none'}}
                        style={{height: 'auto', margin:'8px'}}
                        hintStyle={{bottom:'auto', color:'lightGray'}}
                        onKeyPress={(ev) => {
                          if (ev.key === 'Enter') {
                            props.getSearchResults();
                            ev.preventDefault();
                          }
                        }} />
                </div>
              }
            </div>
          </ToolbarGroup>
          <ToolbarGroup>
            {!props.isLoggedIn &&
              <RaisedButton
                style={{lineHeight: 'normal'}}
                primary
                label="Log in"
                onClick={()=>props.handleOnLogin()} />
            }
            {props.isLoggedIn && props.user.images && 
              <Avatar
                src={"http://i.imgur.com/dkY1gph.jpg"}
                style={{marginRight:"10px"}} />
            }
            {props.isLoggedIn && props.user.id &&
              <ToolbarTitle text={`Hi, ${props.user.id}`} />
            }
          </ToolbarGroup>
        </Toolbar>
      } >
    </AppBar>

  )
}

export default muiThemeable()(SearchBar)