import React, { Component } from 'react';
import { AppRegistry, StyleSheet, WebView } from 'react-native';

import AdvancedWebView from 'react-native-advanced-webview';

// const initialJavaScript = `
// document.body.style.background = 'red';
// var span = document.createElement('span');
// span.innerHTML = 'aaaa';
// document.body.appendChild(span)
// `;
// const injectedJavaScript = `
// document.write(document.cookie);

// `;

export default class webview extends Component {
    render() {
        // setTimeout(() => {
        //     this.refs.webview.injectJavaScript(initialJavaScript);
        // }, 1000);

        // setTimeout(() => {
        //     this.refs.webview.postMessage("ADADASDASDA");
        // }, 2000);

        return (
            <AdvancedWebView
                style={styles.webview}
                ref="webview"
                source={{uri: 'http://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018'}}
                // onMessage={(e) => console.log('message', e.nativeEvent.data)}
            />
        );
    }
}

const styles = StyleSheet.create({
    webview: {
        flex: 1
    }
});

AppRegistry.registerComponent('webview', () => webview);
