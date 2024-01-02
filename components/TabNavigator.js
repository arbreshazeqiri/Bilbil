import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ tabScreens }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#212832",
          paddingTop: 30,
          paddingBottom: 40,
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
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                  borderColor: focused ? "#944ADE" : "transparent",
                  backgroundColor: focused ? "#2D1E3B" : "transparent",
                  borderWidth: focused ? 2 : 0,
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

export default TabNavigator;
