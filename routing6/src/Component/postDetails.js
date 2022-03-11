import React from 'react'
import {useParams, useSearchParams} from 'react-router-dom'

const PostDetails = () => {

    let params = useParams()
    let [searchParams] = useSearchParams()

    return(
        <>
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3>{params.topic} Page</h3>
                </div>
                <div className="panel-body">
                    <p>
                        {params.topic} Details Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः
                    </p>
                    <h4>You are on page number {searchParams.getAll('page')} </h4>
                </div>
            </div>
        </>
    )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

export default PostDetails;