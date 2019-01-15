import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

import Dialog from '../../Reports/Dialog'

export default ({domains, onReportCreate}) =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" noWrap style={{flex:1}}>
        Report Builder  
      </Typography>
      <Dialog 
         domains={domains}
         onCreate={onReportCreate}
         />
    </Toolbar>
  </AppBar>
