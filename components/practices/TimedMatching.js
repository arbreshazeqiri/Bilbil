import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import LoadingBar from "../LoadingBar";
import CustomModal from "../CustomModal";

const TimedMatching = ({ active, setActive }) => {
  const [steps, setSteps] = useState(10);
  const [progress, setProgress] = useState(0);
  return (
    <View style={styles.container}>
      <CustomModal
        visible={active}
        transparent={true}
        dismiss={() => setActive(false)}
      >
        <View style={styles.header}>
          <LoadingBar steps={steps} progress={progress} />
        </View>
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingVertical: 30,
  },
  header: {
    width: "90%",
    alignSelf: "center",
    justifySelf: "center",
    marginTop: -15,
  },
});

export default TimedMatching;
