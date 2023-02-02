export type MainPostData = {
  title: string,
  excerpt: string,
  author: string,
  date: string
}

export type MainPostProps = {
  mainPostData: MainPostData,
  id: string
}

export type PostItemProps = {
  image: string,
  category: string,
  title: string,
}