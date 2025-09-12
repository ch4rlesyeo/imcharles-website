interface ITextProps {
  className?: string;
}

const Text: FC<ITextProps> = (props) => {
  const { children, ...restProps } = props;

  return <span {...restProps}>{children}</span>;
};

export default Text;
