import React, { FC, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
// import { Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Dropdown= ({ label }) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
          <Text style={styles.dropdown}>
            This is the collection where your item will appear
          </Text>
      );
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>{label}</Text>
      <Image source ={require("../../Assets/down.png")}/>
      {/* <Icon type='font-awesome' name='chevron-down'/> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#253341',
    height: hp("8%"),
    width: wp("85%"),
    paddingHorizontal: 10,
    marginTop:40,
    zIndex: 1,
    borderRadius:10
  },
  buttonText: {
    flex: 1,
    textAlign: 'left',
    paddingLeft:20,
    fontSize:16,
    fontWeight:"400",
    color:"#AAB8C2"
  },
  dropdown: {
    position: 'absolute',
    // backgroundColor: '#253341',
    color:"#AAB8C2",
    top: 70,
  },
});

export default Dropdown;