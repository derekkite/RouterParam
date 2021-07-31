# RouterParam
function that returns router params per component

Pass the component, and you can extract the params without having to know the path. Particularly useful if you lazy load a component.


  routerview = createEffect(() =>
    RouterParamService(this.router,
      JobContainerComponent)
      .pipe(
        map((data: { jobid: string }) => data && data.jobid
          ? setPrimaryJob({tid: data.jobid})
          : setPrimaryJob({tid: ""})
        )
      ));
  
  
  routerindex = createEffect(() =>
    RouterParamService(this.router, JobfilesViewContainer)
      .pipe(
        map((data: { index: string }) => data && data.index
          ? setJobFileIndex({index: +data.index})
          : setJobFileIndex({index: 0})
        )
      ));
