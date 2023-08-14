import React from 'react'
import './CourseBar.css'
import { Link } from 'react-router-dom'

function CourseBar({ languageName }) {
    return (
        <div className="course-bar">
            <div className="container-course-bar">
                <Link to="/home">
                    <img
                        src="../icons/back_icon.svg"
                        alt="Назад"
                        className='back-icon-course-bar' />
                </Link>
                <h2 className='title-props-course-bar'>{languageName}</h2>
            </div>
        </div>
    )
}

export default CourseBar