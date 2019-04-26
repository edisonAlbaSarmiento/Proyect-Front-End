import React from 'react'
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { StyleSheet, Text, View, ScrollView, Image  } from 'react-native';

class FooterVertical extends React.Component{
render(){
    return(
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>|
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
    }
}

export default FooterVertical