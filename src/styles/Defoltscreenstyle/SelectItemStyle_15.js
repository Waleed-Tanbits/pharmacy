import {  ColorTheme, Fonts } from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%',
    // marginHorizontal: '5%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  bgwhiteboxminview: {
    backgroundColor: ColorTheme.BGWhiteColor,
    color: 'black',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 30,
    marginTop: -150,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 3,
    height: '100%',
  },
  bgwhiteboxsmall: {
    backgroundColor: 'white',
    color: 'black',
    position: 'absolute',
    top: 40,
    left: 60,
    width: '60%',
    paddingLeft: 20,
    paddingRight: 30,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 30,
    marginBottom: 30,
    marginTop: -60,
    zIndex: 1,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',  
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  imagsetstyle: {
    width: '100%',
    height: 200,
  },
  setimagestylewidth: {
    height: 350,
  },
  flrxfireiocnview: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.43)',
    height: 38,
    width: 110,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 123,
  },
  setbgcolor: {
    height: 19,
    width: 19,
    backgroundColor: ColorTheme.BGC4C4C4,
    borderRadius: 100,
  },
  setbgcolortwo: {
    height: 19,
    width: 19,
    backgroundColor: ColorTheme.BGC4C4C4,
    borderRadius: 100,
    marginLeft: -4,
    marginRight: 5,
  },
  setdotflex: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  caltextstyle: {
    color: 'white',
    fontFamily: Fonts.Metropolis_Medium,
    marginRight: 5,
    fontWeight: '700'
  },
  setallpading: {
    padding: 15,
    paddingRight: 10,
    paddingTop: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  settextweight: {
    color: 'black',
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '700',
  },
  suhanitextstop: {
    color: ColorTheme.Text616161,
    fontFamily: Fonts.Roboto_Regular,
    fontWeight: '600',
    fontSize: 12,
  },
  setbgcolorborder: {
    backgroundColor: ColorTheme.BGWhiteColor,
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 100,
    borderWidth: 2,
    position: 'absolute',
    right: 30,
    top: -30,
  },
  descriptiontextset: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  descripitionviewone: {
    paddingTop: 20,
    width: '55%'
  },
  descripitionviewtwo: {
    paddingTop: 20,
  },
  paregraphtextset: {
    color: '#5E5959',
    fontSize: 11,
    paddingTop: 10,
    fontWeight: '400',
    fontFamily: Fonts.Poppins_Medium,
  },
  paregraphtextsettwo: {
    color: '#5E5959',
    fontSize: 11.5,
    paddingTop: 10,
    fontWeight: '400',
    fontFamily: Fonts.Poppins_Medium,
  },
  nuteialtext: {
    fontSize: 15,
    paddingBottom: 4,
    fontWeight: '400',
    fontFamily: Fonts.Poppins_Medium,
    borderBottomColor: ColorTheme.BGGreyColor,
    borderBottomWidth: 1,
    marginBottom: 7,
  },
  flextextset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  proteintextset: {
    color: '#0F0C0C',
    fontSize: 9,
    fontWeight: '400',
    fontFamily: Fonts.Roboto_Regular,
  },
  setdigitaltextview: {
    color: 'black',
    fontSize: 10,
    fontWeight: '700',
    fontFamily: Fonts.Poppins_Medium,
  },
  flexclockandtext: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexclockandtextwo: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    left: 10,
  },
  thretexztflexview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#EAEAEA',
    paddingTop: -18,
    paddingBottom: 6,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 20,
    marginTop: 15,
  },
  thretexztflexviewtwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    // borderWidth:1,
    // borderColor:'gray',

  },
  setclockicon: {
    position: 'relative',
    top: 3,
    left: -4,
  },
  borderbottomview: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: ColorTheme.TextGreyColor
  },
  textcolorgray: {
    color: ColorTheme.Text9E9E9E,
    fontSize: 10,
    fontWeight: '400',
    fontFamily: Fonts.Roboto_Regular,
  },
  textcolorgraytwo: {
    color: '#000000',
    opacity: 0.7,
    fontSize: 10,
    fontWeight: '400',
    fontFamily: Fonts.Roboto_Regular,
  },
  setboxshadowimage: {
    backgroundColor: ColorTheme.BGWhiteColor,
    paddingLeft: 5,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 14,
    borderRadius: 20,
    marginBottom: 30,
    marginTop: 15,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingRight: 5,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  smalltextsetingredients: {
  },
  boximage: {
    width: 60,
    height: 40,
    borderRadius: 16,
    marginRight: 20,
  },
  setflex: {
    paddingLeft: 10,
  },
  setwidthbox: {
    width: '90%',
    marginHorizontal: '5%'
  },
  smalltextsetingredients: {
    color: ColorTheme.Text797979,
    fontSize: 17,
    paddingBottom: 9,
    paddingLeft: 10,
  },
  setbgcolorview: {
    backgroundColor: ColorTheme.BGF1F1F1,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    width: '73%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  widthsetbgcolor: {
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',
    paddingTop: 40,
    justifyContent: 'space-between'
  },
  selectuser: {
    color: ColorTheme.Color5E5959,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: Fonts.Roboto_Regular,
    marginRight: 20,
  },
  useronetext: {
    color: ColorTheme.TextGreyColor,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: Fonts.Roboto_Regular,
    marginRight: 20,
  },
  flexiconviewset: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  edittext: {
    color: ColorTheme.Color757575,
    fontSize: 15,
    fontWeight: '400',
    fontFamily: Fonts.Roboto_Regular,
    marginRight: 5,
  },
  setminviewwidth: {
    width: '90%',
    marginHorizontal: '5%',
    height: 'auto'
  },
  additionstextstyle: {
    color: ColorTheme.Color5E5959,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
  },
  additionstextstyletwo: {
    color: ColorTheme.Color5E5959,
    fontSize: 17,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
    paddingLeft: 20,
  },
  textwidthiconflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 1,
    borderRadius: 100,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 6,
    paddingBottom: 6,
    borderColor: '#FF785B'
  },
  jalapenotextset: {
    color: ColorTheme.Color5E5959,
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
  },
  setbgcolorviewtwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    

  },
  setselectmedicineview: {
    height: 40,
    borderRadius: 13,
    marginHorizontal: '1%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settextstylecolor: {
    color: 'white',
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 21,
    fontWeight: '700',
  },
  plusandminusflexview: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'white',
    borderRadius: 100,
    width: 130,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
  },
  pricetextsetview: {
    color: ColorTheme.TextWhiteColor,
    fontSize: 19,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
  },
  pricetextsetviewtwo: {
    color: ColorTheme.TextWhiteColor,
    fontSize: 19,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
    position: 'relative',
    top: 4,
  },
  setbgcolorwhite: {
    backgroundColor: ColorTheme.BGWhiteColor,
    width: 40,
    height: 40,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  positionabsoluteicon: {
    position: 'absolute',
    top: 7,
    left: -10,
    width: 90,
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorTheme.BGGreyColor,
    opacity: 0.9,
    position: 'relative'
  },
  modalView: {
    backgroundColor: ColorTheme.ColorF6F6F6,
    borderRadius: 20,
    width: '90%',
    height: '70%',
    paddingLeft: 5,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  modalViewtwo: {
    backgroundColor: ColorTheme.ColorF6F6F6,
    borderRadius: 20,
    width: '90%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    flexDirection: 'row'
  },
  buttonOpen: {
    backgroundColor: ColorTheme.BtnOpenBGColor,
  },
  buttonClose: {
    backgroundColor: ColorTheme.BtnCloseBGColor,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalbgwhiteshadow: {
    backgroundColor: ColorTheme.BGWhiteColor,
    color: 'black',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 12,
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  flexrowsettextbgcolor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 27,
    paddingHorizontal: '7%',
    height: 69,
    marginBottom: 19,
    alignItems: 'center',
  },
  setdropdownstyle: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    backgroundColor: ColorTheme.BGWhiteColor,
  },
  dropdown1BtnTxtStyle: {
    color: ColorTheme.Color5E5959,
    fontSize: 17,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'left',
  },
  dropdown1DropdownStyle: { backgroundColor: 'white' },
  dropdown1RowStyle: { backgroundColor: ColorTheme.DropdownRowColor, borderBottomColor: '#C5C5C5' },
  dropdown1RowTxtStyle: {
    color: ColorTheme.DroptextColor,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'left',
  },
  simplestatetext: {
    color: 'black',
    fontWeight: '600',
    opacity: 0.7,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 18,
    borderBottomWidth: 1.5,
    // borderStyle: 'dashed',
    paddingTop: 10,
    paddingBottom: 10,
  },
  wishicon : {
    backgroundColor: 'red'
  }

});
