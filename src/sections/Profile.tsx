import Section from '@/components/Section';
import { ProfileCard } from '@/components/reactbits';
import { profile } from '@/data/profile';
import { useTheme } from '@/theme/ThemeProvider';

export default function Profile() {
  const { meta } = useTheme();
  return (
    <Section id="profile" title="Profile">
      <div className="split">
        <div className="pc-wrap">
          {/* Ganti foto: taruh file di public/profile/ lalu ubah avatarUrl */}
          <ProfileCard
            name={profile.name} title="Programmer & Digital Creator" handle="malvinzx8" status="Online"
            avatarUrl="/profile/avatar.png" contactText="Contact" theme={meta.dark ? 'dark' : 'light'}
            onContactClick={() => { window.location.href = `mailto:${profile.email}`; }}
          />
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
