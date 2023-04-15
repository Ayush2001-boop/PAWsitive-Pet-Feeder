import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	Dimensions,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { Checkbox } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import { removePet, updatePet, loadUser } from "../redux/action";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const Pet = ({ petId }) => {
	const naviation = useNavigation();
	const { user } = useSelector((state) => state.auth);

	const pet = user.pets.find((pet) => pet._id === petId);

	const [name, setName] = useState("");
	const [hour, setHour] = useState("");
	const [minute, setMinute] = useState("");
	const [cup, setCup] = useState("");
	const [string, setString] = useState("");
	const color = pet.color === "red" ? "#900" : pet.color;

	const dispatch = useDispatch();
	const [openDialog, setOpenDialog] = useState(false);

	const hideDialog = () => {
		setOpenDialog(!openDialog);
	};

	useEffect(() => {
		setName(pet.name);
		const message = convertTime(pet.dispenseHour, pet.dispenseMinute);
		setString(message);
		setCup(pet.dispenseCup);
	}, [pet]);

	const convertTime = (hour, minute) => {
		let hourInt = parseInt(hour);

		let amPm = "";
		if (hourInt === 0) {
			hourInt = 12;
			amPm = "AM";
		} else if (hourInt >= 12) {
			if (hourInt > 12) {
				hourInt -= 12;
			}
			amPm = "PM";
		} else if (hourInt > 0 && hourInt < 12) {
			amPm = "AM";
		}
		const hourString = hourInt < 10 ? `0${hourInt}` : `${hourInt}`;
		const minuteString = minute < 10 ? `0${minute}` : `${minute}`;
		return `${hourString}:${minuteString} ${amPm}`;
	};

	const updatePetHandler = () => {
		naviation.navigate("updatepet", { petId: petId });
	};

	const deleteHandler = async () => {
		await dispatch(removePet(petId));
		dispatch(loadUser());
	};

	return (
		<View style={[styles.row, { backgroundColor: color }]}>
			{pet.exists === true ? (
				<>
					<View style={{ width: "70%" }}>
						<Text
							style={{
								fontSize: 35,
								marginVertical: 0,
								color: "#fff",
								fontWeight: "bold",
							}}
						>
							{name}
						</Text>
						<Text style={{ fontSize: 18, marginVertical: 1, color: "#fff" }}>
							{cup} cups dispensing at {string}
						</Text>
					</View>

					<Icon
						name="edit"
						color="#fff"
						size={20}
						style={{
							backgroundColor: color,
							padding: 10,
							borderRadius: 100,
						}}
						onPress={updatePetHandler}
					/>
					<Icon
						name="delete"
						color="#fff"
						size={20}
						style={{
							backgroundColor: color,
							padding: 10,
							borderRadius: 100,
						}}
						onPress={deleteHandler}
					/>
				</>
			) : (
				<>
					<Text style={{ fontSize: 35, color: "#fff" }}>{pet.name}</Text>

					<Icon
						name="pluscircle"
						color="#fff"
						size={20}
						style={{
							backgroundColor: color,
							padding: 10,
							borderRadius: 100,
						}}
						onPress={updatePetHandler}
					/>
				</>
			)}
		</View>
	);
};

export default Pet;

const styles = StyleSheet.create({
	row: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "#f0f0f0",
		marginBottom: 8,
		padding: 16,
		borderRadius: 8,
	},
	/* dialogBox: {
		flex: 1,
		backgroundColor: "white",
		height: height / 2,
		width: width,
		alignSelf: "flex-center",
	}, */
});
