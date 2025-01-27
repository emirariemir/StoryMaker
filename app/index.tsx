import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import useImageManager from "@/hooks/useImageManager";
import { DraggableImage } from "@/components/DraggableImage";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function HomeScreen() {
  const { images, isLoading, pickImage, pasteImage, clearImages } =
    useImageManager();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {images.length === 0 && !isLoading && (
          <Text style={styles.text}>Pick images to get started.</Text>
        )}
        {images.map((imageUri, index) => (
          <DraggableImage key={`${imageUri}-${index}`} uri={imageUri} />
        ))}
        {isLoading && (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="small" color={"#3D3BF3"} />
          </View>
        )}
        <FloatingButtons
          pickImage={pickImage}
          pasteImage={pasteImage}
          clearImages={clearImages}
        />
        <StatusBar style="dark" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBFBFB",
  },
  spinnerContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "medium",
    opacity: 0.5,
  },
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
