# Supabase Setup Instructions for AyurSankalpa Clinic

## Step 1: Create the Database Table

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy the entire content from `supabase_appointments_table.sql`
5. Paste it into the SQL editor
6. Click **Run** to execute the SQL

This will create:
- ✅ `appointments` table with all required columns
- ✅ Indexes for performance optimization
- ✅ Row Level Security (RLS) policies
- ✅ Triggers for auto-updating timestamps
- ✅ Permissions for public (anon) and authenticated users

## Step 2: Install Supabase Client

Install the Supabase JavaScript client library:

```bash
npm install @supabase/supabase-js
```

## Step 3: Integrate with AppointmentForm Component

Update `src/components/AppointmentForm.jsx` to use Supabase:

```javascript
import { createAppointment } from '../lib/supabase';

// Inside handleSubmit function, replace the setTimeout with:

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  setIsSubmitting(true);

  // Generate booking reference
  const generatedId = `ASK-${Math.floor(1000 + Math.random() * 9000)}`;

  // Prepare appointment data for Supabase
  const appointmentData = {
    booking_ref: generatedId,
    consultation_type: formData.consultationType,
    specialty: formData.specialty,
    appointment_date: formData.date,
    time_slot: formData.timeSlot,
    full_name: formData.fullName,
    phone: formData.phone,
    age: formData.age ? parseInt(formData.age) : null,
    gender: formData.gender,
    has_existing_medications: formData.hasExistingMedications,
    notes: formData.notes || null,
    status: 'pending'
  };

  // Save to Supabase
  const result = await createAppointment(appointmentData);

  setIsSubmitting(false);

  if (result.success) {
    setBookingRef(generatedId);
    setIsSuccess(true);
  } else {
    // Handle error
    alert('Error saving appointment. Please try again.');
    console.error(result.error);
  }
};
```

## Step 4: Verify the Setup

### Test the Table
Go to **Table Editor** in Supabase dashboard and verify the `appointments` table exists with all columns.

### Test an Insert
Try submitting the appointment form on your website. Then check the Supabase Table Editor to see if the data was saved.

### Check from SQL Editor
Run this query to see all appointments:
```sql
SELECT * FROM appointments ORDER BY created_at DESC;
```

## Database Schema

### appointments table

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key (auto-generated) |
| `booking_ref` | VARCHAR(20) | Unique booking reference (e.g., ASK-1234) |
| `consultation_type` | VARCHAR(20) | 'in-clinic' or 'video' |
| `specialty` | TEXT | Selected specialty/health concern |
| `appointment_date` | DATE | Preferred appointment date |
| `time_slot` | VARCHAR(20) | Preferred time slot |
| `full_name` | VARCHAR(255) | Patient full name |
| `phone` | VARCHAR(20) | Patient contact number |
| `age` | INTEGER | Patient age (optional) |
| `gender` | VARCHAR(50) | Patient gender (optional) |
| `has_existing_medications` | VARCHAR(10) | 'yes' or 'no' |
| `notes` | TEXT | Additional symptoms/notes |
| `status` | VARCHAR(20) | 'pending', 'confirmed', 'completed', 'cancelled' |
| `created_at` | TIMESTAMP | Auto-generated creation timestamp |
| `updated_at` | TIMESTAMP | Auto-updated timestamp |

## Security (Row Level Security)

The table has RLS enabled with the following policies:

1. **Public Insert**: Anyone can create appointments (needed for the booking form)
2. **Authenticated View/Update**: Only authenticated users (admins) can view and update all appointments
3. **Self-View**: Users can view their own appointments by phone number

## API Functions Available

The `src/lib/supabase.js` file provides these functions:

- `createAppointment(appointmentData)` - Create new appointment
- `getAppointmentByRef(bookingRef)` - Get appointment by reference ID
- `getAppointmentsByPhone(phone)` - Get patient's appointments
- `updateAppointmentStatus(bookingRef, status)` - Update appointment status
- `getAllAppointments(filters)` - Get all appointments (admin)

## Environment Variables (Optional - More Secure)

For production, move the Supabase credentials to environment variables:

1. Create `.env` file:
```
VITE_SUPABASE_URL=https://oafqlzmubtpexndhfuxe.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

2. Update `src/lib/supabase.js`:
```javascript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

3. Add `.env` to `.gitignore` to keep credentials private

## Next Steps

1. **Email Notifications**: Set up Supabase Edge Functions or webhooks to send confirmation emails
2. **SMS Integration**: Integrate Twilio for SMS confirmations
3. **Admin Dashboard**: Create an admin interface to manage appointments
4. **Calendar Integration**: Sync with Google Calendar or similar
5. **Payment Integration**: Add Razorpay or Stripe for consultation fees

## Support

If you encounter issues:
1. Check Supabase logs in the dashboard
2. Verify RLS policies are enabled
3. Check browser console for errors
4. Test SQL queries in the SQL Editor

## Your Supabase Project Details

- **Project URL**: https://oafqlzmubtpexndhfuxe.supabase.co
- **Anon Key**: Already configured in `src/lib/supabase.js`
