import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Result} from '../../../common/result';
import {map} from 'rxjs/operators';
import {of} from 'rxjs';

export interface Course {
  id: number;
  name: string;
  phase: string;
  poster: string;
}

// 学习概况
export interface Pandect {
  study_time: number;
  rank: number;
  training: string;
  graduation_time: Date;
}

// 学习阶段
export interface Stage {
  id: number;
  name: string;
  title: string;
  sub_title: string;
  state: number; // 0-新的，1-进行中，2-完成
  videos: string; // 该阶段相关视频id，总数组成字符串
}


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  url = '/api/users/';

  courses: Course[] = null;
  pandect: Pandect = null;

  constructor(private http: HttpClient) {
  }

  // 获取我的所有班级信息
  getMyCourses() {
    if (this.courses) { // 如果以获取过列表数据，则直接返回之
      return of(this.courses);
    }
    return this.http.get<Result<Course[]>>(this.url + 'my-courses')
      .pipe(
        map((result: Result<Course[]>) => {
          // 缓存数据
          this.courses = result.data;
          return result.data;
        })
      );
  }

  // 根据classId获取其详情
  getCourseById(id) {
    if (this.courses) {
      // 如果已经有缓存了，则从缓存中过滤数据
      const course = this.courses.find(c => c.id === +id);
      return of(course);
    }
    // 如果缓存中不存在，则从服务器获取
    return this.http.get<Result<Course>>(this.url + 'my-course/' + id)
      .pipe(
        map((result: Result<Course>) => {
          return result.data;
        })
      );
  }


  //  获取学习概况
  getPandect(classId) {
    if (this.pandect) {
      return of(this.pandect);
    }

    return this.http.get(this.url + 'pandect/' + classId)
      .pipe(
        map((result: Result<Pandect>) => {
          console.log(result.data);
          if (result.success) {
            this.pandect = result.data;
            return this.pandect;
          } else {
            this.pandect = null;
            return null;
          }
        })
      );
  }

  // 查询学习路径
  getStages(classId) {
    return this.http.get(this.url + 'stages/' + classId)
      .pipe(
        map((r: Result<Stage[]>) => {
          if (r.success) {
            return r.data;
          } else {
            return null;
          }
        })
      );
  }

}
