import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, Strings, widthPercent,colors } from '../../utils';

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
    paddingBottom:160,
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  setbgcolorviewmin: {
    backgroundColor: ColorTheme.LighColorFour,
    padding: 20,
    borderRadius: 20,
  },
  bgwhiteview: {
    backgroundColor: ColorTheme.BGWhiteColor,
    borderRadius: 20,
    padding: 20,
  },
  pizaiconstyle: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  fexrowseticonview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  twoiconflexset: {
    flexDirection: 'row'
  },
  iconstyleset: {
    marginLeft: 20,
  },
  bgcolorinstart: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serticonse: {
    position: 'relative',
    left: 0.2,
    top: -1,
  },
  setbgcolorviewflexview: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  starttextsyuyle: {
    fontSize: 14,
    color: ColorTheme.Color0A191E,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  settextpizastyle: {
    fontSize: 14,
    color: 'gray',
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: 10,
  },
  flexrowsetpaddle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingLeft:20,
  },
  settextoutlettext: {
    fontSize: 14,
    color: '#0A191E',
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    marginRight: 20,
  },
  viranichockflexview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viranichocktextset: {
    fontSize: 14,
    color: ColorTheme.TextGreyColor,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
    marginRight: 10,
  },
  shortdowniconstyle: {
    position: 'relative',
    top: -3,
  },
  flexrowsetonetext: {
    flexDirection: 'row',
    paddingTop: 15,
    alignItems: 'center',
    borderTopColor: ColorTheme.LighGrey,
    borderTopWidth: 1,
    marginTop: 20,
  },
  onetextsetbgcoloe: {
    fontSize: 16,
    color: colors.theme_backgound,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    marginRight: 10,
  },
  extratextset: {
    fontSize: 11,
    color: colors.theme_backgound,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
    marginRight: 10,
    width: '89%',
    marginTop: 3,
  },
  menuflexcenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  setmenutext: {
    fontSize: 16,
    color: colors.theme_backgound,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    paddingBottom: 20,
  },
  imagsetstylehati: {
    width: 130,
    height: 120,
    borderRadius: 7,
  },
  imagsetstyleslider: {
    width: 30,
    height: 30,
    borderRadius: 7,
  },
  flexrowsetterxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    paddingTop: 20,
  },
  boldtextstyle: {
    fontSize: 15,
    color: colors.theme_backgound,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  setgreentext: {
    fontSize: 14,
    color: ColorTheme.TextGreyColor,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  flexrowdotwithtext: {
    flexDirection: 'row',
  },
  setdottextround: {
    backgroundColor: ColorTheme.Color4FA987,
    fontWeight: '700',
    width: 10,
    height: 10,
    borderRadius: 100,
  },
  setborderround: {
    borderWidth: 1,
    width: 22,
    height: 23,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: ColorTheme.Color4FA987,
    marginRight: 10,
    marginBottom: 7,
  },
  pricetextsetruppiss: {
    fontSize: 17,
    color: colors.theme_backgound,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: 5,
  },
  setmarginright: {
    marginLeft: 2,
    color: ColorTheme.colorHSL,
    fontFamily: Fonts.Metropolis_Medium,
  },
  setratingminview: {
    flexDirection: 'row',
    paddingTop:6,
  },
  setminview: {
    borderBottomColor: ColorTheme.LighGrey,
    // borderStyle:'dashed',
    borderBottomWidth: 1,
  },
  addtextstyleset: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    paddingLeft:5,
    paddingRight:5,
    backgroundColor: 'white',
    height: 30,
    alignItems: 'center',
    position:'absolute',
    bottom:-12,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
    borderRadius:7,
  },
  addtextstylesettwo: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'center',
    paddingLeft:5,
    paddingRight:5,
    backgroundColor: 'white',
    height: 30,
    alignItems: 'center',
    position:'absolute',
    bottom:-12,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
    borderRadius:7,
  },
  centerviewadd: {
    flexDirection:'row',
    justifyContent:'center'
  },
  simpletextaddstylset: {
    fontSize: 16,
    color: colors.theme_backgound,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
  },
  customissaletext: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '500',
    fontFamily: Fonts.Metropolis_Medium,
    textAlign:'center',
    paddingTop:15,
  },
  setbuttontextstyle: {
    backgroundColor:'white',
    fontSize: 14.5,
    color: colors.theme_backgound,
    fontWeight: '500',
    fontFamily: Fonts.Metropolis_Medium,
    textAlign:'center',
  },
  setbuttontextstyletwo: {
    backgroundColor:'white',
    fontSize: 14.5,
    color:colors.theme_backgound,
    fontWeight: '500',
    fontFamily: Fonts.Metropolis_Medium,
    textAlign:'center',
  },
  setwidthbutton: {
    width:'35%',
    marginRight:20,
    borderWidth:1,
    height:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
  },
  setbuttontext: {
    color: ColorTheme.Color4FA987,
    fontSize:14,
    paddingTop:3,
  },
  setbuttontexttwo: {
    color:'gray',
    fontSize:14,
    paddingTop:3,
  },
  flexbuttonsettwostyle: {
    flexDirection:'row',
    justifyContent:'center',
    marginLeft:15,
    paddingBottom:10,
  },
  bordersetround: {
    width:'50%'
  },
  orijnalytextstle: {
    paddingTop:10,
    fontSize: 12,
    color: ColorTheme.TextGreyColor,
    fontWeight: '500',
    fontFamily: Fonts.Metropolis_Medium,
  },
  plusandminusflexview: {
    flexDirection:'row',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'space-between',
    borderColor:'white',
    borderRadius:100,
    width:130,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:5,
  },
  pricetextsetview: {
    color: ColorTheme.Color4FA987,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
  },
  carousalContainer: {
    flexDirection: "row",
    width: "100%",
  },
  title: {
    fontSize: 28,
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: Fonts.Poppins_Medium,
  },
  subtitle: {
    color: ColorTheme.TextGreyColor,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
  },
  
  imagsetstyle: {
    width: 30,
    height: 30,
    borderRadius: 7,
  },
  setviewsliderflex: {
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:15,
    paddingTop:20,
    paddingBottom:20,
  },
  titleContainer: {
    marginLeft:20,
  },
  seemoretextstyle: {
    fontWeight: '700',
    color: colors.theme_backgound,
    lineHeight: 30,
    fontFamily: Fonts.Roboto_Regular,
    fontSize: 15,
    position: 'relative',
    top: 5
  },
  seemlesstextsyle: {
    fontWeight: '700',
    color: colors.theme_backgound,
    fontFamily: Fonts.Roboto_Regular,
    fontSize: 15,
  },
  setbgcolorbottom: {
    paddingBottom:10,
    paddingTop:10,
    backgroundColor:colors.theme_backgound,
    width:'100%',
    borderRadius:7,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 8,
  },
  marginbottomspaceset: {
    marginBottom:30,
  },
  settextstyle: {
    color:'white',
    fontFamily:Fonts.Metropolis_Medium,
    fontSize:14,
  },
  viewchartstyleset: {
    color:'white',
    fontFamily:Fonts.Metropolis_Medium,
    fontSize:16,
    fontWeight:'700',
  },
  positionsetabsolute: {
    position:'absolute',
    bottom:0,
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
  },
  setbottomviewwidth: {
    width:'95%',
  },
  setborderonesetdot: {
    backgroundColor: ColorTheme.BGGreyColor,
    width:7,
    height:7,
    borderRadius:100,
  },
  setborderline: {
    backgroundColor: ColorTheme.LighGrey,
    width:2,
    height:30,
    marginLeft:2,
  },
  postionsetabsolute: {
    position:'absolute',
   top:20,
   left:0,
  },
  setdotbgcolorview: {
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: 16,
    marginRight: 16,
    borderColor: 'lightgray',
    marginTop: 25,
  },
  minviewswtdotstyle: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    right: 20, top: 60,
  }

});
