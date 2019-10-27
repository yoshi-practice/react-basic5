import React, {Component} from 'react';

class Child extends Component{

    // increment
    addValueChild(){
        this.props.add(10);
    }
}