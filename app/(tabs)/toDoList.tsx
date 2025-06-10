import React from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTarefas } from "@/hooks/useTarefas";

export default function App() {
    const { tarefas, novaTarefa, setNovaTarefa, adicionarTarefa, removerTarefa } = useTarefas();

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>🏰 Lista de Dragões 🐉</Text>

            <View style={styles.inputRow}> 
                <TextInput
                    style={styles.input}
                    placeholder="Nome do dragão..."
                    placeholderTextColor="#aaa"
                    value={novaTarefa}
                    onChangeText={setNovaTarefa}
                />
                <View style={styles.buttonWrapper}>
                    <Button 
                        color="#d4af37" 
                        title="Adicionar" 
                        onPress={adicionarTarefa} 
                    />
                </View>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.tarefaContainer}>
                        <Text style={styles.tarefaTexto}>🐲 {item.texto}</Text>
                        <TouchableOpacity 
                            style={styles.botaoRemover}
                            onPress={() => removerTarefa(item.id)}
                        >
                            <Text style={styles.remover}>🗡️</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        backgroundColor: '#1a1a2e',
    },
    titulo: { 
        fontSize: 28, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        marginVertical: 20, 
        color: '#d4af37',
        textShadowColor: 'rgba(255, 215, 0, 0.3)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 5,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        height: 50, // Altura fixa para a linha inteira
    },
    input: {
        flex: 1,
        height: '100%', // Ocupa 100% da altura do container pai
        borderWidth: 2,
        borderColor: '#d4af37',
        paddingHorizontal: 12,
        color: '#fff',
        backgroundColor: '#16213e',
        fontSize: 16,
        borderRadius: 8,
        marginRight: 10,
    },
    buttonWrapper: {
        height: '100%', // Mesma altura que o inputRow
        justifyContent: 'center',
    },
    tarefaContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        backgroundColor: '#16213e', 
        padding: 15,
        marginBottom: 10, 
        borderRadius: 8, 
        borderLeftWidth: 4,
        borderLeftColor: '#f05454',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    tarefaTexto: { 
        fontSize: 18, 
        color: '#e6e6e6',
        flexShrink: 1,
    },
    botaoRemover: {
        backgroundColor: '#f05454',
        borderRadius: 20,
        padding: 5,
        marginLeft: 10,
    },
    remover: { 
        fontSize: 20, 
        color: '#fff',
        paddingHorizontal: 8,
    },
});