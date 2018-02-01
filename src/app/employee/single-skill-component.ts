import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';

interface Skill {
    name: string;
    level: string;
    version: number;
}
@Component({
    moduleId: module.id,
    selector: 'app-single-skill',
    templateUrl: 'single-skill-component.html',
    styleUrls: ['./employee.component.css']
})

export class SingleSkillsComponent implements OnInit {
    skill: Skill;
    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef) {
        this.skill = {
            name: 'Angular',
            level: 'expert',
            version: 4
        };
    }
    addSkill = () => {
        console.log('Add Skill');
        const factory = this.componentFactoryResolver.resolveComponentFactory(SingleSkillsComponent);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
    removeSkill = () => {
        console.log('Remove Skill');
        const factory = this.componentFactoryResolver.resolveComponentFactory(SingleSkillsComponent);
        const ref = this.viewContainerRef.clear();
    }
    ngOnInit() { }
}
