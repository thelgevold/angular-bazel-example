import { NgModule } from '@angular/core';

import { TeamComponent } from './team.component';

import {Module_airplane_team0} from '../team0/module';
import {Module_airplane_team1} from '../team1/module';
import {Module_airplane_team2} from '../team2/module';
import {Module_airplane_team3} from '../team3/module';
import {Module_airplane_team4} from '../team4/module';
import {Module_airplane_team5} from '../team5/module';
import {Module_airplane_team6} from '../team6/module';
import {Module_airplane_team7} from '../team7/module';
import {Module_airplane_team8} from '../team8/module';
import {Module_airplane_team9} from '../team9/module';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    Module_airplane_team0,
    Module_airplane_team1,
    Module_airplane_team2,
    Module_airplane_team3,
    Module_airplane_team4,
    Module_airplane_team5,
    Module_airplane_team6,
    Module_airplane_team7,
    Module_airplane_team8,
    Module_airplane_team9
  ]
})
export class TeamModule {

}