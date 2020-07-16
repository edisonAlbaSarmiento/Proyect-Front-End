import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, Image, Linking
} from 'react-native';
import {
  Header, Icon, Left, Card, CardItem, Thumbnail, Body, Button, Right
} from 'native-base';
import moment from 'moment';
import HTML from 'react-native-render-html';
import HeaderEntry from '../Header';
import urlApi from '../../../ConstIP';

class detailNews extends Component {
    static navigationOptions = {
      drawerIcon: ({ tintColor }) => console.log('e'),
      drawerLabel: ({ tintColor }) => console.log('e')
    }

    componentDidMount = async () => {
      const formData = { status: 1 };
      const dataUpdate = this.props.navigation.state.params.info;
      const { id } = dataUpdate;
      console.log('urlApi', urlApi);
      await fetch(`${urlApi}/news/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json())
        .catch((error) => console.error('Error:', error))
        .then((response) => console.log('Success:', response));
    }

    render() {
      const data = this.props.navigation.state.params.info;
      console.log('esto es en el detalle NEWS', data);
      return (
        <View style={styles.container}>
          <HeaderEntry />
          <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#0F385A' }}>
            <View style={{ flex: 1 }}>
              <Icon name="arrow-round-back" style={{ color: 'white' }} onPress={() => this.props.navigation.navigate('Noticias')} />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={{ color: 'white' }}>
                {data.name}
                {' '}
              </Text>
            </View>
          </Header>
          <ScrollView>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Left>
                  <Body>
                    <Text note>{moment(data.created_at).format('YYYY-MM-DD')}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem>
                <Body style={{ display: 'flex', alignItems: 'center' }}>
                  <Image
                    source={{ uri: data.imagenUrl !== '' ? data.imagenUrl : 'https://www.poli.edu.co/sites/default/files/logos/logo-poli-politecnico-grancolombiano2018.png' }}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 240,
                      width: 320,
                      flex: 1,
                      resizeMode: 'contain'
                    }}
                  />
                  <Text>
                    {data.short_description}
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body style={{ display: 'flex', alignItems: 'center' }}>
                  <HTML html={data.description} />
                </Body>
              </CardItem>
              <CardItem>
                <Right style={{ flex: 1 }}>
                  <Button style={{ backgroundColor: '#0F385A', width: 100, justifyContent: 'center' }} onPress={() => Linking.openURL(`${data.linkPage !== '' ? data.linkPage : 'https://www.poli.edu.co/'}`).catch((err) => console.error('An error occurred', err))}>
                    <Text style={{ color: 'white' }}>Ir a web</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </ScrollView>
        </View>
      );
    }
}
export default detailNews;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
