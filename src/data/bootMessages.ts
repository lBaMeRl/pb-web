export interface BootMessage {
  text: string
  status?: 'OK' | 'DONE' | 'LOADED' | 'ACTIVE'
  delay?: number
  type?: 'text' | 'logo' | 'wait-for-logo'
}

export const bootMessages: BootMessage[] = [
  { text: '', delay: 300 },
  { text: 'CHUMBO CORPORATION BIOS v2026.1', delay: 100 },
  { text: 'Copyright (C) 2026 Chumbo Corporation. All Rights Reserved.', delay: 100 },
  { text: '', delay: 200 },
  { text: 'Initializing system...', status: 'OK', delay: 150 },
  { text: 'Memory test: 640K OK', delay: 100 },
  { text: 'Detecting storage devices...', status: 'OK', delay: 200 },
  { text: 'Loading kernel modules...', status: 'OK', delay: 150 },
  { text: '', delay: 100 },
  { text: 'Starting Pb.OS v2026.1...', delay: 200 },
  { text: '', delay: 100 },
  { text: 'Loading Pb.OS logo...', type: 'wait-for-logo', delay: 100 },
  { text: '', type: 'logo', delay: 300 },
  { text: '', delay: 100 },
  { text: 'Lead Operating System - Enterprise Edition', delay: 100 },
  { text: '', delay: 150 },
  { text: 'Loading system services...', status: 'OK', delay: 200 },
  { text: 'Initializing network stack...', status: 'OK', delay: 150 },
  { text: 'Mounting filesystems...', status: 'OK', delay: 100 },
  { text: 'Starting security daemon...', status: 'ACTIVE', delay: 150 },
  { text: 'Loading user profile...', status: 'LOADED', delay: 200 },
  { text: '', delay: 100 },
  { text: 'Loading Pb.OS Desktop Environment...', status: 'DONE', delay: 300 },
  { text: '', delay: 200 },
  { text: 'System ready. Welcome, Employee.', delay: 500 },
]
