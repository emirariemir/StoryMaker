import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

interface PasteButtonProps {
  onPress: () => void;
}

const PasteButton: React.FC<PasteButtonProps> = ({ onPress }) => {
  return (
    <LinearGradient
      colors={["#CFCCBD", "#322A16"]}
      style={styles.backgroundBorder}
    >
      <LinearGradient
        colors={["#AFAC98", "#FFFAE3", "#F1F1B6", "#A39C61"]}
        start={{ x: 0.05, y: 0.1 }}
        end={{ x: 1, y: 0 }}
        style={styles.backgroundButton}
      >
        <LinearGradient
          colors={["#FFFBEE", "#EDE1BF"]}
          start={{ x: 0.5, y: 0.1 }}
          end={{ x: 0.65, y: 0.5 }}
          style={styles.border}
        >
          <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <LinearGradient
              colors={["#E1E0DA", "#F0ECB8"]}
              start={{ x: 0.1, y: 0.7 }}
              end={{ x: 0.6, y: 0.1 }}
              style={styles.button}
            >
              <FontAwesome name="paste" size={24} color="#443018" />
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

export default PasteButton;
