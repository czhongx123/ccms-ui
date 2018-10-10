// 检查当前script标签是否已存在
export default moduleName => {
  if (window[moduleName]) {
    return true
  }
  return false
}
