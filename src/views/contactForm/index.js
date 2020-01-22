import React, { Component } from 'react';
import { RefreshControl } from 'react-native';
import { Container, Content, Form, Item, Label, Input, Button, Text, Card, CardItem, Toast } from 'native-base';
import CustomHeader from '../../components/CustomHeader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { findContact, postContact, saveContact } from '../../actions/contact';
import ValidationComponent from 'react-native-form-validator';

class ContactForm extends ValidationComponent  {

  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.state = {
      id: null,
      firstname: null,
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
  
  submit() {
    const data ={
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      photo : this.state.photo 
    }
    this.props.postContact(data);
    this.props.navigation.goBack();
  }

  render() {

    const { navigation } = this.props;

    return (
      <Container>
        <CustomHeader navigation={navigation} title="Add Contact" />
        <Content padder
          refreshControl={
            <RefreshControl refreshing=
              {this.props.loading} onRefresh={() =>
                this.reload()} />
          }>
          <Form>
          <Item floatingLabel>
              <Label>Id</Label>
              <Input value={this.state.id}
              onChangeText={(id) => this.setState({ id })} />
            </Item>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input value={this.state.firstName}
              onChangeText={(firstName) => this.setState({ firstName })} />
            </Item>
            <Item floatingLabel>
              <Label>last Name</Label>
              <Input value={this.state.lastName}
              onChangeText={(lastName) => this.setState({ lastName })} />
            </Item>
            <Item floatingLabel>
              <Label>Age</Label>
              <Input value={this.state.age}
              onChangeText={(age) => this.setState({ age })}  />
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
    postContact: state.postContact.data,
    error: state.contact.error || state.saveContact.error
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ findContact, postContact, saveContact }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactForm);