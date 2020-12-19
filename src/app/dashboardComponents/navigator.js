import React from 'react';
import * as PropTypes from "prop-types";
import {connect} from "react-redux";
import _ from "lodash";
import clsx from 'clsx';
import {Drawer, withStyles, List, ListItem, ListItemIcon, ListItemText, Divider, } from "@material-ui/core";
import {People, DnsRounded, PermMediaOutlined, Settings} from '@material-ui/icons';

import {styles} from './../../css/navigatorStyle';
import {change_tab} from "../../store/actions/actionCreators";

const categories = [
    {
        id: 'Overview',
        children: [
            { id: 'Users', icon: <People/>, active: false},
            { id: 'Chapters', icon: <DnsRounded />, active: false },
            { id: 'Income', icon: <PermMediaOutlined />, active: false}
        ],
    },
    {
        id: 'About',
        children: [
            { id: 'Contact', icon: <Settings /> }
        ],
    },
];

class Navigator extends React.Component {

    handleClick = (id) => {
        _.forEach(categories, function (o) {
            //add item active
        });
        this.props.change_tab(id)
    };

    render() {
        const {classes, change_tab, ...other} = this.props;
        return (
            <Drawer variant="permanent" {...other}>
                <List disablePadding>

                    <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
                        සිතුමිණ Synergy Education
                    </ListItem>

                    {categories.map(({id, children}) => (
                        <React.Fragment key={id}>

                            {/*Main Headers*/}
                            <ListItem className={classes.categoryHeader}>
                                <ListItemText
                                    classes={{
                                        primary: classes.categoryHeaderPrimary,
                                    }}
                                >
                                    {id}
                                </ListItemText>
                            </ListItem>

                            {/*Child Components*/}
                            {children.map(({id: childId, icon, active}) => (
                                <ListItem
                                    key={childId}
                                    button = {true}
                                    className={clsx(classes.item, active && classes.itemActiveItem)}
                                    onClick={() => this.handleClick(childId)}
                                >
                                    <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.itemPrimary,
                                        }}
                                    >
                                        {childId}
                                    </ListItemText>
                                </ListItem>

                            ))}

                            <Divider className={classes.divider}/>
                        </React.Fragment>
                    ))}
                </List>
            </Drawer>
        )
    }
}

const mapStateToProps = () => {
    return {
    }
};

const mapDispatchToProps = {
    change_tab: change_tab
};

Navigator.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navigator));