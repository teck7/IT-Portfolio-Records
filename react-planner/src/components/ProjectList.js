import React from 'react'
import Project from './Project'

export default function ProjectList({
    items
}) {
    return (
        <div>
            {
                items.map((item) =>(
                  <Project title={ item.title }
                           skills={ item.skills }
                  />
              ))
            }
        </div>
    )
}
