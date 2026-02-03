import { useState } from 'react'
import { DitheredImage } from '../ui/DitheredImage'
import { profile } from '../../data/profile'
import { experience } from '../../data/experience'
import { education, certifications } from '../../data/education'
import profileImage from '../../assets/images/profile.png'

type RecordTab = 'experience' | 'education'

export function EmployeeScreen() {
  const [activeTab, setActiveTab] = useState<RecordTab>('experience')

  return (
    <div className="h-full flex flex-col gap-4">
      {/* Top row - Photo and Employee Info */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side - Photo */}
        <div className="flex flex-col items-center lg:items-start shrink-0">
          <div className="border border-phosphor p-2 bg-crt-black">
            <DitheredImage
              src={profileImage}
              alt={`Photo of ${profile.name}`}
              maxWidth={200}
              maxHeight={240}
            />
          </div>
          <div className="mt-2 text-center lg:text-left">
            <span className="text-phosphor-dim text-sm">EMPLOYEE PHOTO</span>
          </div>
        </div>

        {/* Right side - Employee Record Info */}
        <div className="flex-1 border border-phosphor p-4 bg-crt-black/30 min-w-0">
          <h2 className="text-xl text-phosphor text-glow-bright mb-3 border-b border-phosphor-dark pb-2">
            ══════ EMPLOYEE RECORD ══════
          </h2>

          <div className="space-y-1 text-lg">
            <InfoRow label="NAME" value={profile.name} />
            <InfoRow label="ID" value={profile.id} />
            <InfoRow label="STATUS" value={profile.status} highlight />
            <InfoRow label="CLEARANCE" value={profile.clearance} />
            <InfoRow label="CORP" value={profile.corp} />
            <InfoRow label="DEPARTMENT" value={profile.department} />
            <InfoRow label="POSITION" value={profile.position} />
          </div>
        </div>
      </div>

      {/* Bottom row - Bio and Experience/Education side by side */}
      <div className="flex-1 flex flex-col lg:flex-row gap-4 min-h-0">
        {/* Bio Section */}
        <div className="flex-1 min-w-[300px] border border-phosphor bg-crt-black/30 flex flex-col min-h-[200px] lg:min-h-0">
          <div className="p-3 border-b border-phosphor-dark shrink-0">
            <h3 className="text-lg text-phosphor text-glow">─── BIO ───</h3>
          </div>
          <div className="flex-1 overflow-y-auto crt-scrollbar p-4">
            <div className="space-y-2">
              {profile.bio.map((line, index) => (
                <p key={index} className="text-phosphor text-base leading-normal">
                  <span className="text-phosphor-dim">{'>'}</span> {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Experience/Education Section */}
        <div className="flex-1 min-w-[300px] border border-phosphor bg-crt-black/30 flex flex-col min-h-[200px] lg:min-h-0">
          {/* Tab Headers */}
          <div className="flex border-b border-phosphor-dark shrink-0">
            <TabButton
              active={activeTab === 'experience'}
              onClick={() => setActiveTab('experience')}
            >
              EXPERIENCE
            </TabButton>
            <TabButton
              active={activeTab === 'education'}
              onClick={() => setActiveTab('education')}
            >
              EDUCATION
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto crt-scrollbar p-4">
            {activeTab === 'experience' ? <ExperienceContent /> : <EducationContent />}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="shrink-0 pt-2 border-t border-phosphor-dark">
        <span className="text-phosphor-dark text-sm">
          RECORD LAST UPDATED: {new Date().toLocaleDateString('en-US')}
        </span>
      </div>
    </div>
  )
}

interface TabButtonProps {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}

function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1 px-4 py-2 text-sm font-bold transition-all duration-200
        border-r border-phosphor-dark last:border-r-0
        focus:outline-none focus-indicator
        ${
          active
            ? 'bg-phosphor-dark/50 text-phosphor text-glow tab-active'
            : 'bg-transparent text-phosphor-dim hover:bg-phosphor-dark/20 hover:text-phosphor'
        }
      `}
    >
      [ {children} ]
    </button>
  )
}

function ExperienceContent() {
  return (
    <div className="space-y-3">
      {experience.map((exp, index) => (
        <div key={index} className="border-l-2 border-phosphor-dark pl-3 pb-2">
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-phosphor text-glow font-bold text-base">{exp.title}</h4>
          </div>
          <p className="text-phosphor-dim text-base">{exp.company}</p>
          <p className="text-phosphor-dark text-sm">
            {exp.period} · {exp.duration}
          </p>
          <p className="text-phosphor-dark text-sm">{exp.location} · {exp.type}</p>
          {exp.description && (
            <p className="text-phosphor text-sm mt-1 leading-snug">{exp.description}</p>
          )}
          {exp.skills.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-xs px-2 py-0.5 border border-phosphor-dark text-phosphor-dim"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function EducationContent() {
  return (
    <div className="space-y-3">
      {/* Education Entries */}
      <div className="space-y-3">
        <h4 className="text-phosphor-dim text-sm border-b border-phosphor-dark pb-1">
          ── EDUCATION ──
        </h4>
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-phosphor-dark pl-3 pb-2">
            <h4 className="text-phosphor text-glow font-bold text-base">{edu.institution}</h4>
            <p className="text-phosphor-dim text-base">
              {edu.degree}, {edu.field}
            </p>
            <p className="text-phosphor-dark text-sm">{edu.period}</p>
            {edu.grade && <p className="text-phosphor-dark text-sm">Grade: {edu.grade}</p>}
            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mt-2 p-2 border border-phosphor-dark/50 bg-crt-black/50">
                {edu.achievements.map((achievement, achIndex) => (
                  <div key={achIndex}>
                    <p className="text-phosphor-medium text-xs font-bold">
                      {achievement.title}
                    </p>
                    <p className="text-phosphor-dim text-xs mt-1">{achievement.description}</p>
                  </div>
                ))}
              </div>
            )}
            {edu.skills.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {edu.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-2 py-0.5 border border-phosphor-dark text-phosphor-dim"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="space-y-3">
        <h4 className="text-phosphor-dim text-sm border-b border-phosphor-dark pb-1">
          ── CERTIFICATIONS ──
        </h4>
        {certifications.map((cert, index) => (
          <div key={index} className="border-l-2 border-phosphor-medium pl-3 pb-2">
            <h4 className="text-phosphor text-glow font-bold text-base">{cert.name}</h4>
            <p className="text-phosphor-dim text-base">{cert.issuer}</p>
            <p className="text-phosphor-dark text-sm">
              Issued {cert.issueDate}
              {cert.expiryDate && ` · Expires ${cert.expiryDate}`}
            </p>
            {cert.credentialId && (
              <p className="text-phosphor-dark text-sm font-mono">
                ID: {cert.credentialId}
              </p>
            )}
            {cert.skills.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {cert.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-2 py-0.5 border border-phosphor-dark text-phosphor-dim"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
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
      <span className="text-phosphor-dim w-28 shrink-0">{label}:</span>
      <span
        className={highlight ? 'text-phosphor-bright text-glow-bright' : 'text-phosphor text-glow'}
      >
        {value}
      </span>
    </div>
  )
}
