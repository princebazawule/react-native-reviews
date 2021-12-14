import React from 'react'
import { Text, View, Image } from 'react-native'
import { globalStyles } from '../styles/global'

const Header = ({ title }) => {
    return (
        <View style={globalStyles.header}>
            <View style={globalStyles.headerTitle}>
                <Image 
                    style={globalStyles.headerImage}
                    source={require('../assets/star_logo.png')} 
                />
                <Text style={globalStyles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default Header
