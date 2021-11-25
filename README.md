# A Simple Front-Backend Backstage Management System
A simple back-end management system, with React as the front end, Spring-Boot as the back end, and Mysql as the database.

### Language(s) Will Touches:
`JAVA`
`mysql`
`React`
`RESTful`

## Required:
- React
- [IntelliJ IDEA Download](https://www.jetbrains.com/idea/download/#section=windows) : "Community" version is fine.
- MySql and source the `react_demo.sql` into your mysql database
  |Demo (Like this)|
  |---|
  |![Demo](https://github.com/err03/springboot-react-mysql_management/blob/main/imgToShow/source_sql_demo.png "Source Demo")|
  |select * from student;|
  |<img src="https://github.com/err03/springboot-react-mysql_management/blob/main/imgToShow/select_fromStudent.png" alt="select student">|

# Guide
- If want to run `final_code/react_startcode/`, don't forgot ```npm install``` under `/react_startcode/`.

# Way to Know 
- [Create Spring Boot](#Spring-Boot) <br>
- [Create React](#React)

## Spring-Boot
- How to create a spring-boot project?
  1. go to https://start.spring.io/ to create spring-boot project <br>
    ![springinitializr](https://github.com/err03/springboot-react-mysql_management/blob/main/imgToShow/springinitializr.png "spring")
  2. use IntelliJ to install plugin
 
      |Install the plugin: File->Setting->Plugin , Search "Spring Assistant" |
      |---|
      |![IntelliJ](https://github.com/err03/springboot-react-mysql_management/blob/main/imgToShow/intellij-plugin.png "spring")|
      |New a project, click "Spring Assistant"|
      |![IntelliJ](https://github.com/err03/springboot-react-mysql_management/blob/main/imgToShow/intellij-springboot.png "spring")|
      |Next and Next, Add dependencies (at least one), Next then Finish|
      |![IntelliJ](https://github.com/err03/springboot-react-mysql_management/blob/main/imgToShow/intellij-springboot-1.png "spring")|

## React
- How to create React ?
  - ```npm install -g create-react-app```
  - ```create-react-app hello-react``` or
    - ```npm init react-app react_startcode```
  
```npm install``` : install the package(dependencies) to use

```npm start``` : to start the react app

--- 
# Will Needs
```npm install axios``` :  use axios to send request data (post, get, and delete)

```npm install antd``` : install the UI Component, [Ant Design of React-Components](https://ant.design/components "Antd design")

```
<!--lombok-->
<dependency>
  <groupId>org.projectlombok</groupId>
  <artifactId>lombok</artifactId>
  <version>1.18.20</version>
</dependency>
```

# Final View
Screen 1|Screen 2|
---|---|
<img src="https://github.com/err03/springboot-react-mysql_management/blob/main/imgToShow/sc1.png" alt="Screen 1" height="280" width="880">|<img src="https://github.com/err03/springboot-react-mysql_management/blob/main/imgToShow/sc2.png" alt="Screen 2" height="280" width="880"> |
