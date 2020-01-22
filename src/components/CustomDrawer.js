import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Container, Content, ListItem, Left, Icon, Text, Body, Badge, Right, Thumbnail, View } from 'native-base';

const menuItems = [
    {
        id: '1',
        label: 'Home',
        target: 'Home'
    },
    {
        id: '2',
        label: 'Books',
        target: 'Books'
    }
]

class CustomDrawer extends Component {

    closeDrawer() {
        this.props.navigation.closeDrawer();
    }

    openDrawer() {
        this.props.navigation.openDrawer();
    }

    navigate(target) {
        this.props.navigation.navigate(target);
    }

    renderListItem(data, index) {
        return (
            <ListItem icon onPress={() => this.navigate(data.target)} key={'item-' + index}>
                <Left>
                    <Icon type="Feather" active name={data.icon} style={{ fontSize:24, color:'grey'}}/>
                </Left>
                <Body>
                    <Text style={{fontSize:16}}>{data.label}</Text>
                </Body>
            </ListItem>
        );
    }

    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground
                        resizeMode="cover"
                        style={{
                            backgroundColor: 'grey',
                            height: 180,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Left style={{left:-30, paddingTop: 40}}>
                        <Thumbnail source={{ uri: 'https://img.posjateng.id/img/author/dede-suryana-JAHuSxBCAT.jpg' }}/>
                        <View style={{paddingTop:10,}}>
                        <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>Hasbi</Text>
                        <Text style={{color:'white'}}>HasbiAlfaridzi@gmail.com</Text>
                        </View>
                        </Left>
                    </ImageBackground>
                        {menuItems.map((item, index) => this.renderListItem(item, index))}
                </Content>
            </Container>
                )
            }
        }
        
export default CustomDrawer;