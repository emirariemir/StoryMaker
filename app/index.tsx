import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Index() {
  const handleButtonPress = (label: String) => {
    alert(`${label} button pressed!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello StoryMaker!</Text>

      {/* Floating Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("+")}
        >
          <FontAwesome name="plus" size={16} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("Paste")}
        >
          <FontAwesome
            name="paste"
            size={16}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Paste</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.previewButton}
          onPress={() => handleButtonPress("Preview")}
        >
          <FontAwesome
            name="dashboard"
            size={16}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Preview</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 60, // Adjust distance from the bottom of the screen
    flexDirection: "row",
    justifyContent: "center",
    width: "50%", // Adjust width for spacing between buttons
    alignSelf: "center",
  },
  button: {
    backgroundColor: "black",
    height: 35,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20, // Adjust padding for button width
    marginHorizontal: 5, // Space between buttons
  },
  previewButton: {
    backgroundColor: "#FF2929",
    height: 35,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20, // Adjust padding for button width
    marginHorizontal: 5, // Space between buttons
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    marginRight: 8, // Space between icon and label
  },
});
