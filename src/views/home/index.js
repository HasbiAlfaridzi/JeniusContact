import React, { Component } from 'react';
import { ImageBackground, StatusBar,View } from 'react-native';
import { Container, Content, Text, Card, CardItem, Icon, Left, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import CustomHeader from '../../components/CustomHeader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findAllContact } from '../../actions/contact';

class HomeScreen extends Component {

  componentDidMount() {
    this.props.findAllContact();
  }

  goTo(screen) {
    this.props.navigation.navigate(screen);
  }
  
  render() {
    return (
      <Container style={{ backgroundColor: '"white"' }}>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <CustomHeader navigation={this.props.navigation} disableBackButton={true} />
        <Content padder>

          <Grid style={{ backgroundColor: '"white"', left: -10, minWidth: '105%', minHeight: 685, bottom: -20 }}>
            <Row style={{ backgroundColor: '"white"', height: 180, top:-20,marginBottom:200 }}>
             
              <Col>
                <View>
                    <View>
                      <ImageBackground resizeMode="contain" source={require('../../assets/HomeLogo.png')} style={{ width: '100%', height: '100%', alignItems:'center',top:20 }}></ImageBackground>
                    </View>
                    <View>
                      <Text style={{fontSize:35,alignSelf:'center',top:35}}>MY CONTACT</Text>
                    </View>
                </View>
                
                
              </Col>
            </Row>
            <Row style={{ backgroundColor: '#f6f5f6', borderTopEndRadius: 30, borderTopStartRadius: 30 }}>
              <Col style={{ padding: 30 }}>
                <Card noShadow style={{ borderRadius: 20, marginVertical: 10 }}>
                  <CardItem button style={{ borderRadius: 20, height: 80 }} onPress={() => this.goTo('Contact')}>
                    
                    <Body style={{  alignSelf: 'center' }}>
                      <Text style={{alignSelf:'center',fontSize:30,color:"brown"}}>CONTACT LIST</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Row>
          </Grid>


        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts.data
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findAllContact }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(HomeScreen);