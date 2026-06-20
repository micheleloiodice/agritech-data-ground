ALTER TABLE public.contact_requests
  ADD COLUMN IF NOT EXISTS privacy_accepted boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS privacy_accepted_at timestamptz,
  ADD COLUMN IF NOT EXISTS privacy_version text;