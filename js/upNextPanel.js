/********************************************************************
  UP NEXT PANEL
*********************************************************************/
/**
* The screen used while the video is playing.
*
* @class UpNextPanel
* @constructor
*/

var UpNextPanel = React.createClass({
  getInitialState: function() {
    return {
      radius: 0,
      width: 0
    };
  },


  componentDidMount: function() {
    this.state.radius = this.getDOMNode().clientHeight * 0.4;
    this.state.width = this.getDOMNode().clientWidth * 0.6 * 0.8;
  },
  
  handleUpNextPanelClick: function(event) {
    event.stopPropagation(); // W3C
    event.cancelBubble = true; // IE

    console.log("up next panel clicked");
  },

  render: function() {
    var panelStyle = upNextPanelStyle.panelStyle;
    var upNextInfoStyle = upNextPanelStyle.upNextInfo;
    var upNextTitleStyle = upNextPanelStyle.upNextTitle;
    var contentNameStyle = upNextPanelStyle.contentName;
    var contentBlockStyle = upNextPanelStyle.contentBlock;
    var countDownClockStyle = upNextPanelStyle.countDownClock;
    var contentBlockImageContainerStyle = upNextPanelStyle.contentBlockImageContainer;
    var contentBlockImageStyle = upNextPanelStyle.contentBlockImage;
    var contentName = this.props.upNextData.name;
    return (
      <div style={panelStyle}>
        <div style={upNextInfoStyle}>
          <div style={upNextTitleStyle}>Up Next</div>
          <div style={contentNameStyle}>{contentName}</div>
        </div>
        <div style={contentBlockStyle} onClick={this.handleUpNextPanelClick}>
          <div style={contentBlockImageContainerStyle}>
             <img style={contentBlockImageStyle} src={this.props.upNextData.preview_image_url}></img>
          </div>
          <div style={countDownClockStyle}>
            <CountDownClock {...this.props} 
            radius={this.state.radius}
            width={this.state.width}/>
          </div>
        </div>
      </div>
    );
  }
});