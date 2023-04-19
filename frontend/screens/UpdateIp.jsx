import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { updateIp, loadUser } from "../redux/action";
const UpdateIp = ({ route, navigation }) => {
	const { user } = useSelector((state) => state.auth);
	const [ip, setIp] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		setIp(user.ip_address);
	}, [user]);

	const updateIpHandler = async () => {
		await dispatch(updateIp(ip));
		dispatch(loadUser());
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "#fff",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text style={{ fontSize: 30 }}>IP address</Text>
			<TextInput
				style={Styles.input}
				placeholder="IP address"
				value={ip}
				onChangeText={setIp}
			/>

			<View style={{ flexDirection: "column", alignItems: "center" }}>
				<Button disabled={!ip} style={Styles.btn} onPress={updateIpHandler}>
					<Text style={{ color: "#fff" }}>Update</Text>
				</Button>
				<TouchableOpacity
					style={{ marginVertical: 20 }}
					onPress={() => {
						navigation.navigate("home");
					}}
				>
					<Text>CANCEL</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default UpdateIp;

const Styles = StyleSheet.create({
	input: {
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#b5b5b5",
		padding: 10,
		paddingLeft: 15,
		borderRadius: 5,
		width: "50%",
		marginVertical: 20,
		fontSize: 15,
		textAlign: "center",
	},
	btn: {
		backgroundColor: "#900",
		padding: 5,
		width: "100%",
	},
});
