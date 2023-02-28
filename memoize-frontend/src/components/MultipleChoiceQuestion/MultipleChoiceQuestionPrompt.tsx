import React from "react";

type MultipleChoicePromptCardProps = {
  index: number,
  prompt: string
}

class MultipleChoiceQuestionPrompt extends React.Component<MultipleChoicePromptCardProps> {
  render() {
    return (
      <>
        <div className="max-w-xl rounded-lg overflow-hidden m-4">
          <div>
            <h1 className="text-gray-700 text-xl">
              <strong>{ this.props.index }. </strong>
              { this.props.prompt }
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default MultipleChoiceQuestionPrompt;