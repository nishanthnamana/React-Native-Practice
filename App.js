import React, {Component} from 'react';
import { Alert, AppRegistry, Button, Image, StyleSheet, View, Text, TextInput } from 'react-native';

AppRegistry.registerComponent('React-Native-Practice', () => BlinkText);

const styles = StyleSheet.create({
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    individualGreetings: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'grey',
        flexDirection: 'column',
        height: 670,
    },
    blink: {
        fontSize: 90,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center'
    },
    blinkText: {
        justifyContent: 'center',
        height: 670,
        backgroundColor: 'black'
    },
    flex: {
        alignItems: 'center',
        zIndex: -1,
        //incomplete
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


//**Button Pressing
class button extends Component {

    _ontouch() {
        Alert.alert('You touched me😭!!!')
    }

    render() {
        return (
            <View style={styles.button}>
                <Button
                    onPress={this._ontouch}
                    title='Dont Touch 😡'
                />

            </View>
        );
    }
}


//**** Translation
class translation extends Component {

    constructor(props){
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 60}}>
                <TextInput
                    style={{fontSize: 30}}
                    placeholder="Please type"
                    onChangeText={(text) => this.setState({text})}
                />

                <Text>{this.state.text.split(' ').map((word) => word && '😜').join('')}</Text>

            </View>
        );
    }
}

//**** flex (flag)
class flex extends Component {
    render() {
        return(
            <View style={{flex:1}}>
                <View style={{flex:1, backgroundColor: 'orange'}}/>
                <View style={{flex:1, backgroundColor: 'white'}}>
                    <View style={styles.flex}>
                        <Mypicture link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsmTIGvYThtd33KXnLvPb-ekTVPfs4cUeOQ7SxSdl6T4Pknou5"/>
                    </View>
                </View>
                <View style={{flex:1, backgroundColor: 'green'}}/>
            </View>
        );

    }
}

//**** BlinkingText
class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(()=>{
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                };
            })
        },1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : "SHARP";
        return (
            <Text style={styles.blink}>{display}</Text>
        );

    }
}

export default  class BlinkText extends Component {
    render() {
        return (
            <View style={styles.blinkText}>
                <Blink text="RAZOR"/>
            </View>
        );
    }
}

//**** GREETINGS
class Greeting extends Component {
    render() {
        return (
            <Text style={styles.greeting}>Hello {this.props.name}!</Text>
        );
    }
}

class IndividualGreetings extends Component {
    render() {
        return (
            <View style={styles.individualGreetings}>
                <View>
                    <Mypicture link="https://pbs.twimg.com/profile_images/513295996994854912/bktS4J12.jpeg"/>
                </View>
                <View>
                    <Greeting name='Nishanth Namana'/>
                </View>
            </View>
        );
    }
}

// ****IMAGE
export class Mypicture extends Component {
    render() {
        let picLink = this.props.link;
        let pic = {
            uri: picLink
        };
        return (
            <View>
                <Image source={pic} style={{width: 250, height: 300}}/>
            </View>
        );
    }
}


