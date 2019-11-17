//请求统一管理
import httpRequest from './http'
export default {
    // 新闻
    getNews: p => httpRequest.get('/api/news', p)
}
