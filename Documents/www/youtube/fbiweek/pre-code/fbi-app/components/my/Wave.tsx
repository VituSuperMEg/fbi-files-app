import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

export default function WaveAnimation() {
  const translateY = useSharedValue(height); // Inicia fora da tela

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  useEffect(() => {
    // Anima a onda de baixo para cima
    translateY.value = withTiming(0, {
      duration: 2000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.waveContainer, animatedStyle]}>
        <Svg
          width={width}
          height={height / 3} // Altura da onda
          viewBox={`0 0 ${width} 300`}
          preserveAspectRatio="xMinYMin slice"
        >
          <Path
            d={`M0 150 Q${width / 2} 0 ${width} 150 L${width} 300 L0 300 Z`}
            fill="#5A7DF1" // Cor da onda
          />
        </Svg>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Cor de fundo
    justifyContent: "flex-end", // Onda começa embaixo
  },
  waveContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: height / 3, // Altura da animação
    overflow: "hidden",
  },
});
