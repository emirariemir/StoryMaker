import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import useImageManager from "@/hooks/useImageManager";
import { DraggableImage } from "@/components/DraggableImage";
import { FloatingButtons } from "@/components/FloatingButtons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const { images, isLoading, pickImage, pasteImage, clearImages } =
    useImageManager();

  const insets = useSafeAreaInsets();

  const safePaddingTop = insets.top > 0 ? insets.top : 16;
  const safePaddingBottom = insets.bottom > 0 ? insets.bottom : 16;

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* White Rounded Canvas */}
      <View
        style={[
          styles.canvasContainer,
          {
            marginBottom: safePaddingBottom + 100,
            marginTop: safePaddingTop,
          },
        ]}
      >
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
      </View>

      {/* Floating Buttons outside the canvas */}
      <FloatingButtons
        pickImage={pickImage}
        pasteImage={pasteImage}
        clearImages={clearImages}
      />

      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010101",
    alignItems: "center",
  },
  canvasContainer: {
    flex: 1,
    width: width - 25,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  spinnerContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    opacity: 0.5,
  },
});
