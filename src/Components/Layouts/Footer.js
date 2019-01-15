import React from 'react'
import {Paper, Tabs, Tab} from '@material-ui/core';

export default ({domains, category, onSelect}) => {
    const index = category 
         ? domains.findIndex(group => group === category)+1
         : 0
    
    const onIndexSelect = (e, index) => 
        onSelect(index === 0 ? '': domains[index-1])
     

    return <Paper>
        <Tabs
        value = {index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        centered
        >
        <Tab label='All' />
        {domains.map(AD => 
            <Tab key={AD} label={AD} />
        )}
        </Tabs>
    </Paper>
}
