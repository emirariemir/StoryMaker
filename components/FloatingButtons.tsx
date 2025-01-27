import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useImageManager from "@/hooks/useImageManager";

interface FloatingButtonsProps {
  pickImage: () => void;
  pasteImage: () => void;
  clearImages: () => void;
}

export function FloatingButtons({
  pickImage,
  pasteImage,
  clearImages,
}: FloatingButtonsProps) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <FontAwesome name="plus" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={clearImages}>
        <FontAwesome name="trash" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={pasteImage}>
        <FontAwesome name="paste" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="check" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#010101",
    borderRadius: 8,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    marginVertical: 10,
    marginHorizontal: 16,
  },
});
