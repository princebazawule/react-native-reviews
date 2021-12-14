import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'
import Card from '../shared/card'
import ListStars from '../shared/listStars'
import { globalStyles } from '../styles/global'

const DetailScreen = ({ route, navigation }) => {
    
    const { title, body, rating } = route.params
    const [modalVisible, setModalVisible] = useState(true)

    // console.log(title, body, rating);
    // console.log('title: ' item.title, 'rating: ' item.rating, 'body: ', item.body)

    return (
        <View style={[globalStyles.container, globalStyles.detailContainer]}>
            {/* <Text style={globalStyles.linkText}>Detail Screen</Text>
            <Button 
                title="More Details!" 
                onPress={() => navigation.push('Details')} 
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            /> */}
            <Text style={[globalStyles.titleText, {marginBottom: 32}]}>{title}</Text>
            <Card style={[globalStyles.card, globalStyles.detailCard]}>
                <Text style={globalStyles.bodyText}>"{body}!!!"</Text>
                <Text>RE:Views Rating: {rating}</Text>
                <ListStars rating={rating} />

                {/* <Button
                    title="Give 5 ★s"
                    onPress={() => navigation.setOptions({ title: `${title} - ★★★★★` })}
                /> */}
            </Card>
            
        </View>
    )
}

export default DetailScreen