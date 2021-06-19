import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class TipsComponent implements OnInit {

  randomNum: number = Math.floor(Math.random() * 16)
  tips: any = [{
    para: "Wash up. Bathe in warm—not hot—water; use mild cleansers that don’t irritate; and wash gently—don’t scrub",
    },
    {
      para: "Block sun damage. Avoid intense sun exposure, use sunscreen, and wear protective clothing",
    },
    {
      para: "Don’t use tanning beds or sunlamps. They emit the same harmful UV radiation as the sun.",
    },
    {
      para: "Avoid dry skin. Drink plenty of water, and use gentle moisturizers, lotions, or creams.",
    },
    {
      para: "Reduce stress. Stress can harm your skin and other body systems.",
    },
    {
      para: "Get enough sleep. Experts recommend about 9 hours a night for teens and 7-8 hours for adults.",
    },
    {
      para: "Speak up. Talk to your doctor if you notice any odd changes to your skin, like a rash or mole that changes size or color.",
    },
    {
      para: "Use a safe, mineral-based sunscreen daily",
    },
    {
      para: "Take care of your gut. Research shows that underlying gut health issues can manifest on the skin in many ways, from acne to eczema.",
    },
    {
      para: "Practice a facial massage routine. Not only does it feel enjoyable, but facial massage can lessen tension and increase circulation,",
    },
    {
      para: "Stay active. Exercise increases blood flow throughout the body, thereby bringing vital oxygen, nutrients, and minerals to the skin.",
    },
    {
      para: "Sun protection doesn't stop at sunscreen.",
    },
    {
      para: "Use vitamin C. One of the best topical ingredients for glowing skin, plain and simple, is vitamin C",
    },
    {
      para: "Don't pick your skin. As a general rule of thumb, once your products are applied, keep your(most likely dirty) hands off of your face.",
    },
    {
      para: "Stay hydrated. It's not a myth: Drinking enough water is essential for overall skin health.",
    },
    {
      para: "Avoid potentially irritating foods. You already know what they are: foods that are packaged, processed, and high in sugar, as well as dairy.",
    }]

  constructor() { }

  ngOnInit(): void {
  }

  flip: string = 'inactive';

  toggleFlip() {
    this.randomNum = Math.floor(Math.random() * 16)
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

}
