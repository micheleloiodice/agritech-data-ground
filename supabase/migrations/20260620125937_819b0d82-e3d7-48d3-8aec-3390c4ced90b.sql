CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT,
  azienda TEXT,
  superficie TEXT,
  servizio TEXT NOT NULL,
  messaggio TEXT NOT NULL,
  user_agent TEXT,
  ip TEXT,
  email_sent BOOLEAN NOT NULL DEFAULT false,
  email_error TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_requests TO anon, authenticated;
GRANT ALL ON public.contact_requests TO service_role;

ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact request"
  ON public.contact_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(nome) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 3 AND 320
    AND char_length(messaggio) BETWEEN 1 AND 5000
    AND char_length(servizio) BETWEEN 1 AND 200
  );