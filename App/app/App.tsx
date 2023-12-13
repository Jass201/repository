import React from "react";
import LandingPage from "./LandingPage";
import KeuzePage from "./(Components)/keuze";
import HowItWorksOneHomeowner from "./(Components)/(Homeowner)/HowItWorksOneHomeowner";
import HowItWorksTwoHomeowner from "./(Components)/(Homeowner)/HowItWorksTwoHomeowner";
import HowItWorksThreeHomeowner from "./(Components)/(Homeowner)/HowItWorksThreeHomeowner";
import HowItWorksOneSpecialist from "./(Components)/(Specialist)/HowItWorksOneSpecialist";
import HowItWorksTwoSpecialist from "./(Components)/(Specialist)/HowItWorksTwoSpecialist";
import HowItWorksThreeSpecialist from "./(Components)/(Specialist)/HowItWorksThreeSpecialist";
import Register from "./(Components)/(forms)/Register";
import Login from "./(Components)/(forms)/login";
import Home from "./(Components)/(tabs)/home";
import Verify from "./(Components)/(forms)/Verification";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { RootStackParamList } from "./types";
Amplify.configure(awsconfig);


const App = () => {

  const Stack = createNativeStackNavigator<RootStackParamList>();
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="KeuzePage" component={KeuzePage} />
        <Stack.Screen
          name="HowItWorksOneHomeowner"
          component={HowItWorksOneHomeowner}
        />
        <Stack.Screen
          name="HowItWorksTwoHomeowner"
          component={HowItWorksTwoHomeowner}
        />
        <Stack.Screen
          name="HowItWorksThreeHomeowner"
          component={HowItWorksThreeHomeowner}
        />
        <Stack.Screen
          name="HowItWorksOneSpecialist"
          component={HowItWorksOneSpecialist}
        />
        <Stack.Screen
          name="HowItWorksTwoSpecialist"
          component={HowItWorksTwoSpecialist}
        />
        <Stack.Screen
          name="HowItWorksThreeSpecialist"
          component={HowItWorksThreeSpecialist}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verify" component={Verify} />
        {/* <Stack.Screen name="" component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
