import { InterestForm } from "../components/TabForm/tabs/InterestsForm";
import { PersonalForm } from "../components/TabForm/tabs/PersonalForm";
import { SettingsForm } from "../components/TabForm/tabs/AddressForm";

export const tabFormConfig = [
  {
    tabName: "Personal",
    component: PersonalForm,
  },
  {
    tabName: "Interests",
    component: InterestForm,
  },
  {
    tabName: "Settings",
    component: SettingsForm,
  },
];
