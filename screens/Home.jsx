import {
	View,
	Text,
	SafeAreaView,
	Platform,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	ScrollView,
	Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Pet from "../components/Pet";
import Icon from "react-native-vector-icons/Entypo";
import { Dialog, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addTask, loadUser, sendPets } from "../redux/action";

const width = Dimensions.width;

const Home = ({ navigation }) => {
	const { user } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const { loading, message, error } = useSelector((state) => state.message);

	const addTaskHandler = async () => {
		await dispatch(addTask(title, description));
		dispatch(loadUser());
	};

	const updateIpHandler = async () => {
		navigation.navigate("updateip");
	};

	const sendPetsHandler = async () => {
		const ip = user.ip_address;
		const pets = user.pets;
		console.log(ip);
		console.log(pets);
		await dispatch(sendPets(ip, pets));
		console.log("Sent");
	};

	useEffect(() => {
		if (error) {
			alert(error);
			dispatch({ type: "clearError" });
			dispatch({ type: "clearError" });
		}
		if (message) {
			alert(message);
			dispatch({ type: "clearMessage" });
		}
	}, [alert, error, message, dispatch]);

	return (
		<>
			<View
				style={{
					backgroundColor: "#fff",
					flex: 1,
					paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
				}}
			>
				{user && (
					<>
						{user.complete && (
							<>
								<SafeAreaView style={styles.container}>
									<Text style={styles.heading}>All Pets</Text>
									{user.pets.map((pet, index) => (
										<Pet key={pet._id} petId={pet._id} useRow={styles.row} />
									))}
									<Button
										style={styles.addDispenseBtn}
										onPress={sendPetsHandler}
									>
										<Text style={{ color: "#000" }}>Dispense</Text>
									</Button>
								</SafeAreaView>
							</>
						)}
						{!user.complete && (
							<>
								<SafeAreaView style={styles.container}>
									{/* <Text style={styles.heading}>All Pets</Text>
									{user.pets.map((pet, index) => (
										<Pet key={pet._id} petId={pet._id} useRow={styles.row} />
									))} */}

									<Text style={styles.heading}>
										You have no connected device
									</Text>
									<View
										style={{
											flex: 1,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<TouchableOpacity
											style={styles.addIpBtn}
											onPress={updateIpHandler}
										>
											<Text
												style={{
													fontSize: 40,
													color: "#000",
													textAlign: "center",
													color: "white",
												}}
											>
												Input IP
											</Text>
										</TouchableOpacity>
									</View>
								</SafeAreaView>
							</>
						)}
					</>
				)}
				{/* <ScrollView>
                    <SafeAreaView>
                        <Text style={styles.heading}>All Tasks</Text>

                        {user && user.pets.map((item) => (
                            <Task key={item._id} title={item.name} description={item.description} status={item.completed} taskId={item._id} />
                        ))}


                        <TouchableOpacity style={styles.addBtn} onPress={hideDialog}>

                            <Icon name='add-to-list' size={20} color="#900" />


                        </TouchableOpacity>


                    </SafeAreaView>

                </ScrollView> */}
			</View>
		</>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "stretch",
		justifyContent: "flex-start",
		padding: 16,
	},
	row: {},
	heading: {
		fontSize: 28,
		textAlign: "center",
		marginTop: 25,
		marginBottom: 20,
		color: "#fff",
		backgroundColor: "#474747",
	},
	addIpBtn: {
		backgroundColor: "#900",
		width: "90%",
		height: "50%",
		justifyContent: "center",
		verticalAlign: "center",
		alignItems: "center",
		borderRadius: 50,
		alignSelf: "center",
		marginVertical: 20,
		elevation: 5,
	},
	addDispenseBtn: {
		backgroundColor: "#eee",
		width: "80%",
		height: "15%",
		justifyContent: "center",
		verticalAlign: "center",
		alignItems: "center",
		borderRadius: 50,
		alignSelf: "center",
		marginVertical: 20,
		elevation: 5,
	},
	input: {
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#b5b5b5",
		padding: 10,
		paddingLeft: 15,
		borderRadius: 5,
		marginVertical: 15,
		fontSize: 15,
	},
});
