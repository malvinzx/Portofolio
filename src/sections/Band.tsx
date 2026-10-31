import { TextLoop } from '@/components/reactbits';
import { useTheme } from '@/theme/ThemeProvider';

export default function Band() {
  const { meta } = useTheme();
  return (
    <div className="band" aria-hidden="true">
      <TextLoop text="Creativity Technology Code" separator="✦" shape="line" speed={80} ribbon ribbonColor={meta.accent} ribbonWidth={76} color={meta.onAccent} fontSize={40} />
    </div>
  );
}
