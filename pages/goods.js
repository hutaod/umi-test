/**
 * title: 商品中心
 * Routes:
 *    - ./routes/PrivateRoute.js
 */

import styles from './goods.css'
import { connect } from 'dva'
import { useEffect } from 'react'

export default connect(
  state => ({ goodsList: state.goods, loading: state.loading }),
  {
    addGood: title => ({
      type: 'goods/addGood',
      payload: title
    }),
    getList: () => ({
      type: 'goods/getList'
    })
  }
)(function({ goodsList, addGood, loading, getList }) {
  useEffect(() => {
    getList()
  }, [])
  // console.log(loading)
  if (loading.effects['goods/getList']) {
    return <div>加载中。。。</div>
  }
  return (
    <div className={styles.normal}>
      <h1>Page goods</h1>
      <ul>
        {goodsList.map(good => (
          <li key={good.title}>{good.title}</li>
        ))}
      </ul>
      <button onClick={() => addGood('商品~' + new Date().getTime())}>
        新增
      </button>
    </div>
  )
})
