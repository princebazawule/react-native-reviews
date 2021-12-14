import React, { useState } from 'react'
import { Text, View, FlatList, TouchableOpacity, Modal, Pressable, Button, Keyboard } from 'react-native'
import Card from '../shared/card'
import { globalStyles } from '../styles/global'
import { Ionicons } from '@expo/vector-icons'
import ReviewForm from './reviewForm'

const HomeScreen = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(true)
    
    const [reviews, setReviews] = useState([
       { title: 'Turnstile – Glow On', rating: 5, body: 'fantastic', key: 1 },
       { title: 'Madlib – Sound Ancestors', rating: 4, body: 'enigmatic', key: 2 },
       { title: 'Olivia Rodrigo – Sour', rating: 3, body: 'mammoth', key: 3 },
       { title: 'Japanese Breakfast – Jubilee', rating: 2, body: 'bright', key: 4 },
       { title: 'Lucy Dacus – Home Video', rating: 1, body: 'grand', key: 5 },
    ])


    const addReview = (review) => {
        review.key = Math.random().toString()

        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalVisible(false)
    }
    return (
        <View style={globalStyles.container}>

            <Modal
                visible={modalVisible}
                animationType='slide'
                presentationStyle='formSheet'
            >
                <Pressable
                    onPress={Keyboard.dismiss}
                >
                        <View style={globalStyles.modalContent}>
                            <Pressable
                                style={[globalStyles.button, globalStyles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Ionicons 
                                    name="close"
                                    size={24}
                                    color="#000"
                                />
                                <Button 
                                    title="Hide Modal" 
                                    color='#000'
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                    }}
                                />
                            </Pressable>

                            <ReviewForm addReview={addReview} />
                        </View>
                    </Pressable>
            </Modal>

            <Pressable
                style={[globalStyles.button]}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Ionicons 
                    name="add" 
                    size={24} 
                    color="#000"
                />
                <Button 
                    title="Add a Review" 
                    color='#000'
                    onPress={() => {
                        setModalVisible(!modalVisible)
                    }}
                />
            </Pressable>

            <Text style={globalStyles.titleText}>Best of 2021!</Text>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                        <Card>
                            <Text style={globalStyles.linkText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />

            {/* <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            /> */}
            
        </View>
    )
}

export default HomeScreen