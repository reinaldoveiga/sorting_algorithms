import {Dimensions, StatusBar, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  halfMargin: 30,
  fullMargin: 60,
  smallPadding: 4,
  basePadding: 8,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  statusBarHeight: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  smallRadius: 5,
  baseRadius: 10,
  tripleRadius: 30,
  smallBorder: 1,
  baseBorder: 5,
  baseElevation: 5,
  containerBase: width - 45,
};

export default metrics;