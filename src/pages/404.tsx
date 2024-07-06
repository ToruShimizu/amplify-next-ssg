import { NextPage } from 'next'
import Router from 'next/router'
import { useEffect, useState } from 'react'
 
// S3 + CloudFront構成でデプロイする場合は、CloudFrontで以下のカスタムエラーレスポンスを作成する必要があります
// - HTTPエラーコード: 404
// - レスポンスのページパス: /404/index.html
// - HTTPレスポンスコード: 200
//
// 参考: https://github.com/vercel/next.js/discussions/17711#discussioncomment-323735
const Custom404: NextPage = () => {
  const [isNotFound, setIsNotFound] = useState(false)
 
  useEffect(() => {
    const pathNames = window.location.pathname.split('/')
    // /post/[pid] を処理する場合
    if (pathNames[1] === 'foo') {
      Router.replace(window.location.pathname)
    } else {
      setIsNotFound(true)
    }
  }, [])
 
  if (isNotFound) return <h1>404 - Page Not Found</h1>
 
  return null
}
 
export default Custom404