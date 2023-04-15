import {
	View,
	Text,
	Stylesheet,
	TextInput,
	TouchableOpacity,
	Dimensions,
	ScrollView,
	StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Button } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { useDispatch, useSelector } from "react-redux";
import { updatePet, loadUser } from "../redux/action";
import SelectDropdown from "react-native-select-dropdown";
const { width } = Dimensions.get("window");

const UpdatePet = ({ navigation, route }) => {
	const { petId } = route.params;
	const { user } = useSelector((state) => state.auth);

	const pet = user.pets.find((pet) => pet._id === petId);

	const [name, setName] = useState("");
	const [hour, setHour] = useState("");
	const [minute, setMinute] = useState("");
	const [amPm, setAmPm] = useState("");
	const [cup, setCup] = useState("");

	const hourData = [];
	for (let i = 1; i <= 12; i++) {
		hourData.push(i);
	}
	const minuteData = [];
	for (let i = 0; i <= 59; i++) {
		minuteData.push(i);
	}
	const amPmData = ["AM", "PM"];
	const cupData = [];
	for (let i = 1; i <= 5; i++) {
		cupData.push(i);
	}
	const dispatch = useDispatch();
	useEffect(() => {
		setName(pet.name);
		if (pet.dispenseHour >= 12) {
			setHour((pet.dispenseHour - 12).toString());
		} else {
			setHour(pet.dispenseHour.toString());
		}
		if (pet.dispenseHour >= 12) {
			setAmPm("PM");
		} else if (pet.dispenseHour >= 0) {
			setAmPm("AM");
		}
		setMinute(pet.dispenseMinute.toString());
		setCup(pet.dispenseCup.toString());
	}, [pet]);

	const convertTime = (hour, ampm) => {
		let hourInt = parseInt(hour);
		if (ampm === "AM" && hourInt === 12) {
			hourInt -= 12;
		} else if (ampm === "PM" && hourInt < 12) {
			hourInt += 12;
		}
		return hourInt;
	};

	const updatePetHandler = async () => {
		const updatedHour = convertTime(hour, amPm);
		const myForm = {
			petId: petId,
			name: name,
			hour: updatedHour.toString(),
			minute: minute,
			cup: cup,
		};

		await dispatch(updatePet(myForm));

		dispatch(loadUser());
	};
	return (
		<View
			style={{
				flex: 1,
				flexDirection: "column",
				backgroundColor: "#fff",
				alignItems: "center",
				justifyContent: "center",
				marginTop: 50,
			}}
		>
			<ScrollView
				showsVerticalScrollIndicator={false}
				alwaysBounceVertical={false}
				contentContainerStyle={Styles.scrollViewContainer}
			>
				<Text>Name</Text>
				<TextInput
					style={Styles.input}
					placeholder="Name"
					value={name}
					onChangeText={setName}
				/>

				<Text>Hour</Text>
				<SelectDropdown
					data={hourData}
					// defaultValueByIndex={1}
					// defaultValue={'England'}
					onSelect={(selectedItem, index) => {
						setHour(selectedItem.toString());
					}}
					defaultButtonText={hour != 0 ? hour : "Select Hour"}
					buttonTextAfterSelection={(selectedItem, index) => {
						return selectedItem;
					}}
					rowTextForSelection={(item, index) => {
						return item;
					}}
					buttonStyle={Styles.dropdown2BtnStyle}
					buttonTextStyle={Styles.dropdown2BtnTxtStyle}
					renderDropdownIcon={(isOpened) => {
						return (
							<FontAwesome
								name={isOpened ? "chevron-up" : "chevron-down"}
								color={"#FFF"}
								size={18}
							/>
						);
					}}
					dropdownIconPosition={"right"}
					dropdownStyle={Styles.dropdown2DropdownStyle}
					rowStyle={Styles.dropdown2RowStyle}
					rowTextStyle={Styles.dropdown2RowTxtStyle}
					selectedRowStyle={Styles.dropdown2SelectedRowStyle}
					search
					searchInputStyle={Styles.dropdown2searchInputStylestyle}
					searchPlaceHolder={"Search here"}
					searchPlaceHolderColor={"#F8F8F8"}
					renderSearchInputLeftIcon={() => {
						return <FontAwesome name={"search"} color={"#FFF"} size={18} />;
					}}
				/>
				{/* </ScrollView> */}
				<Text>Minute</Text>
				{/* <ScrollView
				showsVerticalScrollIndicator={false}
				alwaysBounceVertical={false}
				contentContainerStyle={Styles.scrollViewContainer}
			> */}
				<SelectDropdown
					data={minuteData}
					// defaultValueByIndex={1}
					// defaultValue={'England'}
					onSelect={(selectedItem, index) => {
						setMinute(selectedItem.toString());
					}}
					defaultButtonText={minute || "Select Minute"}
					buttonTextAfterSelection={(selectedItem, index) => {
						return selectedItem;
					}}
					rowTextForSelection={(item, index) => {
						return item;
					}}
					buttonStyle={Styles.dropdown2BtnStyle}
					buttonTextStyle={Styles.dropdown2BtnTxtStyle}
					renderDropdownIcon={(isOpened) => {
						return (
							<FontAwesome
								name={isOpened ? "chevron-up" : "chevron-down"}
								color={"#FFF"}
								size={18}
							/>
						);
					}}
					dropdownIconPosition={"right"}
					dropdownStyle={Styles.dropdown2DropdownStyle}
					rowStyle={Styles.dropdown2RowStyle}
					rowTextStyle={Styles.dropdown2RowTxtStyle}
					selectedRowStyle={Styles.dropdown2SelectedRowStyle}
					search
					searchInputStyle={Styles.dropdown2searchInputStylestyle}
					searchPlaceHolder={"Search here"}
					searchPlaceHolderColor={"#F8F8F8"}
					renderSearchInputLeftIcon={() => {
						return <FontAwesome name={"search"} color={"#FFF"} size={18} />;
					}}
				/>
				{/* </ScrollView> */}
				<Text>AM/PM</Text>
				{/* <ScrollView
				showsVerticalScrollIndicator={false}
				alwaysBounceVertical={false}
				contentContainerStyle={Styles.scrollViewContainer}
			> */}
				<SelectDropdown
					data={amPmData}
					// defaultValueByIndex={1}
					// defaultValue={'England'}
					onSelect={(selectedItem, index) => {
						setAmPm(selectedItem);
					}}
					defaultButtonText={amPm || "Select AM/PM"}
					buttonTextAfterSelection={(selectedItem, index) => {
						return selectedItem;
					}}
					rowTextForSelection={(item, index) => {
						return item;
					}}
					buttonStyle={Styles.dropdown2BtnStyle}
					buttonTextStyle={Styles.dropdown2BtnTxtStyle}
					renderDropdownIcon={(isOpened) => {
						return (
							<FontAwesome
								name={isOpened ? "chevron-up" : "chevron-down"}
								color={"#FFF"}
								size={18}
							/>
						);
					}}
					dropdownIconPosition={"right"}
					dropdownStyle={Styles.dropdown2DropdownStyle}
					rowStyle={Styles.dropdown2RowStyle}
					rowTextStyle={Styles.dropdown2RowTxtStyle}
					selectedRowStyle={Styles.dropdown2SelectedRowStyle}
					search
					searchInputStyle={Styles.dropdown2searchInputStylestyle}
					searchPlaceHolder={"Search here"}
					searchPlaceHolderColor={"#F8F8F8"}
					renderSearchInputLeftIcon={() => {
						return <FontAwesome name={"search"} color={"#FFF"} size={18} />;
					}}
				/>
				{/* </ScrollView> */}
				<Text>Cup</Text>
				{/* <ScrollView
				showsVerticalScrollIndicator={false}
				alwaysBounceVertical={false}
				contentContainerStyle={Styles.scrollViewContainer}
			> */}
				<SelectDropdown
					data={cupData}
					// defaultValueByIndex={1}
					// defaultValue={'England'}
					onSelect={(selectedItem, index) => {
						setCup(selectedItem);
					}}
					defaultButtonText={cup != 0 ? cup : "Select Cups"}
					buttonTextAfterSelection={(selectedItem, index) => {
						return selectedItem;
					}}
					rowTextForSelection={(item, index) => {
						return item;
					}}
					buttonStyle={Styles.dropdown2BtnStyle}
					buttonTextStyle={Styles.dropdown2BtnTxtStyle}
					renderDropdownIcon={(isOpened) => {
						return (
							<FontAwesome
								name={isOpened ? "chevron-up" : "chevron-down"}
								color={"#FFF"}
								size={18}
							/>
						);
					}}
					dropdownIconPosition={"right"}
					dropdownStyle={Styles.dropdown2DropdownStyle}
					rowStyle={Styles.dropdown2RowStyle}
					rowTextStyle={Styles.dropdown2RowTxtStyle}
					selectedRowStyle={Styles.dropdown2SelectedRowStyle}
					search
					searchInputStyle={Styles.dropdown2searchInputStylestyle}
					searchPlaceHolder={"Search here"}
					searchPlaceHolderColor={"#F8F8F8"}
					renderSearchInputLeftIcon={() => {
						return <FontAwesome name={"search"} color={"#FFF"} size={18} />;
					}}
				/>

				<View
					style={{
						flexDirection: "column",
						alignItems: "center",
						marginTop: 20,
					}}
				>
					<Button
						disabled={!name || !hour || !cup || !minute}
						style={Styles.btn}
						onPress={() => {
							updatePetHandler();
						}}
					>
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
			</ScrollView>
		</View>
	);
};

export default UpdatePet;

const Styles = StyleSheet.create({
	shadow: {
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: 0.1,
		shadowRadius: 10,
		elevation: 10,
	},
	header: {
		flexDirection: "row",
		width,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#F6F6F6",
	},
	headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
	saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
	viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
	scrollViewContainer: {
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	dropdown2BtnStyle: {
		width: "50%",
		height: 50,
		backgroundColor: "#AAA",
		borderRadius: 8,
		marginVertical: 10,
	},
	dropdown2BtnTxtStyle: {
		color: "#000",
		textAlign: "center",
		fontWeight: "bold",
	},
	dropdown2DropdownStyle: {
		backgroundColor: "#FFF",
		borderRadius: 12,
	},
	dropdown2RowStyle: { backgroundColor: "#FFF", borderBottomColor: "#C5C5C5" },
	dropdown2RowTxtStyle: {
		color: "#000",
		textAlign: "center",
		fontWeight: "bold",
	},
	dropdown2SelectedRowStyle: { backgroundColor: "rgba(255,255,255,0.2)" },
	dropdown2searchInputStylestyle: {
		backgroundColor: "#FFF",
		borderBottomWidth: 1,
		borderBottomColor: "#FFF",
	},
	input: {
		width: "50%",
		height: 50,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#b5b5b5",
		padding: 10,
		paddingLeft: 15,
		borderRadius: 5,
		marginVertical: 20,
		fontSize: 15,
		textAlign: "center",
	},
	btn: {
		backgroundColor: "#900",
		padding: 5,
		width: "70%",
	},
	dropdown: {
		flex: 1,
		margin: 10,
		height: 150,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
});
