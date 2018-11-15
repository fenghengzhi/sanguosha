import * as React from 'react';
import {WebView, View, StyleSheet, Slider, Dimensions, StatusBar} from 'react-native';
import {autobind} from "core-decorators";


// const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36';
export default class App extends React.Component {
    state = {scale: 1};

    @autobind
    scaleChange(scale: number) {
        this.setState({scale})
    }

    render() {
        // return (
        //     <View style={styles.webView}><Text>test</Text></View>
        // );
        // return (
        //     <View style={styles.view1}>
        //         <View style={styles.view2}>
        //             <WebView userAgent={userAgent} style={styles.webView} scalesPageToFit={false}
        //                      source={{uri: 'https://www.baidu.com/'}}/>
        //         </View>
        //     </View>
        // );
        // return (
        //     <View style={styles.view1}>
        //         <View style={styles.view2}>
        //             <WebView userAgent={userAgent} style={styles.webView} scalesPageToFit={false}
        //                           source={{uri: 'https://web.sanguosha.com/'}}/>
        //         </View>
        //     </View>
        // );
        // return (
        //     <View style={styles.view1}>
        //         <View style={styles.view2}>
        //             <WebView userAgent={userAgent} style={styles.webView} scalesPageToFit={false}
        //                      source={{uri: 'https://www.sanguosha.com/'}}/>
        //         </View>
        //     </View>
        // );
        // return (
        //     <View style={styles.view}>
        //         <WebView userAgent={userAgent} style={[styles.webView, {transform: [{scale: this.state.scale}]}]}
        //                  scalesPageToFit={false}
        //                  source={{uri: 'https://www.baidu.com/'}}/>
        //         <View style={styles.sliderContainer}>
        //             <Slider step={0.01} maximumValue={1.5} minimumValue={1} onValueChange={this.scaleChange}
        //                     style={styles.slider}/>
        //         </View>
        //     </View>
        // );
        // return (
        //     <View style={styles.view}>
        //         <StatusBar hidden={true} />
        //         <WebView userAgent={userAgent} style={[styles.webView, {transform: [{scale: this.state.scale}]}]}
        //                  scalesPageToFit={false}
        //                  source={{uri: 'https://web.sanguosha.com/newsgs/pc/inde.php'}}/>
        //         <View style={styles.sliderContainer}>
        //             <Slider step={0.01} maximumValue={1.5} minimumValue={1} onValueChange={this.scaleChange}
        //                     style={styles.slider}/>
        //         </View>
        //     </View>
        // );
        return (
            <View style={styles.view}>
                <StatusBar hidden={true}/>
                <WebView
                    // userAgent={userAgent}
                    style={[styles.webView, {transform: [{scale: this.state.scale}]}]}
                    scalesPageToFit={false}
                    source={{uri: 'http://web.sanguosha.com/'}}/>
                <View style={styles.sliderContainer}>
                    <Slider step={0.001} maximumValue={2} minimumValue={0.5} value={this.state.scale}
                            onValueChange={this.scaleChange}
                            style={styles.slider}/>
                </View>
            </View>
        );

    }
}
const {height: windowHeight} = Dimensions.get('window');
const sliderSize = windowHeight;
const styles = StyleSheet.create({
    view: {
        flex: 0,
        width: `100%`,
        height: '100%',

    },
    sliderContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0)',
        width: sliderSize,
        height: 30,
        left: -sliderSize / 2 + 15,
        top: sliderSize / 2 - 15,
        transform: [{rotate: '-90deg'}],
        overflow: 'visible',
        opacity: 0.5
    },
    slider: {
        width: sliderSize,
        height: 30,
    },
    webView: {
        flex: 0,
        width: `100%`,
        height: '100%',
    }
});