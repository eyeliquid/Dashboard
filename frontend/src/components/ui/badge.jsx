import PropTypes from 'prop-types';
import { cn } from "@/lib/utils"
import { badgeVariants } from "./badgeVariants"
function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}
export { Badge }
Badge.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
}
