import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={278}
        height={452}
        viewBox="0 0 278 452"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="145" y="260" rx="0" ry="0" width="20" height="0" />
        <rect x="0" y="0" rx="0" ry="0" width="276" height="207" />
        <rect x="16" y="229" rx="0" ry="0" width="244" height="48" />
        <rect x="16" y="295" rx="0" ry="0" width="60" height="30" />
        <rect x="16" y="339" rx="0" ry="0" width="173" height="30" />
        <rect x="16" y="388" rx="0" ry="0" width="246" height="48" />
    </ContentLoader>
)

export default Skeleton






