import { Before } from '@cucumber/cucumber';

Before(function (scenario: any) {
  this.featureName = scenario?.gherkinDocument?.feature?.name?.substring(0, 32);
});