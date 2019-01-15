import React, {Fragment} from 'react'
import {Grid, Paper, Typography, List, ListItem, ListItemSecondaryAction, IconButton} from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText';
import {Delete, Edit} from '@material-ui/icons/'
import Form from '../Reports/Form'


const styles={
    Paper:{
        padding:20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}

export default ({
  reports, 
  category, 
  onSelect,
  domains,
  report,
  report:
    {id, 
     title = 'Welcome',
     description ='Please select a report from the left'},
  onDelete,
  onSelectEdit,
  editMode,
  onEdit
  }) =>
  <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
           {reports.map(([group, reports]) =>
            !category||category === group
            ? <Fragment key={group}>
                  <Typography
                    variant='headline'
                    style= {{textTransform: 'capitalize'}}
                    >
                      {group}
                  </Typography>
                  <List component="ul">
                      {reports.map(({id, title}) =>
                          <ListItem
                          key={id} 
                          onClick={() => onSelect(id)}
                          button>
                          <ListItemText primary={title} />
                          <ListItemSecondaryAction>
                          <IconButton onClick={()=> onDelete(id)}>
                              <Delete/>
                            </IconButton>
                            <IconButton onClick={()=> onSelectEdit(id)}>
                              <Edit/>
                            </IconButton>
                          </ListItemSecondaryAction>
                          </ListItem>
                      )}
                  </List>
              </Fragment>
            :null
            
          )}
        </Paper>

      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
            {editMode
            ?<Form
              report={report}
              domains={domains}
              onSubmit={onEdit}/>
            :<Fragment>
                <Typography
                  variant="display1">
                    {title}
                </Typography>
                <Typography
                  variant="subheading"
                  style={{marginTop:20}}>
                    {description}

                </Typography>
            </Fragment>} 
        </Paper>
      </Grid>
  </Grid>