import { StyleSheet, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

export default function Popup({ children, visible, transparent, dismiss }) {
    return (
        <Modal
            visible={visible}
            transparent={transparent}
            onRequestClose={dismiss}
        >
            <View
                style={styles.modalContent}
            >
                <TouchableWithoutFeedback onPress={dismiss}>
                    <Ionicons
                        name={'close'}
                        size={30}
                        color={'#afafaf97'}
                    />
                </TouchableWithoutFeedback>
                {children}
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        backgroundColor: '#212832',
        paddingVertical: 30
    }
});