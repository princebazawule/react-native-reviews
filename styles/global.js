import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        alignItems: 'center'
    },
    detailContainer: {
        // flex: 1,
        // padding: 32,
        // alignItems: 'flex-start'
    },
    titleText: {
        fontFamily: 'Montserrat-Bold', 
        fontSize: 30,
        paddingTop: 16,
        color: '#333'
    },
    linkText: {
        fontFamily: 'Montserrat-Light', 
        fontSize: 21,
        color: '#111',
        textTransform: 'capitalize'
    },
    bodyText: {
        fontFamily: 'Montserrat-Bold', 
        fontSize: 21,
        paddingBottom: 32,
        color: 'coral',
        textTransform: 'capitalize'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    header: {
        height: '100%',
        backgroundColor: '#20405C',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF',
        letterSpacing: 1,
      },
      icon: {
        position: 'absolute',
        // left: 16,
      },
      headerTitle: {
        flexDirection: 'row'
      },
      headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
      },
      card: {
          width: '100%',
          borderRadius: 4,
          elevation: 2,
          backgroundColor: '#fff',
          shadowOffset: { width: 1, height: 1 },
          shadowRadius: 2,
          shadowOpacity: 0.2,
          marginHorizontal: 4,
          marginVertical: 10
      },
      detailCard: {
        elevation: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 0.1,
        marginTop: 32
    },
      cardContent: {
        padding: 16,
      },
      stars: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 10
      },
      modalContent: {
        padding: 21,
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        alignItems: 'stretch',
        textAlign: 'center',
      },
      buttonStyle: {

      },
      button: {
          backgroundColor: '#ddd',
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: '50%',
          textAlign: 'center',
          marginBottom: 21,
          alignSelf: 'center'
      },
      buttonClose: {
        marginTop: 32,
      },
      form: {
          width: '100%',
          justifyContent: 'center',
        marginTop: 32,
        alignItems: 'center'
      },
      formInput: {
          padding: 12,
          borderRadius: 4,
          borderColor: '#CCC',
          borderWidth: 1,
          marginVertical: 12,
          fontSize: 21,
          minWidth: '100%',
          color: '#222',
      },
      errorText: {
          textAlign: 'center',
          color: 'crimson',
          fontWeight: 'bold'
      }
})
