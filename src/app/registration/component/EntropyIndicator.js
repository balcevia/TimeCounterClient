import React from 'react';
import {calculateEntropy} from "../../common/validators";
import LinearProgress from '@material-ui/core/LinearProgress';
import {withStyles} from '@material-ui/core/styles';

const entropyMap = [
  {start: 0, end: 27, label: "Very Weak", color: "#ff0000"},
  {start: 28, end: 35, label: "Weak", color: "#ff6600"},
  {start: 36, end: 59, label: "Secure", color: "#99ff33"},
  {start: 60, end: 127, label: "Strong", color: "#66ff66"},
  {start: 128, end: Number.POSITIVE_INFINITY, label: "Very Strong", color: "#00cc00"},
];
const ColorLinearProgress = (color) => withStyles({
  colorPrimary: {
    backgroundColor: '#b2dfdb',
  },
  barColorPrimary: {
    backgroundColor: color,
  },
})(LinearProgress);

const EntropyIndicator = ({val}) => {
  const entropyVal = calculateEntropy(val);

  const row = entropyMap.find(v => entropyVal >= v.start && entropyVal <= v.end);
  const barVal = ((entropyVal / 128) * 100) > 99 ? 99 : ((entropyVal / 128) * 100);

  const Component = ColorLinearProgress(row.color);
  return (
    <div>
      <div style={{color: row.color, marginBottom: '5px'}}>{row.label}</div>
      <Component
        variant="determinate"
        value={barVal}
      />
    </div>
  )
};

export default EntropyIndicator;