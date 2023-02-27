import React, { ReactElement } from "react";

import MultipleChoiceOption from "./multiplechoiceoption";

interface MultipleChoiceAnswer {
  label: string,
  correct: boolean,
  selected?: boolean,
  explanation: string;
}

export interface MultipleChoiceQuestionProps {
  prompt: string;
  answers: Array<MultipleChoiceAnswer>;
}

interface MultipleChoiceQuestionState {
  selections: Array<boolean>;
}

class MultipleChoiceQuestion extends React.Component<MultipleChoiceQuestionProps, MultipleChoiceQuestionState> {
  constructor(props: MultipleChoiceQuestionProps) {
    super(props);

    this.state = { 
      selections: Array<boolean>(this.props.answers.length).fill(false) 
    }

    this.select = this.select.bind(this);
  }

  select = (index: number) => this.setState(state => { 
    state.selections[index] = true;

    return state;
  });

  render() {
    const options: Array<ReactElement> = [];
    for(let i = 0; i < this.props.answers.length; ++i) {
      options.push(<MultipleChoiceOption
        key={i}
        index={i}
        selected={this.state.selections[i] ?? false}
        title={this.props.answers[i]?.label ?? ''} 
        correct={this.props.answers[i]?.correct ?? false}
        click_callback={this.select}
      />);
    }

    return (
      <>
        <div className="columns">
          { options }
        </div>
      </>
    );
  }
}

export default MultipleChoiceQuestion;