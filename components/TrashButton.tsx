import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Entypo } from "@expo/vector-icons";

interface TrashButtonProps {
  onPress: () => void;
}

const TrashButton: React.FC<TrashButtonProps> = ({ onPress }) => {
  return (
    <LinearGradient
      colors={["#CFBDBD", "#321616"]}
      style={styles.backgroundBorder}
    >
      <LinearGradient
        colors={["#A05151", "#FFB4B4", "#FD5E5E", "#8B2929"]}
        start={{ x: 0.05, y: 0.1 }}
        end={{ x: 1, y: 0 }}
        style={styles.backgroundButton}
      >
        <LinearGradient
          colors={["#FFC7C7", "#F68181"]}
          start={{ x: 0.5, y: 0.1 }}
          end={{ x: 0.65, y: 0.5 }}
          style={styles.border}
        >
          <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <LinearGradient
              colors={["#EDB2B2", "#FD7D7D"]}
              start={{ x: 0.1, y: 0.7 }}
              end={{ x: 0.6, y: 0.1 }}
              style={styles.button}
            >
              <Entypo name="trash" size={24} color="#5F1919" />
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
});

export default TrashButton;
