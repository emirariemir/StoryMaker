import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Clipboard from "expo-clipboard";
import { Alert } from "react-native";

const useImageManager = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // LOGIC FOR PICKING AN IMAGE -----
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
          Alert.alert(
            "Oops!",
            "The image you selected is not compatible to use with this app.",
            [
              {
                text: "Dismiss",
                style: "cancel",
              },
            ],
            { cancelable: true }
          );
        }
      }
    } catch (error) {
      Alert.alert(
        "Oops!",
        "There was an error while parsing the image.",
        [
          {
            text: "Dismiss",
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
      console.error("Error picking image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // LOGIC FOR PASTING AN IMAGE -----
  const pasteImage = async () => {
    setIsLoading(true);
    try {
      const img = await Clipboard.getImageAsync({ format: "png" });
      if (img?.data) {
        setImages((prev) => [...prev, img.data]);
      } else {
        Alert.alert(
          "Oops!",
          "No image found in the clipboard. Are you sure you copied?",
          [
            {
              text: "Dismiss",
              style: "cancel",
            },
          ],
          { cancelable: true }
        );
      }
    } catch (error) {
      Alert.alert(
        "Oops!",
        "There were an error while pasting the image.",
        [
          {
            text: "Dismiss",
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
      console.error("Error pasting image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // LOGIC FOR CLEARING THE WORKSPACE -----
  const clearImages = () => {
    if (images.length == 0) {
      Alert.alert(
        "Oops!",
        "There's no images to clear the surface.",
        [
          {
            text: "Dismiss",
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    } else {
      Alert.alert(
        "Hold up!",
        "Are you sure you want to delete all images? You can't take that back!",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Delete",
            onPress: () => setImages([]),
            style: "destructive",
          },
        ],
        { cancelable: true }
      );
    }
  };

  return { images, isLoading, pickImage, pasteImage, clearImages };
};

export default useImageManager;
