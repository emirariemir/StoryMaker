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
        <FontAwesome name="plus" size={16} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={clearImages}>
        <FontAwesome name="trash" size={16} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={pasteImage}>
        <FontAwesome name="paste" size={16} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Paste</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.previewButton}>
        <FontAwesome
          name="dashboard"
          size={16}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Preview</Text>
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
    width: "50%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "black",
    height: 45,
    borderRadius: 36,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginHorizontal: 5,
  },
  previewButton: {
    backgroundColor: "#3D3BF3",
    height: 45,
    borderRadius: 36,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginHorizontal: 2,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    marginRight: 8,
  },
});
