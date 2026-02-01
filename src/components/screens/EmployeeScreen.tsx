import { DitheredImage } from '../ui/DitheredImage'
import { profile } from '../../data/profile'
import profileImage from '../../assets/images/profile.png'

export function EmployeeScreen() {
  return (
    <div className="h-full flex flex-col lg:flex-row gap-6">
      {/* Left side - Photo */}
      <div className="flex flex-col items-center lg:items-start">
        <div className="border border-phosphor p-2 bg-crt-black">
          <DitheredImage
            src={profileImage}
            alt={`Photo of ${profile.name}`}
            maxWidth={250}
            maxHeight={300}
          />
        </div>
        <div className="mt-2 text-center lg:text-left">
          <span className="text-phosphor-dim text-sm">EMPLOYEE PHOTO</span>
        </div>
      </div>

      {/* Right side - Info */}
      <div className="flex-1 border border-phosphor p-4 bg-crt-black/30">
        <h2 className="text-2xl text-phosphor text-glow-bright mb-4 border-b border-phosphor-dark pb-2">
          ══════ EMPLOYEE RECORD ══════
        </h2>

        <div className="space-y-3 text-xl">
          <InfoRow label="NAME" value={profile.name} />
          <InfoRow label="ID" value={profile.id} />
          <InfoRow label="STATUS" value={profile.status} highlight />
          <InfoRow label="CLEARANCE" value={profile.clearance} />
          <InfoRow label="DEPARTMENT" value={profile.department} />
          <InfoRow label="POSITION" value={profile.position} />
        </div>

        <div className="mt-6 pt-4 border-t border-phosphor-dark">
          <h3 className="text-lg text-phosphor-dim mb-2">─── BIO ───</h3>
          <div className="space-y-2">
            {profile.bio.map((line, index) => (
              <p key={index} className="text-phosphor text-lg leading-relaxed">
                {'>'} {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-phosphor-dark">
          <span className="text-phosphor-dark text-sm">
            RECORD LAST UPDATED: {new Date().toLocaleDateString('en-US')}
          </span>
        </div>
      </div>
    </div>
  )
}

interface InfoRowProps {
  label: string
  value: string
  highlight?: boolean
}

function InfoRow({ label, value, highlight = false }: InfoRowProps) {
  return (
    <div className="flex gap-2">
      <span className="text-phosphor-dim w-32">{label}:</span>
      <span className={highlight ? 'text-phosphor-bright text-glow-bright' : 'text-phosphor text-glow'}>
        {value}
      </span>
    </div>
  )
}
