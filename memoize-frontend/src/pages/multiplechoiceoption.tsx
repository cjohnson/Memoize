import React from "react";

type MultipleChoiceOptionProps = {
  title: string,
  option_index: string,
  click_callback: () => void
}

class MultipleChoiceOption extends React.Component<MultipleChoiceOptionProps> {
  constructor(props: MultipleChoiceOptionProps) {
    super(props);

    // props.click_callback = props.click_callback.bind(this);
  }
  
  render() {
    return (
      <>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white">
          <a href='#' onClick={this.props.click_callback}>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base">
                { this.props.option_index }: { this.props.title }
              </p>
            </div>
          </a>
        </div>
      </>
    );
  }
}

export default MultipleChoiceOption;