import React from "react";

type MultipleChoicePromptCardProps = {
  prompt: string
}

class MultipleChoicePromptCard extends React.Component<MultipleChoicePromptCardProps> {
  render() {
    return (
      <>
        <div className="max-w-xl rounded-lg overflow-hidden m-4">
          <div>
            <h1 className="text-gray-700 text-xl">
              <strong>1. </strong>
              { this.props.prompt }
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default MultipleChoicePromptCard;