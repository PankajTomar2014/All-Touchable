
import React,{Component} from 'react';
import {
        View,
        Text,
        TouchableNativeFeedback,
        TouchableHighlight,
        TouchableWithoutFeedback,
        TouchableOpacity,
        TouchableBounce ,
        // TouchableHighlightBase,
        // TouchableOpacityBase,
        // TouchableWithoutFeedbackProperties,
        // TouchableWithoutFeedbackPropsAndroid,
        // TouchableWithoutFeedbackPropsIOS,
        // TouchableOpacityComponent,
        // TouchableHighlightProps,
        // TouchableWithoutFeedbackComponent, 
      } from 'react-native'

// import Navigation from './src/utils/Navigation'


class App extends Component {
  _onPress = () =>{
    alert("onPress clicked")
  }
  render(){
    return(  
      <View style={{flex:1,alignItems:"center",}}>        
          <TouchableHighlight //button UI bling when touch
            onPress={()=>this._onPress}
            underlayColor="red"
            // onShowUnderlay={()=>{alert("onShowUnderlay")}}
            >
            <View style={{
               margin:20,
                alignItems:"center",
                height:50,
                width:200,
                backgroundColor:"#10101010",
                justifyContent:"center"
              }}>
            <Text style={{fontSize:20}}>TouchableHighlight </Text>
            </View>
          </TouchableHighlight>    
              
          
            <TouchableNativeFeedback  //button UI फैलना when touch
             onPress={()=>this._onPress}
             useForeground={true}
            >
                <View 
                style={{
                  margin:20,
                  alignItems:"center",
                  height:50,
                  width:300,
                  backgroundColor:"blue",
                  justifyContent:"center"
                }}>
                      <Text style={{textAlign:"center",fontSize:20,color:"#fff"}}>TouchableNativeFeedback(Only Android) </Text>
                      </View>
            </TouchableNativeFeedback>

            <TouchableWithoutFeedback  //button UI not changed when touch
                onPress={()=>this._onPress}
                onLongPress={()=>alert("onLongPress")}
                onPressIn={()=>alert("onPressIn")}
                onPressOut={()=>alert("onPressOut")}
                >   
                <View 
                    style={{
                      margin:20,
                      alignItems:"center",
                      height:50,
                      width:260,
                      backgroundColor:"purple",
                      justifyContent:"center"
                    }}>
                          <Text style={{fontSize:20,color:"#fff"}}>TouchableWithoutFeedback </Text>
                          </View>
            </TouchableWithoutFeedback>

            <TouchableOpacity
              style={{
                top:20,
                alignItems:"center",
                height:50,
                width:260,
                backgroundColor:"#808080",
                justifyContent:"center"
              }}
              onPress={()=>this._onPress}
              >
            <Text style={{fontSize:20,color:"#fff"}}>TouchableOpacity</Text>
          </TouchableOpacity>
         
      </View> 
       )
  }
  
}
export default App;