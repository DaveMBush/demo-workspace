import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      declarations: [AppComponent, NxWelcomeComponent]
    })
  ],
} as Meta<AppComponent>;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
