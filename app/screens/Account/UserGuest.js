import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
export default function UserGuest() {
  const navigation = useNavigation();
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/musica.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>
        Ingresa para poder contratar a tus grupos musicales favoritos
      </Text>
      <Text style={styles.description}>
        ¿Deseas amenizar tus fiestas o eventos con la mejor musica para ti y tus
        invitados? ¿Que estas esperando? Inicia sesión para ponerte en contacto
        y reservar a tus grupos musicales favoritos y que no pare la fiesta.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          title="Ver perfil"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#DC4D4D",
  },
  btnContainer: {
    width: "70%",
  },
});
