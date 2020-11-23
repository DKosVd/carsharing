import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={200}
    height={300}
    viewBox="0 0 200 300"
    backgroundColor="#c7c7c7"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="208" rx="2" ry="2" width="170" height="20" /> 
    <rect x="20" y="235" rx="2" ry="2" width="100" height="20" /> 
    <rect x="20" y="0" rx="2" ry="2" width="200" height="200" /> 
    <rect x="20" y="262" rx="0" ry="0" width="140" height="20" />
  </ContentLoader>
)

export default MyLoader