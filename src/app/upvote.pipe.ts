import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upvote',
  pure: false,
})
export class UpvotePipe implements PipeTransform {

transform(array: Array<any>): Array<any> {

    array.sort((a: any, b: any) => {
      if (a.upVotes < b.upVotes) {
        return 1;
      } else if (a.upVotes > b.upVotes) {
        return -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
