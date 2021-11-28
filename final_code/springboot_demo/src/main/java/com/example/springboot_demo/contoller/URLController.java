package com.example.springboot_demo.contoller;

import com.example.springboot_demo.student.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class URLController {

    @Autowired
    JdbcTemplate jdbc;

    @GetMapping("list")
    public List<Map<String,Object>> studentList(){
        String sql = "select * from student";
        List<Map<String,Object>> list_students = jdbc.queryForList(sql);

        return list_students;
    }

    @DeleteMapping("delete/{id}")
    public int deleteStudent(@PathVariable("id") int id){
        String sql = "delete from student where id = ?";
        return jdbc.update(sql,id);
    }

    @PostMapping("add")
    public int addStudent(@RequestBody Student student){
        String sql = "insert into student(name,age,grade) values(\"" + student.getName() + "\"," + student.getAge() + "," + student.getGrade() + ")";
        return jdbc.update(sql);
    }

    @PostMapping("update")
    public int updateStudent (@RequestBody Student student){
        String sql = "update student set name = ?,age = ?, grade = ? where id ="+student.getId();

        Object[] objects = new Object[3];
        objects[0] = student.getName();
        objects[1] = student.getAge();
        objects[2] = student.getGrade();

        System.out.println(student);
        try {
            return jdbc.update(sql, objects);
        }catch (Exception e){
            System.out.println(e);
            return -1;
        }
    }
}
