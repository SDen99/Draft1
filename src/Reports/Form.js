import React,{Component} from 'react'
import {TextField,
        MenuItem,
        FormControl,
        Button,
        InputLabel,
        Select} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
    FormControl: {
      width: 500
    },
  
    DropDown:{
      width: 100
    }
  })

export default withStyles(styles)(class extends Component {
    state = this.getInitState()
    
    getInitState(){
      const {report} = this.props

      return report
            ?report
            :{
              title:'',
              description:'',
              domain:''
            }
    }

    static getDerivedStateFromProps({report}){
       return report || null
    }

    handleChange = name => ({target: {value}}) =>
        this.setState({
            [name]: value  
        })
    
    handleSubmit = () => {
        // TODO: validate
      
        this.props.onSubmit({
          id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
          ...this.state
        })
    
        this.setState(this.getInitState())
      }
    

    render (){
        const {title, description, domain } = this.state,
              {classes, report, domains: doms} = this.props
        
        return <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
          className={classes.FormControl}
        />
        <br/>
        <FormControl>
          
          <InputLabel htmlFor="domain">
            Domain
          </InputLabel>
          <Select
            className={classes.DropDown}
            value={domain}
            onChange={this.handleChange('domain')}
          >
            {doms.map(dom =>
                <MenuItem key = {dom} value={dom}>
                  {dom}
                </MenuItem>
            )}
           </Select>
      </FormControl>
        <br/>
        <TextField
          multiline
          rows="4"
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
          className={classes.FormControl}
        />
        <br/>
        <Button 
          color="primary" 
          variant="raised"
          onClick={this.handleSubmit}
          >
          {report?'Edit':'Create'}
        </Button>
      </form>
    }
})