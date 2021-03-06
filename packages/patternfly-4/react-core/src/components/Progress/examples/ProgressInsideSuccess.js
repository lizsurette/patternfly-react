import React from 'react';
import { Progress, ProgressMeasureLocation, ProgressVariant } from '@patternfly/react-core';

class ProgressInsideSuccess extends React.Component {
  static title = 'Progress Inside Success';

  render() {
    return (
      <Progress
        value={33}
        title="Success"
        measureLocation={ProgressMeasureLocation.inside}
        variant={ProgressVariant.success}
      />
    );
  }
}

export default ProgressInsideSuccess;
