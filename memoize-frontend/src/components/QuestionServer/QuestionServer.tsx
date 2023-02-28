import React from "react";

import MultipleChoiceQuestion from "../MultipleChoiceQuestion";
import { MultipleChoiceAnswer } from "../MultipleChoiceQuestion/MultipleChoiceQuestion";

export interface MultipleChoiceQuestionData {
  questionType: string,
  prompt: string,
  answers: Array<MultipleChoiceAnswer>;
};

interface QuestionServerProps {
  questions: Array<MultipleChoiceQuestionData>
};

interface QuestionServerState {
  index: number
};

class QuestionServer extends React.Component<QuestionServerProps, QuestionServerState> {
  constructor(props: QuestionServerProps) {
    super(props);

    this.state = { index: 0 };
  }
  
  render() {
    return(
      <>
        <MultipleChoiceQuestion index={ this.state.index + 1 } 
                                prompt={ this.props.questions[this.state.index]?.prompt ?? '' } 
                                answers={ this.props.questions[this.state.index]?.answers ?? [] } />
      </>
    );
  }
}

export default QuestionServer;