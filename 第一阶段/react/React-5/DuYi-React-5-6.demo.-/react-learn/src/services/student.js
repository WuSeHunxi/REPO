const appkey = "demo13_1545210570249";

/**
 * 获取所有学生
 */
export async function getAllStudents() {
  return await fetch("/api/student/findAll?appkey=" + appkey)
    .then((resp) => resp.json())
    .then((resp) => resp.data);
}

export async function getStudents(page = 1, limit = 10) {
  return await fetch(
    `/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`
  )
    .then((resp) => resp.json())
    .then((resp) => resp.data);
}

/**
 * 导出的方法叫searchStudents，分为两种情况
 * 如果传递了key属性（key有值），则按照关键字和性别进行搜索
 * 如果key没有值，则对所有学生进行分页
 * @param {*} param0
 */
export async function searchStudents({
  page = 1, //函数的默认参数
  limit = 10,
  key = "",
  sex = -1,
} = {}) {
  if (key) {
    //搜索
    const resp = await fetch(
      `/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`
    )
      .then((resp) => resp.json())
      .then((resp) => resp.data);
    //统一处理数据的格式
    resp.datas = resp.searchList;
    delete resp.searchList;
    return resp;
  } else {
    //忽略性别，查询全部
    const resp = await getStudents(page, limit);
    //统一处理数据的格式
    resp.datas = resp.findByPage;
    delete resp.findByPage;
    return resp;
  }
}
