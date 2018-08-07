import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {
    renderSlides = () => {
        return this.props.data.map((slide, i) => {
            return (
                <View 
                    style={[styles.slideContainer, {backgroundColor: slide.color}]} 
                    key={slide.text}
                    >
                    <Text style={styles.slideText}>{slide.text}</Text>
                    {this.renderLastSlide(i)}
                </View>
            );
        }) 
    }
    renderLastSlide = index => {
        if(index === this.props.data.length - 1) {
            return (
                <Button 
                    buttonStyle={styles.buttonStyle}
                    style={{paddingTop: 15}}
                    title={"I'm ready!"}
                    onPress={this.props.onComplete}
                    raised
                />
            );
        }
    }
    render() {
        return (
            <ScrollView
                style={{flex: 1}}
                horizontal
                pagingEnabled
            >
                {this.renderSlides()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    slideText: {
        fontSize: 30,
        paddingHorizontal: 30,
        color: 'white'
    },
    buttonStyle: {
        paddingTop: 15,
        backgroundColor: '#0288D1',
    }
    
});