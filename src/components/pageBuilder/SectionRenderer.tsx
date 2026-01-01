import type { PageSection, SectionBlock, TextContent, ImageContent, ProfileContent, ExperienceContent, SkillsContent } from '@/types';

interface SectionRendererProps {
  section: PageSection;
}

// 텍스트 블록 렌더러
const TextBlock = ({ content }: { content: TextContent }) => (
  <div className="hero__content">
    {content.heading && (
      <h1 className="hero__title">
        {content.heading.split('\n').map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </h1>
    )}
    {content.body && (
      <p className="hero__description">{content.body}</p>
    )}
  </div>
);

// 이미지 블록 렌더러
const ImageBlock = ({ content }: { content: ImageContent }) => (
  <div className="hero__image">
    <img src={content.src} alt={content.alt} />
    {content.caption && <p className="hero__image-caption">{content.caption}</p>}
  </div>
);

// 프로필 블록 렌더러
const ProfileBlock = ({ content }: { content: ProfileContent }) => (
  <div className="profile-section">
    <h2 className="profile-section__title">경력</h2>
    <div className="profile-section__image-wrapper">
      <img src={content.image} alt={content.name} className="profile-section__image" />
    </div>
    <h3 className="profile-section__name">{content.name}</h3>
    <p className="profile-section__role">{content.title}</p>
    {content.description && <p>{content.description}</p>}
  </div>
);

// 경력 블록 렌더러
const ExperienceBlock = ({ content }: { content: ExperienceContent }) => (
  <div className="experience-section">
    <h2 className="experience-section__title">경력</h2>
    {content.items.map((item) => (
      <div key={item.id} className="experience-item">
        <div className="experience-item__header">
          <h3 className="experience-item__company">{item.company}</h3>
          <span className="experience-item__period">{item.period}</span>
        </div>
        <p className="experience-item__position">{item.position}</p>
        <p className="experience-item__description">{item.description}</p>
        {item.achievements && item.achievements.length > 0 && (
          <ul className="experience-item__achievements">
            {item.achievements.map((achievement, idx) => (
              <li key={idx} className="experience-item__achievement">
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);

// 스킬 블록 렌더러
const SkillsBlock = ({ content }: { content: SkillsContent }) => (
  <div className="skills-section">
    <h2 className="experience-section__title">기술 스택</h2>
    <div className="skills-grid">
      {content.items.map((skill) => (
        <div key={skill.id} className="skill-item">
          <span className="skill-item__name">{skill.name}</span>
          <div className="skill-item__bar">
            <div 
              className="skill-item__progress" 
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 블록 타입에 따른 렌더러 선택
const BlockRenderer = ({ block }: { block: SectionBlock }) => {
  switch (block.type) {
    case 'text':
      return <TextBlock content={block.content as TextContent} />;
    case 'image':
      return <ImageBlock content={block.content as ImageContent} />;
    case 'profile':
      return <ProfileBlock content={block.content as ProfileContent} />;
    case 'experience':
      return <ExperienceBlock content={block.content as ExperienceContent} />;
    case 'skills':
      return <SkillsBlock content={block.content as SkillsContent} />;
    default:
      return <div>Unknown block type: {block.type}</div>;
  }
};

// 레이아웃에 따른 CSS 클래스 반환
const getLayoutClass = (layout: string): string => {
  const layoutMap: Record<string, string> = {
    '1:1': 'section--layout-1-1',
    '1:2': 'section--layout-1-2',
    '2:1': 'section--layout-2-1',
    '2:2': 'section--layout-2-2',
  };
  return layoutMap[layout] || 'section--layout-1-1';
};

const SectionRenderer = ({ section }: SectionRendererProps) => {
  const layoutClass = getLayoutClass(section.layout);

  return (
    <section 
      id={section.id}
      className={`section ${layoutClass}`}
      style={{ backgroundColor: section.backgroundColor }}
    >
      {section.blocks
        .sort((a, b) => a.order - b.order)
        .map((block) => (
          <div key={block.id} className="section__block">
            <BlockRenderer block={block} />
          </div>
        ))}
    </section>
  );
};

export default SectionRenderer;
