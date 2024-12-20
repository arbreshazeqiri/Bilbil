import React from "react";
import { Image, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({ tabScreens }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#212832",
        },
      }}
    >
      {tabScreens.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          initialParams={{ tabIndex: index }}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            animationEnabled: false,
            swipeEnabled: true,
            tabBarIndicatorStyle: { backgroundColor: "#944ADE", height: 4 },
            tabBarIcon: () => (
              <View
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                }}
              >
                <Image
                  style={{
                    height: 30,
                    width: 30,
                  }}
                  source={tab.iconSource}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
