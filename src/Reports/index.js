import React, {Fragment} from 'react'
import {AppBar, Toolbar, Grid, Paper, Typography, List, ListItem, ListItemSecondaryAction, IconButton, Divider, Dialog} from '@material-ui/core'
import ListItemText from '@material-ui/core/ListItemText';
import {Delete, Edit} from '@material-ui/icons/'
import Form from './RepForm'

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
     title = '',
     Footnote = '',
     shell = '',
     population=''},
  onDelete,
  onSelectEdit,
  editMode,
  onEdit,
  onBlockCreate
  }) =>
  <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
           {reports.map(([group, reports]) =>
            !category||category === group
            ? <Fragment key={group}>
                  <Typography
                    variant='h6'
                    >
                      {group}
                  </Typography>
                  <List component="ul">
                     <Typography variant='body2'>
                          {reports.map(({id}) =>
                                <ListItem
                                key={id} 
                                onClick={() => onSelect(id)}
                                button>
                                <ListItemText primary={id} />
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
                     </Typography>
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
                <Typography variant="h6">
                    Title:
                </Typography>
                <Typography variant="subheading" style={{bottomTop:20}}>
                    {title}
                </Typography>
                <Divider/>
                <Divider/>
                <Typography variant="h6">
                    Population:
                </Typography>
                <Typography
                  variant="subheading">
                    {population}
                </Typography>
                <Divider/>
                <Typography variant="h6">
                    Footnote:
                </Typography>
                <Typography
                  variant="subheading">
                    {Footnote}
                </Typography>
                <Divider/>
                <Typography variant="h6">
                    Shell:
                </Typography>
                <Typography
                  variant="subheading">
                    {shell}
                </Typography>
                <Divider/>
            </Fragment>} 
        </Paper>
      </Grid>


      <Grid item sm>
        <Paper style={styles.Paper}>
          
          <AppBar position="static">
              <Toolbar>
                  <Typography variant="headline" color="inherit" noWrap style={{flex:1}}>
                    Block Builder  
                  </Typography>
                  <Dialog 
                    onCreate={onBlockCreate}
                    block = {"New block"}
                    />
              </Toolbar>
          </AppBar>

        </Paper>
      </Grid>
  </Grid>