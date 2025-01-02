import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Color } from "../Theme/Color";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require("../../assets/images/todo_.png")}
                    style={{ height: 30, width: 30, margin: 5 }}
                />
                <Text style={styles.text}>ToDo App</Text>
            </View>
            <TouchableOpacity>
                <FontAwesome
                    name="plus"
                    size={20}
                    color={Color.text}
                    style={{ marginRight: 20 }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Color.header,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: { color: Color.text, fontFamily: "Satoshi-Bold", fontSize: 22, width: "60%" },
});
