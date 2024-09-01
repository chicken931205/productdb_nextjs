import React from "react";

function SingleMember({ videoP }) {
  const { videoPath } = videoP;
  return (
    <video className="rounded-lg" autoPlay width="auto" height="auto" controls>
      <source src={`${videoPath}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default SingleMember;
