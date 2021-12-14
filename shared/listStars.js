import React from 'react'
import { View, Image } from 'react-native'
import { globalStyles } from '../styles/global'

const ListStars = ({ rating }) => {

    const ratingNumber = parseInt(rating)

    const stars = Array.from(Array(ratingNumber)).map((i) => {
        return (
            <View style={globalStyles.star}>
                <Image 
                    source={require('../assets/star.png')}
                />
            </View>
            
        )
    })
    

    return (
        <View style={globalStyles.stars}>
            {stars}
        </View>
    )
}

export default ListStars
