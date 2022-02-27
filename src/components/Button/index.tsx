import { ButtonVarient, ButtonColor } from '@/global/Type';
import classNames from 'classnames';
import styles from './styles.module.scss';
interface Props {
  varient?: ButtonVarient;
  color?: ButtonColor;
}

const Button: React.FC<Props> = ({ children, varient = 'solid', color }) => {
  let btnVarient;
  let btnColor;
  switch (varient) {
    case 'solid':
      btnVarient = styles.solid;
      if (color === 'success') {
        btnColor = styles.successSolid;
      } else if (color === 'danger') {
        btnColor = styles.dangerSolid;
      } else if (color === 'gradient') {
        btnColor = styles.gradientSolid;
      }
      break;
    case 'outline':
      btnVarient = styles.outline;
      if (color === 'success') {
        btnColor = styles.successOutline;
      } else if (color === 'danger') {
        btnColor = styles.dangerOutline;
      } else if (color === 'gradient') {
        btnColor = styles.gradientOutline;
      }
      break;
    case 'text':
      btnVarient = styles.text;
      if (color === 'success') {
        btnColor = styles.successText;
      } else if (color === 'danger') {
        btnColor = styles.dangerText;
      } else if (color === 'gradient') {
        btnColor = styles.gradientText;
      }
      break;

    default:
      btnVarient = styles.solid;
      break;
  }

  return (
    <button className={classNames(btnVarient, btnColor)}>{children}</button>
  );
};

export default Button;
