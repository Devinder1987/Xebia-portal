import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { SingleSkillsComponent } from './single-skill-component';

interface Skill {
    name: string;
    level: string;
    version: number;
}
@Component({
    moduleId: module.id,
    selector: 'app-skills',
    templateUrl: 'skills-component.html',
    styleUrls: ['./employee.component.css']
})

export class SkillsComponent implements OnInit {
    skill: Skill;
    rootViewContainer;
    @ViewChild('dynamic', {
        read: ViewContainerRef
    }) viewContainer: ViewContainerRef;
    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef) {
        this.skill = {
            name: 'Angular',
            level: 'expert',
            version: 4
        };
    }
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    addSkill = () => {
        console.log('Add Skill');
        this.setRootViewContainerRef(this.viewContainerRef);
        const factory = this.componentFactoryResolver.resolveComponentFactory(SingleSkillsComponent);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
    ngOnInit() { }
}
