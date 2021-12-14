import React from 'react'
import { TextInput, View, Text } from 'react-native'
import FlatButton from '../shared/button.js';
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'


const ReviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(3),
    rating: yup.string()
        .required()
        .test('is-Num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
})
const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.form}>
            
            <Text style={globalStyles.titleText}>Add a Review</Text>

            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={ReviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm()
                    addReview(values)
                    // console.log(values)
                }}
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.formInput}
                            placeholder='Review Title'
                            onChangeText={props.handleChange('title')}
                            onBlur={props.handleBlur('title')} 
                            value={props.values.title}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput 
                            multiline
                            minHeight={80}
                            style={globalStyles.formInput}
                            placeholder='Review Details'
                            onChangeText={props.handleChange('body')}
                            onBlur={props.handleBlur('body')}
                            value={props.values.body}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        <TextInput 
                            keyboardType='numeric'
                            style={globalStyles.formInput}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            onBlur={props.handleBlur('rating')}
                            value={props.values.rating}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <FlatButton 
                            onPress={props.handleSubmit} 
                            text='submit'
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm
