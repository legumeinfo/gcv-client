// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// store
import { Store } from '@ngrx/store';
import * as fromRoot from '@gcv/store/reducers';
import * as fromSearch from '@gcv/search/store/selectors/search/';
// app
import { AppConfig } from '@gcv/app.config';
import { GET, POST, GRPC } from '@gcv/core/models';
import { Result } from '@gcv/search/models';
import { HttpService } from '@gcv/core/services/http.service';
// api
import { SearchReply, SearchRequest }
  from '@gcv-assets/js/grpc/gcv/services/search_pb';
import { SearchClient }
  from '@gcv-assets/js/grpc/gcv/services/SearchServiceClientPb';


@Injectable()
export class SearchService extends HttpService {

  constructor(private _http: HttpClient,
              private _store: Store<fromRoot.State>) {
    super(_http);
  }

  search(query: string, serverID: string): Observable<Result> {
    const request = AppConfig.getServerRequest(serverID, 'search');
    if (request.type === GET || request.type === POST) {
      const body = {q: query};
      return this._makeHttpRequest<Result>(request, body)
        .pipe(catchError((error) => throwError(error)));
    } else if (request.type === GRPC) {
      const client = new SearchClient(request.url);
      const grpcRequest = new SearchRequest();
      grpcRequest.setQuery(query);
      const clientRequest = client.search(grpcRequest, {});
      return from(clientRequest).pipe(
        map((result: SearchReply) => {
          const genes = result.getGenesList();
          const regions = result.getRegionsList().map((r) => r.toObject());
          return {genes, regions};
        }),
        catchError((error) => throwError(error)),
      );
    }
  }

  getSearchQuery(): Observable<string> {
    return this._store.select(fromSearch.getQuery);
  }

  getSearchResultGenes(): Observable<{source: string, name: string}[]> {
    return this._store.select(fromSearch.getResultGenes);
  }

  getSearchResultRegions():
  Observable<{source: string, gene: string, neighbors: number}[]> {
    return this._store.select(fromSearch.getResultRegions);
  }

}
