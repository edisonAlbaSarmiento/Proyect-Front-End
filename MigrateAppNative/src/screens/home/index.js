import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';

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
import Icon from '../../assets/icons/config-icons';

const iconChaqueta = require('../../assets/chaquetaIcon.png');
const iconProfile = require('../../assets/goku.jpeg');

const dataCategories = [
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
  },
  {
    item: 'home2',
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
              {/* <Icon name="home2" size={30} color="#cbcbcb" /> */}
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
              {/* <Icon name="home2" size={30} color="#cbcbcb" /> */}
              <TextInput placeholder="Search" />
              {/* <Icon name="home2" size={30} color="#cbcbcb" /> */}
            </ContainerSearch>
            <ContainerCategories>
              <ContainerItems
                data={dataCategories}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <ContainerTitleItems>
                    <CardItem key={item.id}>
                      {/* <Icon name={`${item.item}`} size={30} color="#cbcbcb" /> */}
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
                    width: 160,
                    height: 160,
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
