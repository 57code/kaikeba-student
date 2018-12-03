import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // route.paramMap是Observable
    route.paramMap.subscribe((pm: ParamMap) => {
      // 获取必选参数
      console.log(pm.get('id'));
      // 获取可选参数
      console.log(pm.get('username'));
    });
    route.queryParamMap.subscribe((pm: ParamMap) => {
      // 获取查询参数
      console.log(pm.get('foo'));
    });
  }

  ngOnInit() {
  }

}
