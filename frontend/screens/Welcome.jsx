import {
	Image,
	View,
	Text,
	StyleSheet,
	TextInput,
	ImageBackground,
	Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import axios from "axios";
import { dispenseFood } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Welcome = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Welcome to</Text>
			<Text style={styles.text}>PAWsitive Feeder</Text>
			<Button style={styles.btn} onPress={() => navigation.navigate("login")}>
				<Text style={{ color: "#fff" }}>Login</Text>
			</Button>
			<Button
				style={styles.btn}
				onPress={() => navigation.navigate("register")}
			>
				<Text style={{ color: "#fff" }}>Register</Text>
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "black",
		fontSize: 42,
		lineHeight: 84,
		fontWeight: "bold",
		textAlign: "center",
	},
	btn: {
		backgroundColor: "#900",
		padding: 5,
		width: "80%",
		margin: 5,
	},
});
export default Welcome;
