import React from 'react'

export default function Project({
    title, skills
}) {
    return (
        <div>
            <h2 className="title-h2">Title:{''}{ title }</h2>
            <h3 className="skill-h3">Skills:{''}{ skills }</h3>
        </div>
    )
}
