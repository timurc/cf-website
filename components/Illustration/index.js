import React from 'react'
import './style.less'

export default class Illustration extends React.Component {
    render () {
        const { illustration, className, ...other } = this.props

        const svg = require('./' + illustration + '.svg')

        return (
            <div dangerouslySetInnerHTML={{ __html: svg }}
                className={className}
                { ...other }>
            </div>
        )
    }
}
