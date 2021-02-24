import React, { useRef } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../../components/Account/LoginForm";
import Toast from "react-native-easy-toast";

export default function Login() {
  const toastRef = useRef();
  return (
    <ScrollView style={styles.global}>
      <Image
        source={require("../../../assets/img/ondas.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Text>Inicia sesión con alguna red social</Text>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </ScrollView>
  );
}

function CreateAccount() {
  const navigation = useNavigation();
  return (
    <Text style={styles.textRegister}>
      ¿Aun no te has registrado?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("register")}
      >
        Registrarse
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  global: {
    backgroundColor: "#D6EAF8",
  },
  logo: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
  },
  textRegister: {
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#DC4D4D",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#DC4D4D",
    margin: 40,
  },
});
