import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../Theme/Color";
import Task from "../components/Task";
import Header from "../components/Header";

const HomeScreen = () => {
    const a = [1, 1, 1, 1, 1, 1, , 1];
    return (
        <View style={{ flex: 1, backgroundColor: Color.background }}>
            <StatusBar
                backgroundColor={Color.header}
                barStyle={"light-content"}
                showHideTransition={"fade"}
            />
            <Header />
            <ScrollView>
                {a.map((val, i) => (
                    <Task key={i} />
                ))}
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
