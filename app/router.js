import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('topics', {path: "/"});
  this.route('topic', {path: "/topic/:topic_id" });
  //this.resource("topics", {path: "/"});
  //this.resource("index", {path: "/"});

  //this.resource("topics", function () {
    //return this.store.find('topic');
  //  this.route("index");
    // this.route("popular");
    // this.route("new");
    // this.route("for-the-day");
  //});
   
  // this.resource("suggestions", function() {}); 
  // this.resource("suggestion", {path: "/suggestion/:suggestion_id"}, function() {
       //  this.route("new-topic");  
       //  this.route("new-scripture");
       //  this.route("add-scripture");
       //  this.route("add-prayer");
       //  this.route("add-video");
  // });


  // this.route("info", function() {
  	 //  this.route("vision");
     //  this.route("faqs");
     //  this.route("guidelines");
     //  this.route("get-started");
     //  this.route("legal");
  // });
});

export default Router;

