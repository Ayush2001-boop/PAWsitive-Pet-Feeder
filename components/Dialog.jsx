import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Dialog } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

const { height, width } = Dimensions.get("window");

const Dialog = ({ petId }) => {
	const [name, setName] = useState("");
	const [hour, setHour] = useState("");
	const [minute, setMinute] = useState("");
	const [cup, setCup] = useState("");

	const [openDialog, setOpenDialog] = useState(false);
	const dispatch = useDispatch();

	const hideDialog = () => {
		setOpenDialog(!openDialog);
	};
	return (
		<View>
			<Dialog
				style={styles.dialogBox}
				visible={openDialog}
				onDismiss={hideDialog}
			>
				<Dialog.Title>ADD A PET</Dialog.Title>
				<Dialog.Content></Dialog.Content>
			</Dialog>
		</View>
	);
};

export default Dailog;

const styles = StyleSheet.create({
	dialogBox: {
		flex: 1,
		backgroundColor: "white",
		height: height / 2,
		width: width,
		alignSelf: "flex-center",
	},
});
