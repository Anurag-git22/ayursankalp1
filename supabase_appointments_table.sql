-- ============================================
-- AyurSankalpa Clinic - Appointments Table
-- Supabase SQL Schema
-- ============================================

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Booking Reference
  booking_ref VARCHAR(20) UNIQUE NOT NULL,
  
  -- Consultation Details
  consultation_type VARCHAR(20) NOT NULL CHECK (consultation_type IN ('in-clinic', 'video')),
  specialty TEXT NOT NULL,
  appointment_date DATE NOT NULL,
  time_slot VARCHAR(20) NOT NULL,
  
  -- Patient Information
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  age INTEGER,
  gender VARCHAR(50),
  
  -- Medical Information
  has_existing_medications VARCHAR(10) CHECK (has_existing_medications IN ('yes', 'no')),
  notes TEXT,
  
  -- Metadata
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index on booking_ref for fast lookups
CREATE INDEX IF NOT EXISTS idx_appointments_booking_ref ON appointments(booking_ref);

-- Create index on appointment_date for filtering
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON appointments(created_at DESC);

-- Create index on phone for patient lookup
CREATE INDEX IF NOT EXISTS idx_appointments_phone ON appointments(phone);

-- Enable Row Level Security (RLS)
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert appointments (public booking)
CREATE POLICY "Allow public to create appointments"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to view all appointments (admin access)
CREATE POLICY "Allow authenticated users to view all appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow authenticated users to update appointments (admin access)
CREATE POLICY "Allow authenticated users to update appointments"
  ON appointments
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create policy to allow users to view their own appointments by phone
CREATE POLICY "Allow public to view their own appointments by phone"
  ON appointments
  FOR SELECT
  TO anon
  USING (phone = current_setting('request.jwt.claims', true)::json->>'phone');

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
CREATE TRIGGER update_appointments_updated_at
  BEFORE UPDATE ON appointments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions
GRANT SELECT, INSERT ON appointments TO anon;
GRANT ALL ON appointments TO authenticated;

-- ============================================
-- Sample Query Examples
-- ============================================

-- Get all appointments
-- SELECT * FROM appointments ORDER BY created_at DESC;

-- Get appointments by booking reference
-- SELECT * FROM appointments WHERE booking_ref = 'ASK-1234';

-- Get appointments by phone
-- SELECT * FROM appointments WHERE phone = '9876543210';

-- Get appointments for a specific date
-- SELECT * FROM appointments WHERE appointment_date = '2026-09-20';

-- Get pending appointments
-- SELECT * FROM appointments WHERE status = 'pending' ORDER BY appointment_date ASC;

-- Count appointments by consultation type
-- SELECT consultation_type, COUNT(*) as count 
-- FROM appointments 
-- GROUP BY consultation_type;

-- Count appointments by specialty
-- SELECT specialty, COUNT(*) as count 
-- FROM appointments 
-- GROUP BY specialty 
-- ORDER BY count DESC;
