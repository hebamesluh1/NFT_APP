import React, { useRef } from 'react';
import { Animated } from 'react-native';

export default function useAnimation() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const moveAnimation = useRef(new Animated.ValueXY({ x: 100, y: 100 })).current;
  const moveAnimation2 = useRef(new Animated.Value(0)).current;

  const AnimationSequencesHandler: () => void = () => {
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(moveAnimation, {
        toValue: { x: 0, y: 0 },
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const TextAnimation: () => void = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      delay: 1300
    }).start()
  }

  const ButtonAnimation: () => void = () => {
    Animated.spring(moveAnimation2, {
      toValue: 0,
      duration: 1000,
      delay: 1300,
      useNativeDriver: true,
      friction: 4,
    }).start()
  }

  return {
    moveAnimation2,
    fadeAnimation,
    moveAnimation,
    TextAnimation,
    ButtonAnimation,
    AnimationSequencesHandler
  };
}
