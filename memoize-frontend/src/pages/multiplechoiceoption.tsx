import React from "react";

type MultipleChoiceOptionProps = {
  title: string,
  option_index: string
}

class MultipleChoiceOption extends React.Component<MultipleChoiceOptionProps> {
  render() {
    return (
      <>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white">
          <a href='#'>
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