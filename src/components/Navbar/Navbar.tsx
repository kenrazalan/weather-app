import { useAuth0 } from "@auth0/auth0-react";
import { Text, Button, Container, Group, Header } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./useStyles";

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

function Navbar({ links }: HeaderSimpleProps) {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={56} mb={120}>
      <Container className={classes.inner}>
        <Text fz="xl" weight={"bold"}>
          Weather Forecast
        </Text>
        {/* {isAuthenticated && (
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>
        )} */}

        <Group spacing={0} className={classes.social} position="right" noWrap>
          {isAuthenticated && <Button onClick={() => logout()}>Log Out</Button>}
        </Group>
      </Container>
    </Header>
  );
}

export default Navbar;
