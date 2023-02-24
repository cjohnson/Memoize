import React from "react";

type MultipleChoiceOptionProps = {
  title: string,
  option_index: string
}

class MultipleChoiceOption extends React.Component<MultipleChoiceOptionProps> {
  constructor(props: Readonly<MultipleChoiceOptionProps>) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (): void => {
    console.log('Clicked ' + this.props.title);
  }
  
  render() {
    return (
      <>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white">
          <a href='#' onClick={this.handleClick}>
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