import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { problems } from 'src/app/data/problems';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss'],
})
export class ProblemComponent {
  problem: any;
  output: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.problem = problems.find((p) => p.id === id);
  }

  runCode() {
    try {
      const result = new Function(`
        ${this.problem.code}
        return twoSum([2,7,11,15], 9);
      `)();
      this.output = JSON.stringify(result);
    } catch (err: any) {
      this.output = 'Error: ' + err.message;
    }
  }

  goHome() {
    window.location.href = '/';
  }
}
