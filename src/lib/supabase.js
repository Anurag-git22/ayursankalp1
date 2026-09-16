import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = 'https://oafqlzmubtpexndhfuxe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hZnFsem11YnRwZXhuZGhmdXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1MzEyMzUsImV4cCI6MjEwNTEwNzIzNX0.nT9ljBPeq_kbrHzrKdICkZ862_E3v4SPBjMnYWTpWSM';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Create a new appointment in Supabase
 * @param {Object} appointmentData - Appointment form data
 * @returns {Promise<Object>} - Created appointment or error
 */
export async function createAppointment(appointmentData) {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .insert([appointmentData])
      .select()
      .single();

    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error creating appointment:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get appointment by booking reference
 * @param {string} bookingRef - Booking reference ID
 * @returns {Promise<Object>} - Appointment data or error
 */
export async function getAppointmentByRef(bookingRef) {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('booking_ref', bookingRef)
      .single();

    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching appointment:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get appointments by phone number
 * @param {string} phone - Patient phone number
 * @returns {Promise<Object>} - Appointments array or error
 */
export async function getAppointmentsByPhone(phone) {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('phone', phone)
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Update appointment status
 * @param {string} bookingRef - Booking reference ID
 * @param {string} status - New status (pending, confirmed, completed, cancelled)
 * @returns {Promise<Object>} - Updated appointment or error
 */
export async function updateAppointmentStatus(bookingRef, status) {
  try {
    const { data, error } = await supabase
      .from('appointments')
      .update({ status })
      .eq('booking_ref', bookingRef)
      .select()
      .single();

    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error updating appointment:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Get all appointments (admin function)
 * @param {Object} filters - Optional filters (status, date, etc.)
 * @returns {Promise<Object>} - Appointments array or error
 */
export async function getAllAppointments(filters = {}) {
  try {
    let query = supabase
      .from('appointments')
      .select('*');

    // Apply filters if provided
    if (filters.status) {
      query = query.eq('status', filters.status);
    }
    if (filters.date) {
      query = query.eq('appointment_date', filters.date);
    }
    if (filters.consultationType) {
      query = query.eq('consultation_type', filters.consultationType);
    }

    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return { success: false, error: error.message };
  }
}
