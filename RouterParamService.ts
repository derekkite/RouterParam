import {NavigationEnd, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";


export function RouterParamService<router, component1>(
  router: Router, component1: any): any
export function RouterParamService<router, component1, component2>(
  router: Router, component1: any, component2: any): any
export function RouterParamService<router, component1, component2, component3>(
  router: Router, component1: any, component2: any, component3: any): any
export function RouterParamService(router: Router, ...components: any[]): any {
  return router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(event => {
      let t: any = {};
      let found = false;
      // console.log('routerparamservice', router);
      let fchild = router.routerState.snapshot.root.firstChild;
      while (fchild) {
        if (fchild.component) {
          found = !!components.find(c => fchild.component === c)
        }
        
        if (found === true) {
  //        console.log(fchild.params)
          t = {...t, ...fchild.params};
        }
  
        fchild = fchild.firstChild;
      }

      return Object.keys(t).length > 0 ? t : undefined;
    })
  );
}


