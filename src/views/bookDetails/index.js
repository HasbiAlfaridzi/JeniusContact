import React, { Component } from 'react';
import { RefreshControl } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text, Card, CardItem, Toast } from 'native-base';
import CustomHeader from '../../components/CustomHeader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findContact, saveContact } from '../../actions/contact';

class ContactDetail extends Component {

  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.state = {
      id: navigation.getParam('id'),
      firstName: null,
      lastName: null,
      age: '',
      photo: null
    }
    
  }
  reload() {
    this.props.findContact(this.state.id);
  }
  componentDidMount() {
    if (this.state.id) {
      this.props.findContact(this.state.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {

    const { error , contact, saveContact, navigation} = this.props;
    if (contact && prevProps.contact !== contact) {
      this.setState(contact);
    } else if (error && prevProps.error !== error) {
      Toast.show({
        text: error.message,
        buttonText: 'Ok',
        type: 'danger'
      })
    }
  }

  submit() {
    const data ={
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      photo: this.state.photo
    }
    this.props.saveContact(data.id,data);
    this.props.navigation.goBack();
  }

  render() {
    // console.log('++++++++++++++++++');
    // console.log(this.props.book);
    // console.log('id yang di state ' + this.state.id);

    const { navigation } = this.props;

    return (
      <Container>
        <CustomHeader navigation={navigation} title="Book Details" />
        <Content padder
          refreshControl={
            <RefreshControl refreshing=
              {this.props.loading} onRefresh={() =>
                this.reload()} />
          }>
          <Form>
          <Item floatingLabel>
              <Label>Id</Label>
              <Input disabled value={this.state.id}
              onChangeText={(id) => this.setState({ id })} />
            </Item>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input value={this.state.firstName}
              onChangeText={(firstName) => this.setState({ firstName })} />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input value={this.state.lastName}
              onChangeText={(lastName) => this.setState({ lastName })} />
            </Item>
            <Item floatingLabel>
              <Label>Age</Label>
              <Input value={this.state.age}
              onChangeText={(age) => this.setState({ age })} keyboardType='number-pad' />
            </Item>
            <Item floatingLabel>
              <Label>Photo</Label>
              <Input value={this.state.photo}
              onChangeText={(photo) => this.setState({ photo })} keyboardType='number-pad' />
            </Item>
            <Button style={{backgroundColor:'grey', alignSelf:'center', marginTop:20}} onPress={() => this.submit()}>
            <Text>SAVE</Text>
          </Button>
          </Form>
          {
          this.state.error && Toast.show({
            text: error.message,
            buttonText: 'ERROR',
            type: "danger",
            duration: 5000
          })
        }
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.contact.loading || state.saveContact.loading,
    contact: state.contact.data,
    saveContact: state.saveContact.data,
    error: state.contact.error || state.saveContact.error
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findContact, saveContact }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactDetail);