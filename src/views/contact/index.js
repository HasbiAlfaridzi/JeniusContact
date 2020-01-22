import React, { Component } from 'react';
import { RefreshControl, Alert,Image,View } from 'react-native';
import { Container, Content, Fab, Left, Thumbnail, Text, Body, Button, Right, Card, CardItem, Icon, Toast } from 'native-base';
import CustomHeader from '../../components/CustomHeader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findAllContact, deleteContact, saveContact } from '../../actions/contact';
import { postContact } from '../../sagas/contact';

class Contact extends Component {

  state = { isRefreshing: false };

  componentDidMount() {
    this.reload();
  }
  
  reload() {
    this.props.findAllContact();
  }

  componentDidUpdate(prevProps, prevState) {
    const { savedContact, postContact } = this.props;

    if( savedContact && prevProps.savedContact !== savedContact || postContact && prevProps.postContact !== postContact) {
      Toast.show({
        text: 'Success!',
        buttonText: 'Okay',
        type:'success'
      }),
      this.reload();
    }
  }

  showDetail(id) {
    this.props.navigation.navigate('BookDetails', { id });
  }

  openForm() {
    this.props.navigation.navigate('ContactForm');
  }


  delete(data){
    Alert.alert(
      'Confirmation',
      'Delete '+data.title+'?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          onPress: () => (this.props.deleteBook(data.id),
          this.reload(),
          Toast.show({
            text: 'Delete success!',
            buttonText: 'Okay',
            type:'success'
          }))
        },
      ]
    );
  }

  renderListItem(data, index) {
    
    return (
      <Card key={'item-' + index} style={{ borderRadius: 15, }} noShadow>
        <CardItem button  style={{ borderRadius: 15, }} onPress={() => this.showDetail(data.id)} >
        
          <Body style={{ justifyContent: 'center', minWidth:'40%'}}>
        
            <Text >{data.firstName}</Text>
            <Text style={{fontSize:13}}>{data.lastName}</Text>
          </Body>
          <Right>
          </Right>
        </CardItem>
      </Card>
    );
  }

  render() {
    const {error, loading, navigation} = this.props;
    return (
      <Container style={{backgroundColor:'#f5f5f5'}}>
        <CustomHeader navigation={this.props.navigation} title="List Books" disableBackButton={true}/>
        <Content padder refreshControl={ <RefreshControl refreshing= {this.props.loading} onRefresh={() => this.reload()} /> }>
            {this.props.contacts.map((data, index) => this.renderListItem(data, index))}
        </Content>
        
        <Fab
            containerStyle={{ }}
            style={{ backgroundColor: 'grey' }}
            position="bottomRight"
            onPress={() => this.openForm()}>
            <Icon name="add" />
          </Fab>
        {
          error && Toast.show({
            text: error.message,
            buttonText: 'cancel',
            type: "danger",
            duration: 5000
          })
        
        }
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts.data,
    error: state.contacts.error ||state.postContact.error,
    loading: state.contacts.loading,
    savedContact: state.saveContact.data,
    deleteContact: state.deleteContact.data,
    postContact: state.postContact.data
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findAllContact, deleteContact, saveContact }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Contact);