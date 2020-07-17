import React, {Component} from 'react';
import {Icon} from 'native-base';
// import { AntDesign } from '@expo/vector-icons';
import {
  Container,
  ImageHeader,
  ContainerHeader,
  ContainerCardHeader,
  ContainerButton,
  ContainerTitleCard,
  ContainerSubTitleCard,
  SubTitleCard,
  TitleCard,
  ContainerStar,
  TitlePunctuationCard,
  ContainerDescription,
  Description,
  ContainerInformation,
  TitleContainerInformation,
  ContainerInformationItems,
  TitleContainerInformationItems,
  ContainerButtons,
  Button,
  ButtonHeart,
  TextButton,
} from './style';

const imageHome = require('../../../assets/homeDetail.jpg');

class DetailDategorie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;

    return (
      <Container>
        <ContainerHeader>
          <ImageHeader source={imageHome} />
          <ContainerButton onPress={() => navigation.navigate('Home')}>
            {/* <AntDesign name="left" size={25} color="white" /> */}
          </ContainerButton>
        </ContainerHeader>

        <ContainerCardHeader>
          <ContainerTitleCard>
            <TitleCard> Bedroom in Luxury Home </TitleCard>
            <ContainerStar>
              <Icon name="star-half" style={{fontSize: 16, color: '#e17c2b'}} />
              <TitlePunctuationCard> 5.0 </TitlePunctuationCard>
            </ContainerStar>
          </ContainerTitleCard>
          <ContainerSubTitleCard>
            <SubTitleCard> Trestreet City, Sector 70, USA </SubTitleCard>
            <SubTitleCard fontSizeText="18px"> $170/night </SubTitleCard>
          </ContainerSubTitleCard>
        </ContainerCardHeader>
        <ContainerDescription>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting i
            ndustry. Lorem Ipsum has been the indust rys standard dummy text
            ever since the 150 0s, when an unknown printer took a galley o f
            type and scrambled it to make a type specimen book.{' '}
          </Description>
          <ContainerInformation>
            <TitleContainerInformation>Amenities</TitleContainerInformation>
            <ContainerInformationItems>
              <TitleContainerInformationItems>
                Free Wifi
              </TitleContainerInformationItems>
              <TitleContainerInformationItems>
                CCTV
              </TitleContainerInformationItems>
              <TitleContainerInformationItems>
                Washinng Machine
              </TitleContainerInformationItems>
              <TitleContainerInformationItems>
                Fire Extinguisher
              </TitleContainerInformationItems>
            </ContainerInformationItems>
          </ContainerInformation>
          <ContainerButtons>
            <Button>
              <TextButton>Book Now</TextButton>
            </Button>
            <ButtonHeart>
              <Icon name="heart" style={{fontSize: 25, color: '#cbc9ca'}} />
            </ButtonHeart>
          </ContainerButtons>
        </ContainerDescription>
      </Container>
    );
  }
}

export default DetailDategorie;
