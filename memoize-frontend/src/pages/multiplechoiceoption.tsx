import React, { useState } from "react";

type MultipleChoiceOptionProps = {
  title: string,
  correct: boolean,
  click_callback: (option_title: MultipleChoiceOption) => void
}

type MultipleChoiceOptionState = {
  selected: boolean;
}

class MultipleChoiceOption extends React.Component<MultipleChoiceOptionProps, MultipleChoiceOptionState> {
  state: MultipleChoiceOptionState = {
    selected: false
  };
  
  select() {
    this.setState({ selected: true });
  }

  render() {
    const background_color = this.state.selected ? this.props.correct ? 'bg-green-900' : 'bg-red-400' : 'bg-white';
    const text_color = this.state.selected && this.props.correct ? 'text-white' : 'text-black';

    return (
      <>
        <div className={`max-w-sm rounded-lg overflow-hidden shadow-lg m-4 ${background_color}`}>
          <a href='#' onClick={() => this.props.click_callback(this)}>
            <div className="px-6 py-4">
              <p className={`text-gray-700 text-base ${text_color}`}>
                { this.props.title }
              </p>
            </div>
          </a>
        </div>
      </>
    );
  }
}

export default MultipleChoiceOption;