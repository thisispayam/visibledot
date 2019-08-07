import React, { Component } from 'react'
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/DirectorySelectors';

import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss';
import { create } from 'handlebars';

const Directory =({sections}) => {
    // const items = this.state.sections.map(({ id, title, imageUrl, size, linkUrl }) => <MenuItem key={id} title={title} imageUrl={imageUrl} id={id} size={size} linkUrl={linkUrl} />)
    const items = sections.map(({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />)

    return (
        
        <div className='directory-menu'>
            {items}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);
