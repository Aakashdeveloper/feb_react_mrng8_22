import React from 'react'
import {Link} from 'react-router-dom'

const Post = (props) => {
    // console.log(props)
    return(
        <>
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3>Post Page</h3>
                </div>
                <div className="panel-body">
                    <p>
                        Post Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः
                    </p>
                    <h2>Javascript</h2>
                    <Link to={`/post/JavaScript?page=1&test=abc`} className="btn btn-danger">Details</Link>
                    <h2>React</h2>
                    <Link to={`/post/React?page=2`} className="btn btn-success">Details</Link>
                    <h2>Node</h2>
                    <Link to={`/post/Node?page=3`} className="btn btn-info">Details</Link>
                </div>
            </div>
        </>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

export default Post;