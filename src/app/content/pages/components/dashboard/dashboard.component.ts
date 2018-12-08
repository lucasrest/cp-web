import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as objectPath from 'object-path';
import { LayoutConfigService } from '../../../../core/services/metronic/layout-config.service';
import { SubheaderService } from '../../../../core/services/metronic/layout/subheader.service';

@Component({
	selector: 'm-dashboard',
	templateUrl: './dashboard.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

	public config: any;

	constructor(
		private router: Router,
		private layoutConfigService: LayoutConfigService,
		private subheaderService: SubheaderService
	) {
	}

	ngOnInit(): void {}
}
