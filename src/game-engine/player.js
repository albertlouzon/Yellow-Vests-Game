import React, { Component } from "react";
import AliceLarsen from './../aliceLarsen.jpg'
const screenWidth = window.screen.width

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.yPosition = this.props.yPosition;
    this.xPosition = this.props.xPosition;
    this.playerSize = this.props.playerSize
    this.hp = this.props.hp

    this.state = {};
  }

  alice =  `url(${ AliceLarsen })`
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.yPosition === this.props.yPosition) {
    } else {
      this.player.scrollIntoView();
    }

  }

 
  render() {
    let imgUrl = 'https://image.spreadshirtmedia.net/image-server/v1/mp/designs/155031673,width=178,height=178,version=-1363264578/gilet-jaune-alien.png'
    const styles = {
      ball: {
        left: this.props.xPosition,
        height: this.props.playerSize.height,
        width: this.props.playerSize.width,
        backgroundImage: `url(${ imgUrl })`,
       backgroundRepeat  : 'no-repeat',
       backgroundPosition: 'center',
        position: "relative",
        bottom: this.props.yPosition
      },
      alice:{
        position:'relative',
        height:47,
        width:47,
        backgroundImage: `url(${ AliceLarsen })`,
        backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize:'contain',
        MarginLeft:10,
      }
    };
    return (
      <div
        style={styles.ball}
        ref={el => {
          this.player = el;
        }}
      >
        <div  style={styles.alice} ></div>
      </div>
    );
  }
}
