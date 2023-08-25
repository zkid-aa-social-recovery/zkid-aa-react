import Landing from "./components/Landing";
import { ChakraBaseProvider, extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

const {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Spinner,
  Stack,
  IconButton,
  Divider,
  Badge,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Avatar,
    AvatarBadge,
    AvatarGroup,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Spinner,
    Stack,
    IconButton,
    Divider,
    Badge,
    Icon,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
  },
});

function App() {
  // return <Landing />;
  return (
    <ChakraBaseProvider theme={theme}>
      <Landing />
    </ChakraBaseProvider>
  );
}

export default App;
