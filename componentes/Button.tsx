import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    label: string;
    theme?: 'primary';
    onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
        return (
            <View
                style={[
                    styles.buttonContainer,
                    {
                        borderWidth: 2,
                        borderColor: '#f05454',
                        borderRadius: 18,
                    },
                ]}
            >
                <Pressable
                    style={[
                        styles.button,
                        { backgroundColor: '#16213e' },
                    ]}
                    onPress={onPress}
                >
                    <FontAwesome
                        name="picture-o"
                        size={18}
                        color="#d4af37"
                        style={styles.buttonIcon}
                    />
                    <Text
                        style={[
                            styles.buttonLabel,
                            { color: '#d4af37' },
                        ]}
                    >
                        {label}
                    </Text>
                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={[
                    styles.button,
                    { backgroundColor: '#1a1a2e', borderWidth: 1, borderColor: '#d4af37' },
                ]}
                onPress={onPress || (() => alert('Você apertou o botão'))}
            >
                <Text
                    style={[
                        styles.buttonLabel,
                        { color: '#e6e6e6' },
                    ]}
                >
                    {label}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 210,
        height: 55,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 8,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
