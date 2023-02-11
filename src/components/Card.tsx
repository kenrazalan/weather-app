import { Card, Text } from "@mantine/core";
import moment from "moment";

interface CardComponentProps {
  title: string;
  isDate?: boolean;
  content?: string;
  date?: number;
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  isDate = false,
  content = "",
  date,
}) => {
  return (
    <Card shadow="md" p="xl">
      <Text size="xl" weight={700} mb="xl">
        {title}
      </Text>
      {isDate ? (
        <Text size="lg">{moment(date).format("MM/DD/YYYY")}</Text>
      ) : (
        <Text size="lg">{content}</Text>
      )}
    </Card>
  );
};

export default CardComponent;
