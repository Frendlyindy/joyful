import { Component, OnInit } from '@angular/core';
import { ToolsService } from '../tools.service';
import { Tools } from '../tools.model';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent implements OnInit {
  tools: Tools[];
  constructor(private toolService: ToolsService) {}
  ngOnInit(): void {
    this.toolService.getTools().subscribe((response: any) => {
      this.tools = response.map((tool: any) => ({
        img: tool.img,
        name: tool.name,
        description: tool.description,
      }));
    });
  }
}
