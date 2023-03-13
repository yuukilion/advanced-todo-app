import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;

interface TodoCard {
  title: string;
  category: string;
  priority: string;
  DateTime: string;
}

export default function TodoCard({
  title,
  category,
  priority,
  DateTime,
}: TodoCard) {
  return (
    <Card
      hoverable
      title={title}
      actions={[<CheckOutlined key={1} />, <DeleteOutlined key={2} />]}
      style={{ width: '360px', textAlign: 'center' }}
    >
      <Card.Grid
        style={{ width: '100%', textAlign: 'center', boxShadow: 'none' }}
        hoverable={false}
      >
        <Text>カテゴリー: {category}</Text>
      </Card.Grid>
      <Card.Grid
        style={{ width: '100%', textAlign: 'center', boxShadow: 'none' }}
        hoverable={false}
      >
        <Text>優先度: {priority}</Text>
      </Card.Grid>
      <Card.Grid
        style={{ width: '100%', textAlign: 'center', boxShadow: 'none' }}
        hoverable={false}
      >
        <Text>日付と時刻: {DateTime}</Text>
      </Card.Grid>
    </Card>
  );
}
