import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Route } from "react-router-dom";
import Welcome from "./Welcome";
import StudentList from "./student/StudentList";
import StudentAdd from "./student/StudentAdd";
import CourseList from "./course/CourseList";
import CourseAdd from "./course/CourseAdd";

export default function Admin() {
  return (
    // 布局：头部+侧边栏+主体内容
    <Layout header={<Header />} aside={<Menu />}>
      {/* 主体区域需要路由组件匹配地址显示相应的组件 */}
      <Route path="/" exact component={Welcome} />
      <Route path="/students" exact component={StudentList} />
      <Route path="/students/add" exact component={StudentAdd} />
      <Route path="/courses" exact component={CourseList} />
      <Route path="/courses/add" exact component={CourseAdd} />
    </Layout>
  );
}
