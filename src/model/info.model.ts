/**
 * Info
 */
import { Education } from './education.model';
import { Company } from './company.model';
import { Introduction } from './introduction.model';
import { Training } from './training.model';
export class Info {
  experience: string;
  sex: string;
  educations: Array<Education>;
  companys: Array<Company>;
  email: string;
  phone: string;
  introductions: Array<string>;
  keywords: string;
  location: string;
  industry: string;
  job: string;
  jobtype: string;
  price: number;
  arrivaldate: string;
  trainings: Array<Training>;
}
