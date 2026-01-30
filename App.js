import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";


const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator();

export default function App() {

  return (
//          <NavigationContainer>
//              <Drawer.Navigator initialRouteName="User" screenOptions={{
//                  headerStyle: { backgroundColor: '#3c0a6b' },
//                  headerTintColor: 'white',
//                  drawerActiveBackgroundColor: '#f0e1ff',
//                  drawerActiveTintColor: '#3c0a6b',
//              }}>
//                  <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
//                      drawerLabel: 'Welcome Screen',
//                      drawerIcon: ({ color, size }) => <Ionicons name={"home"} color={color} size={size} />
//                  }}/>
//                  <Drawer.Screen name="User" component={UserScreen}
//                                 options={{
//                                     drawerIcon: ({ color, size }) => <Ionicons name={"person"} color={color} size={size} />
//                                 }}/>
//              </Drawer.Navigator>
//          </NavigationContainer>
          <NavigationContainer>
              <BottomTab.Navigator initialRouteName="User" screenOptions={{
                  headerStyle: { backgroundColor: '#3c0a6b' },
                  headerTintColor: 'white',
                  tabBarActiveTintColor: '#3c0a6b',
              }} id={'1'}>
                  <BottomTab.Screen 
                      name="Welcome" 
                      component={WelcomeScreen} 
                      options={{
                          tabBarIcon: ({ color, size }) => (
                            <Ionicons name={"home"} color={color} size={size} />
                        ),
                  }} />
                  <BottomTab.Screen 
                      name="User" 
                      component={UserScreen} 
                      options={{
                          tabBarIcon: ({ color, size }) => (
                            <Ionicons name={"person"} color={color} size={size} />
                        ),
                  }} />
              </BottomTab.Navigator>
          </NavigationContainer>
  );
}
