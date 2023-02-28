import React, { ReactElement } from "react";

import MultipleChoiceOption from "./MultipleChoiceOption";
import MultipleChoiceQuestionPrompt from "./MultipleChoiceQuestionPrompt";

interface MultipleChoiceAnswer {
  label: string,
  correct: boolean,
  selected?: boolean,
  explanation: string;
}
const multipleChoiceAnswerDefault: MultipleChoiceAnswer 
 = { label: '', correct: false, selected: false, explanation: '' }

export interface MultipleChoiceQuestionProps {
  prompt: string;
  index: number;
  answers: Array<MultipleChoiceAnswer>;
}

interface MultipleChoiceQuestionState {
  selections: Array<boolean>;
  selectedExplanations: Array<MultipleChoiceAnswer>;
}

class MultipleChoiceQuestion extends React.Component<MultipleChoiceQuestionProps, MultipleChoiceQuestionState> {
  constructor(props: MultipleChoiceQuestionProps) {
    super(props);

    this.state = { selections: [], selectedExplanations: [] }

    this.select = this.select.bind(this);
  }

  select = (index: number) => this.setState(state => {
    if(state.selections[index]) return state;
    if(state.selectedExplanations.some(value => value.correct)) return state;

    state.selections[index] = true;

    state.selectedExplanations.push(this.props.answers[index] ?? multipleChoiceAnswerDefault);

    return state;
  });

  render() {
    const options: Array<ReactElement> = [];
    for(let i = 0; i < this.props.answers.length; ++i) {
      const selected = this.state.selections[i] ?? false;
      const questionLabel = this.props.answers[i]?.label ?? '';
      const isCorrect = this.props.answers[i]?.correct ?? false;

      options.push(<MultipleChoiceOption
        key={i}
        index={i}
        selected={selected}
        title={questionLabel} 
        correct={isCorrect}
        click_callback={this.select}
      />);
    }

    const explanations: Array<ReactElement> = [];
    for(let i = 0; i < this.state.selectedExplanations.length; ++i) {
      const isCorrect = this.state.selectedExplanations[i]?.correct ?? false;
      const textColor = isCorrect ? 'text-green-900' : 'text-red-600';
      const questionLabel = this.state.selectedExplanations[i]?.label ?? '';
      const correctionText = isCorrect ? 'Correct!' : 'Not quite.';
      const explanation = this.state.selectedExplanations[i]?.explanation ?? '';

      explanations.push(<div key={i} className="m-4">
        <p className={ textColor }><strong>{ questionLabel } - { correctionText }</strong></p>
        <p>{ explanation }</p>
      </div>);
    }

    return (
      <>
        <div className="bg-gray-200 flex justify-center h-screen">
          <div className="items-center">
            <div className="m-auto mt-5 flex flex-col justify-center">
              <MultipleChoiceQuestionPrompt index={ this.props.index } prompt={ this.props.prompt }/>
              <div className="grid grid-cols-2">
                { options }
              </div>
            </div>
            <div className="max-w-xl">
                { explanations }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MultipleChoiceQuestion;