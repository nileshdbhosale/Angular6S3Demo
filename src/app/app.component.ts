import { Component } from '@angular/core';
import * as AWS from 'aws-sdk';
import { Key } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular4-s3-demo';
  //AWS = require('aws-sdk');
  s3Bucket = new AWS.S3();

  constructor(){
    console.log("Inside Constructor !!!");
  }

public GetS3File(){
  console.log("Inside Get File Method");
    var params = {Bucket: 'myfirstawsbucketdemo', Key: 'text.txt'};
    this.s3Bucket.getSignedUrl('getObject', params, function(err, url){
            if(err){
                console.log(err);
            }else {
                console.log(url);
            }
    })
  }
}
