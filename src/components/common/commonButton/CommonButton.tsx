import styles from './CommonButton.module.scss'

type CommonButtonName = 'primary' | 'secondly' | 'stress' | 'normal';
type CommonSize = "x-large" | "large" | "default" | "small" | "x-small"

interface CommonButtonProps {
  name?: CommonButtonName
  block?: boolean
  disabled?: boolean
  border?: string | number | boolean
  size?: CommonSize
  width?: string | number
  maxWidth?: string | number
  children: React.ReactNode
  onClick?: () => void
}

const CommonButton = ({
  name = 'primary',
  block = false,
  disabled = false,
  size = 'x-large',
  width,
  maxWidth,
  children,
  onClick,
}: CommonButtonProps) => {
  const baseButtonClass = styles['common-btn'];
  const buttonTypeClass = styles[`common-btn__${name}`];
  const buttonDisabledClass = disabled ? `${name}__disabled` : '';
  const buttonBlockClass = block ? styles.block : '';

  const buttonSizeClass = `${styles[`common-btn__size__${size}`]}`;

  const buttonClassNames = [
    baseButtonClass,
    buttonTypeClass,
    buttonDisabledClass,
    buttonBlockClass,
    buttonSizeClass,
  ].join(' ').trim();

  return (
    <button
      className={buttonClassNames}
      style={{ width, maxWidth }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
};

export default CommonButton;
