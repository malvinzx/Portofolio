import Section from '@/components/Section';
import { ReflectiveCard } from '@/components/reactbits';
import { profile } from '@/data/profile';
import { useTheme } from '@/theme/ThemeProvider';

export default function Profile() {
  const { meta } = useTheme();
  return (
    <Section id="profile" title="Profile">
      <div className="split">
        <div className="profile-card">
          <ReflectiveCard name={profile.name} role="Programmer & Digital Creator" badge="Portfolio" status="Online" idLabel="Brand" idValue="Malvin - MD" theme={meta.dark ? 'dark' : 'light'} webcam={false} />
        </div>
        <dl className="card facts">
          <div><dt>Nama lengkap</dt><dd>{profile.fullName}</dd></div>
          <div><dt>Panggilan</dt><dd>{profile.name}</dd></div>
          <div><dt>Peran</dt><dd>Programmer &amp; Digital Creator</dd></div>
          <div><dt>Negara</dt><dd>{profile.country}</dd></div>
          <div><dt>Brand</dt><dd>Malvin — Portfolio &amp; Digital Services</dd></div>
        </dl>
      </div>
    </Section>
  );
}
