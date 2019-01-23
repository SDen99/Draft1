import React, {Fragment, Component} from 'react'
import Form from './RepForm'
import {Button, 
        Dialog, 
        DialogContent, 
        DialogContentText, 
        DialogTitle} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default class extends Component{
  state ={
     open:false,
  }
  
  handleToggle = ()  =>{
    this.setState({
      open: !this.state.open
    })
  }
 
  HandleFormSubmit = report => {
     this.handleToggle()
     this.props.onCreate(report)
  }

  render() {
    const {open} = this.state,
          {domains} = this.props

    return    <Fragment>
    <Button variant="fab" mini onClick={this.handleToggle}>
      <AddIcon/>
    </Button>

   <Dialog 
      open={open} 
      onClose={this.handleToggle}>
      <DialogTitle>
        Create a new report template
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please fill out key information below
        </DialogContentText>
       <Form 
         domains = {domains}
         onSubmit={this.HandleFormSubmit}/>
      </DialogContent>
 
    </Dialog>
  </Fragment>
  }
}
