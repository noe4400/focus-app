import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus.';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Focus />
        </SafeAreaView>
    );
}
console.log('platform os', Platform.OS, StatusBar.currentHeight);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 100,
        backgroundColor: colors.darkBlue,
    },
    text: {
        color: colors.white,
    },
});
