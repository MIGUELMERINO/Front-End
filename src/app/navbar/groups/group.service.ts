import { Injectable } from '@angular/core';
import { CrudService } from '../../services/crud/crud.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private crud: CrudService) { }

  Listgroups() {
    return this.crud.get(`groups/miguel`);
  }

  listGroupId(id) {
    return this.crud.get(`groups/miguel/getByGroup?id=${id}`);
  }
}
