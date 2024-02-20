import { LoginStackRoutes } from '../../app/navigation/routes';
import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const MyComponent = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(true);
  };

  const confirmLogout = () => {
    navigation.navigate(LoginStackRoutes.Login);
    setModalVisible(false);
  };

  const cancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
      <Modal
        isVisible={isModalVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackdropPress={cancelLogout}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Are you sure you want to log out?</Text>
          <View style={styles.buttonContainer}>
            <Button title="Logout" onPress={confirmLogout} />
            <Button title="Cancel" onPress={cancelLogout} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default MyComponent;
