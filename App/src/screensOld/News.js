import React, { Component } from 'react';
import {
  RefreshControl, StyleSheet, Text, View, ScrollView, Image, ActivityIndicator, ToastAndroid
} from 'react-native';
import {
  Header, Icon, Left, Card, CardItem, Thumbnail, Body, Button, Right, Footer, FooterTab, Badge
} from 'native-base';
import moment from 'moment';
import HeaderEntry from '../ComponentsOld/Header';
import urlApi from '../../ConstIP';

const Toast = (props) => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      25,
      50,
    );
    return null;
  }
  return null;
};

class News extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon
        name="paper"
        style={{
          fontSize: 24, color: tintColor
        }}
      />
    ),
    swipeEnabled: false
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      visible: false,
      refreshing: false
    };
  }


    componentDidMount = async () => {
      console.log('ENTRO11');
      return fetch(`${urlApi}/news/`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            data: responseJson.reverse()
          });
        }).catch((error) => {
          console.error(error);
        });
    }

    hideToast = () => {
      this.setState({
        visible: false,
      });
    };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    fetch(`${urlApi}/news/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          data: responseJson.reverse()
        });
      }).then(() => {
        this.setState({
          refreshing: false
        });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    const news = data.filter((data) => (data.status === 0));
    if (isLoading) {
      return (
        <View style={{ flex: 1, padding: 50 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <HeaderEntry />
        <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#0F385A' }}>
          <View style={{ flex: 1 }}>
            <Icon name="menu" style={{ color: 'white' }} onPress={() => this.props.navigation.openDrawer()} />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ color: 'white' }}> Noticias </Text>
          </View>
        </Header>
        <ScrollView
          refreshControl={(
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          )}
        >


          {data.map((item, i) => (
            <View key={i}>
              <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('../../assets/logoPoli.png')} style={{ resizeMode: 'contain' }} />
                    <Body>
                      {item.status === 0
                        ? (
                          <View>
                            <Text style={{ color: 'red' }}>Nuevo Noticia </Text>
                            <Text>{item.name}</Text>
                            <Toast visible message="NOTICIAS NUEVAS" />
                          </View>
                        )
                        : <Text>{item.name}</Text>}
                      <Text note>{moment(item.created_at).format('YYYY-MM-DD')}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body style={{ display: 'flex', alignItems: 'center' }}>
                    <Image
                      source={{ uri: item.imagenUrl !== '' ? item.imagenUrl : 'https://www.poli.edu.co/sites/default/files/logos/logo-poli-politecnico-grancolombiano2018.png' }}
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
                      {item.short_description}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Right style={{ flex: 1 }}>
                    <Button style={{ backgroundColor: '#0F385A', width: 100, justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('PoliU', { info: item })}>
                      <Text style={{ color: 'white' }}>Ver más</Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
            </View>
          ))}
        </ScrollView>
        <Footer style={{ display: 'flex', alignItems: 'center', backgroundColor: '#0F385A' }}>
          <FooterTab>
            <Button
              vertical
              active
              onPress={() => this.props.navigation.navigate('Noticias')}
              style={{ backgroundColor: '#0F385A' }}
            >
              {news.length === 0 ? null : <Badge><Text style={{ color: 'white' }}>{news.length}</Text></Badge> }
              <Icon active name="paper" />
              <Text style={{ color: 'white' }}>Noticias</Text>
            </Button>
            <Button
              vertical
              onPress={() => this.props.navigation.navigate('Eventos')}
              style={{ backgroundColor: '#0F385A' }}
            >
              <Icon name="calendar" />
              <Text style={{ color: 'white' }}>Eventos</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}
export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
