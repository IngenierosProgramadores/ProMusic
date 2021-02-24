import React, { useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-easy-toast";
import RegisterForm from "../../components/Account/RegisterForm";

export default function Register() {
  const toastRef = useRef();
  return (
    <KeyboardAwareScrollView style={styles.global}>
      <Image
        source={require("../../../assets/img/ondas.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </KeyboardAwareScrollView>
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
  viewForm: {
    marginRight: 30,
    marginLeft: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
});
