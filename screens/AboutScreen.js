import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

const AboutScreen = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>About Screen</Text>
            <Text style={{marginTop: 32, fontSize: 21, marginHorizontal: 'auto', maxWidth: '90%'}}>
                It's that time of year...
            </Text>
            <Text style={{marginTop: 32, fontSize: 21, marginHorizontal: 'auto', maxWidth: '90%'}}>
                As always, we've rounded up the Best Music
                Check out who made the list
            </Text>
            <Text style={{marginTop: 32, fontSize: 21, marginHorizontal: 'auto', maxWidth: '90%'}}>
                - Remember, this is the best music reviews ob the internet!
            </Text>
        </View>
    )
}

export default AboutScreen