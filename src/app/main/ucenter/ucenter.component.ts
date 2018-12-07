import {Component, EventEmitter, OnInit} from '@angular/core';
import {UserService} from '../../user/user.service';
import {avatarSrc} from '../../../environments/environment';
import {UploadInput, UploadOutput} from 'ngx-uploader';

@Component({
  selector: 'app-ucenter',
  templateUrl: './ucenter.component.html',
  styleUrls: ['./ucenter.component.css']
})
export class UcenterComponent implements OnInit {
  isHidden = true;

  // 用户名
  username = 'aa';
  // 用户头像url
  avatar = 'http://kkbconsole2.kaikeba.com/statics/images/avatar_100_100.png';

  // 上传配置
  uploadInput: EventEmitter<UploadInput> = new EventEmitter<UploadInput>();

  constructor(private us: UserService) {
  }

  ngOnInit() {
    if (this.us.user) {
      console.log(this.us.user);
      this.username = this.us.user.username;
      if (this.us.user.avatar) {
        this.avatar = avatarSrc + this.us.user.avatar;
      }
    }
  }

  onUploadOutput(output: UploadOutput) {
    if (output.type === 'allAddedToQueue') {
      // 开始上传
      this.uploadInput.emit({
        type: 'uploadAll',
        url: '/api/users/uploadAvatar',
        method: 'POST'
      });
    } else if (output.type === 'done') {
      // 上传完成
      if (output.file.responseStatus === 200 && output.file.response.success) {
        this.avatar = avatarSrc + output.file.response.data;
      } else {
        alert('上传失败！');
      }
    }
  }

}
