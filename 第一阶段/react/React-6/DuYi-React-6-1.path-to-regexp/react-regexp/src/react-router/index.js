import pathTpRegexp, { pathToRegexp } from "path-to-regexp";

export default function mathpath(path, options) {
  const pathname = window.location.pathname;
  const keys = [];
  const regExp = pathToRegexp(path, keys);
}
