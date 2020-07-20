import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';

import {Icon} from 'native-base';
// import { Entypo } from '@expo/vector-icons';
import {
  Container,
  ContainerHeader,
  ContainerTitle,
  ContainerSearch,
  ContainerBody,
  ContainerCategories,
  ContainerItems,
  TextInput,
  CardItem,
  ContainerCardProduct,
  ContainerCardProductItem,
  ContainerHeaderCard,
  ContainerCardText,
  ContainerCardTextSecond,
  ContainerTitleItems,
  ScrollViewContent,
  ImageIcon,
  TitleCard,
  SubTitleCard,
  TitleFooterCard,
  TitleItems,
  ContainerHeaderTitle,
  ContainerHeaderSubTitle,
  ContainerHeaderLeft,
} from './styles';

const iconChaqueta = require('../../assets/chaquetaIcon.png');
const iconProfile = require('../../assets/goku.jpeg');

const dataCategories = [
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
  {
    item: 'search',
  },
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      name: 'Dogs',
    };
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    setTimeout(() => {
      this.setState({refreshing: false, name: 'Cats'});
    }, 3000);
  };

  render() {
    const {navigation} = this.props;
    const {refreshing, name} = this.state;
    return (
      <SafeAreaView>
        <Container>
          <ContainerHeader>
            <TouchableOpacity
              onPress={() => {
                navigation.toggleDrawer();
              }}>
              {/* <Entypo name="menu" size={30} color="#00b075" /> */}
            </TouchableOpacity>
            <ContainerTitle>
              <ContainerHeaderTitle> Location </ContainerHeaderTitle>
              <ContainerHeaderSubTitle> QUEENS, NYC </ContainerHeaderSubTitle>
            </ContainerTitle>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <ContainerHeaderLeft source={iconProfile} />
            </TouchableOpacity>
          </ContainerHeader>
          <ContainerBody>
            <ContainerSearch>
              <Icon name="search" style={{fontSize: 30, color: '#cbcbcb'}} />
              <TextInput placeholder="Search" />
              <Icon name="keypad" style={{fontSize: 20, color: '#cbcbcb'}} />
            </ContainerSearch>
            <ContainerCategories>
              <ContainerItems
                data={dataCategories}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <ContainerTitleItems>
                    <CardItem id={item.id}>
                      <Icon
                        name={`${item.item}`}
                        style={{fontSize: 30, color: '#cbcbcb'}}
                      />
                    </CardItem>
                    <TitleItems> {name} </TitleItems>
                  </ContainerTitleItems>
                )}
                keyExtractor={(item) => item.id}
              />
            </ContainerCategories>
          </ContainerBody>
          <ScrollViewContent
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.onRefresh}
              />
            }>
            <View
              style={{
                paddingTop: 20,
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}>
              {dataCategories.map((item) => (
                <View
                  key={item.item}
                  style={{
                    margin: 20,
                    width: 140,
                    height: 130,
                    marginTop: 50,
                  }}>
                  <ContainerCardProduct
                    onPress={() => navigation.navigate('DetailDategorie')}>
                    <ContainerHeaderCard>
                      <ContainerCardProductItem>
                        <ImageIcon source={iconChaqueta} />
                      </ContainerCardProductItem>
                    </ContainerHeaderCard>
                    <ContainerCardText>
                      <TitleCard> Dexter </TitleCard>
                      <SubTitleCard> French Buldog </SubTitleCard>
                      <ContainerCardTextSecond>
                        <TitleFooterCard> Distance: 2.7 km</TitleFooterCard>
                        <TitleFooterCard> 6 Years Old </TitleFooterCard>
                      </ContainerCardTextSecond>
                    </ContainerCardText>
                  </ContainerCardProduct>
                </View>
              ))}
            </View>
          </ScrollViewContent>
        </Container>
      </SafeAreaView>
    );
  }
}

export default Home;
