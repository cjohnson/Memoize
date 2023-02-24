import React from "react";

type QuestionCardProps = {
  prompt: string
}

class QuestionCard extends React.Component<QuestionCardProps> {
  render() {
    return (
      <>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white">
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base">
              { this.props.prompt }
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default QuestionCard;