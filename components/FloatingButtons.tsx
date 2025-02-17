import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useImageManager from "@/hooks/useImageManager";
import CircleButton from "./CircleButton";
import PasteButton from "./PasteButton";
import TrashButton from "./TrashButton";
import AddButton from "./AddButton";

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
      <AddButton onPress={pickImage} />
      <TrashButton onPress={clearImages} />
      <PasteButton onPress={pasteImage} />
      <CircleButton onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    paddingBottom: 50,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "green",
    borderWidth: 2,
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
