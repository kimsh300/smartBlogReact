import { useTranslation } from 'react-i18next';
import type { LayoutType } from '@/types';

interface LayoutSelectorProps {
  selectedLayout: LayoutType;
  onSelect: (layout: LayoutType) => void;
}

const layouts: { type: LayoutType; blocks: number[] }[] = [
  { type: '1:1', blocks: [1] },
  { type: '1:2', blocks: [1, 2] },
  { type: '2:1', blocks: [2, 1] },
  { type: '2:2', blocks: [1, 1] },
];

const LayoutSelector = ({ selectedLayout, onSelect }: LayoutSelectorProps) => {
  const { t } = useTranslation();

  const getLayoutLabel = (type: LayoutType): string => {
    const labelMap: Record<LayoutType, string> = {
      '1:1': t('pageBuilder.layout.fullWidth'),
      '1:2': t('pageBuilder.layout.rightWide'),
      '2:1': t('pageBuilder.layout.leftWide'),
      '2:2': t('pageBuilder.layout.twoColumn'),
    };
    return labelMap[type];
  };

  return (
    <div className="layout-selector">
      {layouts.map(({ type, blocks }) => (
        <button
          key={type}
          className={`layout-selector__option ${
            selectedLayout === type ? 'layout-selector__option--selected' : ''
          }`}
          onClick={() => onSelect(type)}
        >
          <div className={`layout-selector__preview layout-selector__preview--${type.replace(':', '-')}`}>
            {blocks.map((_, idx) => (
              <div key={idx} className="layout-selector__preview-block" />
            ))}
          </div>
          <span className="layout-selector__label">{getLayoutLabel(type)}</span>
        </button>
      ))}
    </div>
  );
};

export default LayoutSelector;
