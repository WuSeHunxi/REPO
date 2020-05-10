import pathToRegexp from "path-to-regexp";

//实现路由匹配路径的功能

export default function matchPath(path, pathname, option) {
  const keys = [];
  const regExp = pathToRegexp(path, keys, option);
  const result = regExp.exec(pathname);
  if (!result) {
    return;
  }
  let groups = Array.from(result);
  groups = groups.slice(1);
  //将参数进行处理
  const params = getParams(groups, keys);
  return {
    isExact: pathname === result[0],
    params,
    path,
    url: result[0],
  };
}

function getParams(groups, keys) {
  const obj = {};
  for (let i = 0; i < groups.length; i++) {
    const value = groups[i];
    const name = keys[i].name;
    obj[name] = value;
  }
  return obj;
}

function getOptions(option = {}) {
  const defaultOptions = {
    exact: false,
    sensitive: false,
    strict: false,
  };
  const opts = { ...defaultOptions, ...option };
  return {
    sensitive: opts.sensitive,
    strict: opts.strict,
    end: opts.exact,
  };
}
