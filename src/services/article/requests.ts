import axios from 'axios'
import { Article } from 'types/article'

export const getArticles = async (offset?: number, limit?: number) => {
  const { data } = await axios.request<{articlesCount: number; articles: Article[]}>({
    method: 'get',
    url: 'https://conduit.productionready.io/api/articles',
    params: {
      limit: limit || 10,
      offset: offset || 0
    }
  })

  return data.articles
}
