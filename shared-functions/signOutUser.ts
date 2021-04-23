import firebase from "firebase";

// Handle user sign-out process
const signOutUser = async () => {
	await firebase.auth().signOut();
	localStorage.removeItem("user");
	window.location.href = "/";
};

export default signOutUser;
