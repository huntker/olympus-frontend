import Box from "@material-ui/core/Box";

interface ITabPanel {
  value: number;
  index: number;
  className?: string;
}

const TabPanel: React.FC<ITabPanel> = ({ value, index, children, className, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    style={{ overflow: "hidden" }}
  >
    {value === index && <Box p={2}>{children}</Box>}
  </div>
);

export default TabPanel;