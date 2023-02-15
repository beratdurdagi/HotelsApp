import React from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Container,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../consts/colors';
const OnBoardScreen = ({navigation}) => {
  //*/ Yukarıdaki Ekran Boşluğunu doldurduk/* StatusBar
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/onboardImage.jpg')}>
        <View style={style.details}>
          <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
            Discover
          </Text>
          <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
            world with us
          </Text>
          <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 30}}>
            Welcome to my first application in this program language
          </Text>
          <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.navigate("HomeScreen") }  >
            <View style={style.bttn}>
              <Text style={{fontWeight: 'bold'}}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  bttn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnBoardScreen;
