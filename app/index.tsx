import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import * as Clipboard from "expo-clipboard";

function clamp(val: number, min: number, max: number) {
  return Math.min(Math.max(val, min), max);
}

const { width, height } = Dimensions.get("screen");

export default function Index() {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonPress = (label: String) => {
    alert(`${label} button pressed!`);
  };

  const pickImage = async () => {
    setIsLoading(true);
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 1,
      });

      if (!result.canceled) {
        if (result.assets[0]?.uri) {
          setImages((prev) => [...prev, result.assets[0].uri]);
        } else {
          alert("Not a compatible image format");
        }
      }
    } catch (error) {
      alert("Not a compatible image format");
      console.error("Error picking image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const pasteImage = async () => {
    setIsLoading(true);
    try {
      const img = await Clipboard.getImageAsync({ format: "png" });
      if (img?.data) {
        setImages((prev) => [...prev, img.data]);
      } else {
        alert("No image found in clipboard");
      }
    } catch (error) {
      console.error("Error pasting image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearImages = () => setImages([]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {images.length === 0 && (
          <Text style={styles.text}>Pick images to get started.</Text>
        )}
        {images.map((imageUri, index) => (
          <DraggableImage key={`${imageUri}-${index}`} uri={imageUri} />
        ))}
        {isLoading && (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
        {/* Floating Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <FontAwesome name="plus" size={16} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={clearImages}>
            <FontAwesome name="trash" size={16} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={pasteImage}>
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
    </GestureHandlerRootView>
  );
}

function DraggableImage({ uri }: { uri: string }) {
  const scale = useSharedValue(1);
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const prevTranslationX = useSharedValue(0);
  const prevTranslationY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value;
      prevTranslationY.value = translationY.value;
    })
    .onUpdate((event) => {
      const maxTranslateX = width / 2 - 50;
      const maxTranslateY = height / 2 - 50;

      translationX.value = clamp(
        prevTranslationX.value + event.translationX,
        -maxTranslateX,
        maxTranslateX
      );
      translationY.value = clamp(
        prevTranslationY.value + event.translationY,
        -maxTranslateY,
        maxTranslateY
      );
    })
    .runOnJS(true);

  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = event.scale;
    })
    .onEnd(() => {
      scale.value = withSpring(1);
    })
    .runOnJS(true);

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translationX.value },
      { translateY: translationY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View style={[animatedStyle, styles.imageContainer]}>
        <Image source={{ uri }} style={styles.image} resizeMode="contain" />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  spinnerContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  image: {
    width: 200,
    height: 200,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  imageContainer: {
    position: "absolute",
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
