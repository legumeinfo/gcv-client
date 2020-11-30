// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// store
import { Store } from '@ngrx/store';
import * as regionActions from '@gcv/gene/store/actions/region.actions';
import * as fromRoot from '@gcv/store/reducers';
// app
import { AppConfig, ConfigError } from '@gcv/app.config';
import { GET, POST, GRPC } from '@gcv/core/models';
import { Region } from '@gcv/gene/models';
import { HttpService } from '@gcv/core/services/http.service';
import { grpcRegionToModel } from './shims';
// api
import { ChromosomeRegionGetReply, ChromosomeRegionGetRequest }
  from '@gcv-assets/js/grpc/gcv/services/chromosomeregion_pb';
import { ChromosomeRegionClient }
  from '@gcv-assets/js/grpc/gcv/services/ChromosomeregionServiceClientPb';


@Injectable()
export class RegionService extends HttpService {

  constructor(private _http: HttpClient, private _store: Store<fromRoot.State>) {
    super(_http);
  }

  getRegion(chromosome: string, start: number, stop: number, serverID: string):
  Observable<Region> {
    start = Math.floor(start);
    stop = Math.ceil(stop);
    const request = AppConfig.getServerRequest(serverID, 'region');
    if (request.type === GET || request.type === POST) {
      const body = {chromosome, start, stop};
      return this._makeHttpRequest<{region: Region}>(request, body)
        .pipe(
          map(({region}) => region),
          catchError((error) => throwError(error)));
    } else if (request.type === GRPC) {
      const client = new ChromosomeRegionClient(request.url);
      const grpcRequest = new ChromosomeRegionGetRequest();
      grpcRequest.setChromosome(chromosome);
      grpcRequest.setStart(start);
      grpcRequest.setStop(stop);
      const clientRequest = client.get(grpcRequest, {});
      return from(clientRequest).pipe(
        map((result: ChromosomeRegionGetReply) => {
          const region = grpcRegionToModel(result.getRegion(), serverID);
          return region;
        }),
        catchError((error) => throwError(error)),
      );
    }
    const error = new ConfigError('Unsupported request type \'' + request.type + '\'');
    return throwError(error);
  }

  regionSearch(chromosome: string, start: number, stop: number, source: string):
  void {
    this._store.dispatch(new regionActions.Get({chromosome, start, stop, source}));
  }

}
