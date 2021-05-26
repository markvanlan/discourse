import { action } from "@ember/object";
import SingleSelectHeaderComponent from "select-kit/components/select-kit/single-select-header";

export default SingleSelectHeaderComponent.extend({
  tagName: "input",
  classNames: ["user-group-filter-header", "no-blur"],
  attributeBindings: ["selectKit.options.filterValue:value"],

  @action
  input(event) {
    this.selectKit.options.onFilterChanged &&
      this.selectKit.options.onFilterChanged(event.target.value);

    this.selectKit.onInput(event);
  },
});
