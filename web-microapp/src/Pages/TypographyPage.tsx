import React from 'react';
import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const blockContent = `此外，Chameleon PaaS还注重安全与合规性，提供了多层安全防护措施，包括数据加密、访问控制、身份认证等，确保用户数据的安全无忧。同时，平台支持多种云环境部署，无论是公有云、私有云还是混合云，都能实现无缝对接，满足企业多样化的IT架构需求。`;

const App: React.FC = () => {
  return (
    <Typography>
      <Title>Introduction</Title>

      <Paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
      </Paragraph>

      <Paragraph>
        After massive project practice and summaries, Ant Design, a design language for background
        applications, is refined by Ant UED Team, which aims to{' '}
        <Text strong>
          uniform the user interface specs for internal background projects, lower the unnecessary
          cost of design differences and implementation and liberate the resources of design and
          front-end development
        </Text>
        .
      </Paragraph>

      <Title level={2}>Guidelines and Resources</Title>

      <Paragraph>
        We supply a series of design principles, practical patterns and high quality design resources
        (<Text code>Sketch</Text> and <Text code>Axure</Text>), to help people create their product
        prototypes beautifully and efficiently.
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Link href="/docs/spec/proximity">Principles</Link>
          </li>
          <li>
            <Link href="/docs/spec/overview">Patterns</Link>
          </li>
          <li>
            <Link href="/docs/resources">Resource Download</Link>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        Press <Text keyboard>Esc</Text> to exit...
      </Paragraph>

      <Divider />

      <Title>介绍</Title>

      <Paragraph>
        Chameleon PaaS（Platform as a Service）快速开发平台，是面向现代软件开发团队的一款高效、灵活且易于部署的云端解决方案。它旨在通过提供一套集成化的开发工具与环境，极大地加速软件应用的开发、部署和运维流程，让开发者能够专注于业务逻辑的创新，而非基础架构的搭建与维护。Chameleon PaaS平台以其独特的“变色龙”特性而著称，意味着它如同变色龙般适应性强，能够轻松应对各种复杂多变的业务需求。平台内置了丰富的模板库、预构建的微服务架构、自动化部署工具以及强大的数据管理与分析能力，无论是构建企业级应用、SaaS产品还是移动应用，都能实现快速迭代与高效交付。
      </Paragraph>

      <Paragraph>
        对于开发者而言，Chameleon PaaS提供了直观易用的可视化编程界面，降低了技术门槛，使得非专业开发者也能参与到项目中来，促进了团队间的协作与沟通。同时，平台支持多种编程语言与框架，如Java、Node.js、Python等，确保开发者能够利用自己最熟悉的技术栈进行开发，<Text strong>进一步提升开发效率</Text>。
      </Paragraph>

      <Title level={2}>设计资源</Title>

      <Paragraph>
        我们提供完善的设计原则、最佳实践和设计资源文件（<Text code>Sketch</Text> 和
        <Text code>Axure</Text>），来帮助业务快速设计出高质量的产品原型。
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Link href="/docs/spec/proximity-cn">设计原则</Link>
          </li>
          <li>
            <Link href="/docs/spec/overview-cn">设计模式</Link>
          </li>
          <li>
            <Link href="/docs/resources-cn">设计资源</Link>
          </li>
        </ul>
      </Paragraph>

      <Paragraph>
        <blockquote>{blockContent}</blockquote>
        <pre>{blockContent}</pre>
      </Paragraph>

      <Paragraph>
        按<Text keyboard>Esc</Text>键退出阅读……
      </Paragraph>
    </Typography>
  );
};

export default App;
