import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, PanResponder, Animated, TouchableOpacity } from "react-native";

const Draggable = ({ text, onDrop, dashedLineDimensions }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const draggableRef = useRef(null);

  const [draggableWidth, setDraggableWidth] = useState(draggableRef.current.width);
  const [draggableHeight, setDraggableHeight] = useState(draggableRef.current.height);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (event, gesture) => {
        const nearestDashedLinePosition = {x: -draggableWidth, y: -draggableHeight} //calculate the free space starting position and send the draggable there
        console.log(nearestDashedLinePosition);

        Animated.spring(pan, {
          toValue: nearestDashedLinePosition,
          useNativeDriver: false,
        }).start();

        onDrop(text, draggableWidth, draggableHeight);
      },
    })
  ).current;

  const calculateNearestDashedLine = (x, y) => {
    console.log(x)
    const dashedLineX = dashedLineDimensions.width / 2;
    const dashedLineY = dashedLineDimensions.height / 2;
  
    const deltaX = x - dashedLineX;
    const deltaY = y - dashedLineY;
  
    return { x: x - deltaX - draggableWidth / 2, y: y - deltaY - draggableHeight / 2 };
  };

  const handlePress = () => {
    const newPosition = {
      x: dashedLineDimensions.current.width / 2 - draggableWidth / 2,
      y: dashedLineDimensions.current.height / 2 - draggableHeight / 2,
    };

    Animated.spring(pan, {
      toValue: newPosition,
      useNativeDriver: false,
    }).start();

    onDrop(text, draggableWidth, draggableHeight);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
        ref={draggableRef}
      >
        <View style={styles.draggable}>
          <Text>{text}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  draggable: {
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
  },
});

export default Draggable;
