

export class visitor {
        VisitorID: number=0;
        VisitID: number=0;
        Name: string | null;
        ID: string | null;
        IDType: string | null;
        NationalityID: number | null;
        MobileNo: string | null;
    }
    export class Visit {
        VisitID: number=0;
        VisitTypeID: number;

        RequestorID: string | null;
        VisitDate: string | null;
        StartTime: string | null;
        EndTime: string | null;
        MeetingRoom: number | null;
        Description: string | null;
        PrivateParking: boolean | null;
        StatusId: number | null;
        SupervisorComments: string | null;
        SecurityComments: string | null;
        CreateBy: string | null;
        CreatedDate: Date | null;
        UpdatedBy: string | null;
        UpdatedDate: Date | null;
        visitors: visitor[] | visitor[];
        usertype:string|null;
        RequesterType?:number=1;
        NumberofVisitors:number | null;
        constructor(){
            this.visitors=[];
this.RequesterType=1;
        }
    }
  

