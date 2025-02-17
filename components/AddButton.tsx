import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

interface AddButtonProps {
  onPress: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
  return (
    <LinearGradient
      colors={["#BDCFCF", "#162B32"]}
      start={{ x: 0.5, y: 0.1 }}
      end={{ x: 0.65, y: 0.5 }}
      style={styles.backgroundBorder}
    >
      <LinearGradient
        colors={["#98ABAF", "#E3FDFF", "#B6E3F1", "#6191A3"]}
        start={{ x: 0.05, y: 0.1 }}
        end={{ x: 1, y: 0 }}
        style={styles.backgroundButton}
      >
        <LinearGradient
          colors={["#EEFCFF", "#BFD9ED"]}
          start={{ x: 0.5, y: 0.1 }}
          end={{ x: 0.65, y: 0.5 }}
          style={styles.border}
        >
          <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <LinearGradient
              colors={["#DAE1E0", "#B8F0EE"]}
              start={{ x: 0.1, y: 0.7 }}
              end={{ x: 0.6, y: 0.1 }}
              style={styles.button}
            >
              <FontAwesome name="plus" size={24} color="#182544" />
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backgroundBorder: {
    padding: 1,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  backgroundButton: {
    padding: 5,
    borderRadius: 100,
  },
  border: {
    padding: 1,
    borderRadius: 100,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 100,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddButton;
