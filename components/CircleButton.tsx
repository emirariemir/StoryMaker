import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

interface CircleButtonProps {
  onPress: () => void;
}

const CircleButton: React.FC<CircleButtonProps> = ({ onPress }) => {
  return (
    <LinearGradient
      colors={["#BFCFBD", "#1A3216"]}
      start={{ x: 0.5, y: 0.1 }}
      end={{ x: 0.65, y: 0.5 }}
      style={styles.backgroundBorder}
    >
      <LinearGradient
        colors={["#9BAF98", "#E6FFE3", "#BDF1B6", "#69A361"]}
        start={{ x: 0.05, y: 0.1 }}
        end={{ x: 1, y: 0 }}
        style={styles.backgroundButton}
      >
        <LinearGradient
          colors={["#F0FFEE", "#C3EDBF"]}
          start={{ x: 0.5, y: 0.1 }}
          end={{ x: 0.65, y: 0.5 }}
          style={styles.border}
        >
          <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <LinearGradient
              colors={["#DAE1DA", "#BDF0B8"]}
              start={{ x: 0.1, y: 0.7 }}
              end={{ x: 0.6, y: 0.1 }}
              style={styles.button}
            >
              <FontAwesome name="check" size={24} color="#18441B" />
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
    paddingHorizontal: 12,
    borderRadius: 100,
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CircleButton;
