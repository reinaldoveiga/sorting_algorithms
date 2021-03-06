import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  trueOrFalseButtons: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  correspondenceContainer: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  correspondenceListContent: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  correspondenceListText: {fontFamily: 'Poppins-Bold', margin: 10},
  correspondenceSecondListView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  descriptive: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subDescriptive: {
    flex: 1,
  },
});
export default styles;