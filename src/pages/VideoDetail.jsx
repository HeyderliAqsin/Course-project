import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/API";
import './videodetail.scss'

const VideoDetail = () => {
  const { id } = useParams();
  const [singleVideo, setSingleVideo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/Course/videoLink/${id}`)
      .then((c) => c.json())
      .then((c) => setSingleVideo(c));
    setLoading(false);
    return () => {};
  }, [id]);
  return (
    <section id="videoDetail">
      <div className="container">
        {singleVideo != null ? (
          <div style={{ width: "300px" }} className="videoContent">
            <iframe src={singleVideo.videoLink.link} frameborder="0" allowFullScreen title="Video player"/>
          </div>
        ) : (
          <div className="col-lg-4">
            <Skeleton width={"20%"} count={1} />
            <Skeleton width={"40%"} count={2} />
            <Skeleton width={"15%"} count={1} />
            <Skeleton width={"80%"} count={4} />
            <Skeleton width={"15%"} count={1} />
          </div>
        )}
        
      </div>
    </section>
  );
};

export default VideoDetail;
