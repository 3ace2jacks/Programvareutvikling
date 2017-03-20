import { Injectable, OnChanges } from '@angular/core';
import { Course, Lecture } from './models';
import { Headers, Http, Response} from '@angular/http';
import { AuthenticationService } from '../auth/_services';
import { Observable } from 'rxjs';
import { apiUrl } from '../local-settings';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class CourseService {

    private courseUrl = apiUrl + '/courses/';
    private headers:Headers;

    constructor(private http: Http, private authenticationService:AuthenticationService) {
        this.updateHeaders();
    }

    updateHeaders() {
        console.log("Token changed");
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'JWT ' + this.authenticationService.getToken());
    }

    joinCourse(course:Course) : Observable<boolean> {
        return this.http.post(this.courseUrl + course.id + "/join/", JSON.stringify({}), { headers : this.headers }).
        map((response: Response) => {
            return true;
        })
    }

    getAllCourses(): Promise<Course[]> {
        return this.http.get(this.courseUrl + 'all' + '.json', {headers : this.headers} )
        .toPromise().then(response => response.json() as Course[])
        .catch(this.handleError);
    }

    getCourses(): Promise<Course[]> {
        return this.http.get(this.courseUrl + '.json', {headers : this.headers} )
        .toPromise().
        then(response => response.json() as Course[])
        .catch(this.handleError);
    }

    getCourse(id:number): Promise<Course> {
        return this.http.get(this.courseUrl + id + '.json', {headers : this.headers})
        .toPromise().then(response => response.json() as Course)
        .catch(this.handleError);
    }

    getLectures(id:number): Promise<Lecture[]> {
        return this.http.get(this.courseUrl + id + '/lectures' + '.json', {headers : this.headers})
        .toPromise()
        .then(response => response.json() as Lecture[])
        .catch(this.handleError);
    }

    addCourse(code: string, name: string, year: number, term: string) : Promise<void> {
        return this.http.post(this.courseUrl, JSON.stringify({code: code, name: name, year: year, term: term}), { headers : this.headers })
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

    getTopCourses(number:number): Promise<Course[]> {
        return this.getCourses().then(courses => courses.slice(0, number));
    }

    getLecture(id: number): Promise<Lecture> {
        let Url = apiUrl + "/courses/lecture/" + id;
        console.log(Url);
        return this.http.get(Url + '.json', {headers : this.headers})
        .toPromise().then(response => response.json() as Lecture)
        .catch(this.handleError);
    }
}
