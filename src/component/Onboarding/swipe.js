'use strict';

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {

  state = { photos: [], loading: true };
  INSTAGRAM_ID = "787132"
  THUMBNAIL_WIDTH = 640
  PHOTO_COUNT = 30
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View
          style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
          <Text>{this.props.text}</Text>
        </View>

        <View style={styles.CardPage}>
          <View>
            {/* <MySwipeCardsComponents/> */}
            <Image
              source={this.props.image}
              style={styles.CardPageImage}
            />
            <View style={styles.CardPageArt}>
              <View style={styles.CardPageBox}>
                <Text style={styles.CardPageBoxText}>Art</Text>
              </View>
              <AntDesign name="hearto" size={25} color={'black'} />
            </View>
          </View>
          <View style={styles.CardText}>
            <Text style={styles.CardTextOne}>Mosu #1930</Text>
            <View style={styles.CardPageOne}>
              <AntDesign
                style={styles.CardTextOne}
                name={'clockcircleo'}
                size={18}
              />
              {/* <Image source={require('../../Assets/IconTime.png')} style={Styles.CardPageImageOne}/> */}
              <Text style={styles.CardTextOne}>102d Left</Text>
            </View>
          </View>

          <View style={styles.CardText}>
            <View style={styles.CardPageProfileVerified}>
              <Image
                source={require('../../Assets/Profile-Verified.png')}
                style={{width: 40, height: 40}}
              />
              <Text style={styles.CardTextProfileVerifiedOne}>Karafuru</Text>
            </View>
            <View style={styles.CardPageOneETH}>
              {/* <AntDesign name={'clockcircleo'} size={18} /> */}
              <Image source={require('../../Assets/logos_ethereum.png')} />
              <Text style={styles.CardTextOne}>2,75 ETH</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    );
  }
}

export default class MySwipeCardsComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {text: 'Tomato', image: require('../../Assets/image3.png'),},
        {text: 'Aubergine',image: require('../../Assets/image3.png'),},
        {text: 'Courgette',image: require('../../Assets/image3.png'),},
        {text: 'Blueberry',image: require('../../Assets/image3.png'),},
        {text: 'Umm...', image: require('../../Assets/image3.png'),},
        {text: 'orange',image: require('../../Assets/image3.png'),},
        // {
        //   id: '1',
        //   title: 'Purchase verifiable works of art',
        //   description: ' from the worlds best tattoo artists',
        //   image: require('../../Assets/image3.png'),
        // },
        // {
        //   id: '2',
        //   title: 'Start your own Tattoo gallery now',
        //   description: 'Buy and sell digital items',
        //   image: require('../../Assets/image5.png'),
        // },
        // {
        //   id: '3',
        //   title: 'Discovering the  world of Inkoin',
        //   description: 'Buy and sell digital items',
        //   image: require('../../Assets/image8.png'),
        // },
      ],
    };
  }

  handleYup(card) {
    console.log(`Yup for ${card.text}`);
  }
  handleNope(card) {
    console.log(`Nope for ${card.text}`);
  }
  handleMaybe(card) {
    console.log(`Maybe for ${card.text}`);
  }
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={cardData => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    );
  }
}

const styles = StyleSheet.create({
  card: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: 300,
    // height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  },
  CardPage: {
    width: 287,
    height: 423,
    backgroundColor: "#253341",
    // marginLeft: 30,
    marginTop: 30,
    borderRadius: 15,
    // justifyContent: "center",
    alignItems: "center"
  },
  CardPageOne: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    width: 110

  },
  CardPageImage: {
    position: "relative",
    width: 250,
    height: 280,
    borderRadius: 15,
    marginTop: 20
  },
  CardText: {
    flexDirection: "row",
    width: 260,
    marginTop: 20,
    fontFamily: 'Rationale-Regular',

    // justifyContent: "space-between"
    justifyContent: "space-between",
    // borderWidth: 2

  },
  CardTextOne: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Rationale-Regular',

  },
  CardPageImageOne: {
    width: 30,
    height: 30
  },
  CardPageArt: {
    position: "absolute",
    // borderWidth : 1,
    left: 15,
    width: 210,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  CardPageBox: {
    width: 58,
    height: 32,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(49, 59, 69, 0.5)"
  },
  CardPageBoxText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Rationale-Regular',

  },
  CardPageProfileVerified: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardTextProfileVerifiedOne: {
    marginLeft: 10,
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Rationale-Regular',

  },
  CardPageOneETH: {
    borderColor: '#138E10',
    borderWidth: 2,
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 10,
    width: 120,
    justifyContent: "space-evenly",
    alignItems: 'center'
  },
 
 
 




 

});
