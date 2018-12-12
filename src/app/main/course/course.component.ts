import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Course, CourseService, Pandect, Stage} from '../ucenter/course/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.less']
})
export class CourseComponent implements OnInit {
  course: Course = null;
  pandect: Pandect = null;
  stages: Stage[] = null;

  // 页签
  tab = 'path';

  // 当前日期
  today = new Date();

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

    // 监听hash变化, 跳转至对应元素位置
    this.route.fragment.subscribe(fragment => {
      const elem = document.querySelector('#' + fragment);
      if (elem) {
        // 跳转至对应id元素位置
        elem.scrollIntoView();
      }
    });

  }

}
