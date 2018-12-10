import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Course, CourseService, Pandect, Stage} from '../ucenter/course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course = null;
  pandect: Pandect = null;
  stages: Stage[] = null;

  constructor(private route: ActivatedRoute,
              private cs: CourseService) {
    // route.paramMap是Observable

    // route.queryParamMap.subscribe((pm: ParamMap) => {
    //   // 获取查询参数
    //   console.log(pm.get('foo'));
    // });
  }

  ngOnInit() {
    // 数据初始化
    this.route.paramMap.subscribe((pm: ParamMap) => {
      // 获取classId并通过它获取相关学习概况
      this.cs.getCourseById(pm.get('classId')).subscribe(
        c => this.course = c
      );
      this.cs.getStages(pm.get('classId')).subscribe(
        s => this.stages = s
      );
      this.cs.getPandect(pm.get('classId')).subscribe(
        p => {
          this.pandect = p;
        }
      );
    });
  }

}
