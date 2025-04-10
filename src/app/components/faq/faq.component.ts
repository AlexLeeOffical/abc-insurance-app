import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: 'How do I find my policy number?',
      answer: 'Your policy number can be found on your policy documents, insurance cards, or by logging into your ABC account. For assistance, contact ABC support.'
    },
    {
      question: 'Do I need to submit the original supporting documents through post?',
      answer: 'No, for EASY Claims, you can submit digital copies of your supporting documents through our online portal. Original documents should be kept for your records.'
    },
    {
      question: 'Do I need to print the completed claim form and send it back to you?',
      answer: 'No, with EASY Claims, all forms can be completed and submitted digitally. There is no need to print and mail forms.'
    },
    {
      question: 'Is there a time limit on filing my claim?',
      answer: 'Yes, claims should be filed as soon as possible, typically within 30 days of the incident. Specific timeframes may vary by policy type. Contact ABC support for details.'
    },
    {
      question: 'Should I wait until all the supporting documents are available?',
      answer: 'No, you can initiate your claim immediately and add supporting documents as they become available. This helps expedite the claims process.'
    },
    {
      question: 'What are Notification No. and Claim No.?',
      answer: 'The Notification No. is issued when you first report an incident. The Claim No. is assigned once your claim is formally processed. Both are important reference numbers for tracking your claim.'
    },
    {
      question: 'How will I receive the Notification No. and Claim No.?',
      answer: 'These numbers will be sent to you via email and SMS after you submit your claim. You can also view them in your online ABC account.'
    },
    {
      question: 'What should I do if I want to receive my claim settlement by cheque?',
      answer: 'While electronic payments are preferred for faster processing, you can request settlement by cheque by selecting this option during the claim submission process. Contact ABC support for details.'
    },
    {
      question: 'If my claim has more than one claimant, what should I do if I want settlement to be payable to each claimant?',
      answer: 'For claims with multiple claimants, you should specify this during the claim submission process. Each claimant will need to provide their details separately. Contact ABC support for details on this specific procedure.'
    }
  ];
}
