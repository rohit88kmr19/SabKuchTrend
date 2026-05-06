import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import AdminNavbar from '../components/AdminNavbar';

/**
 * Admin Email Management Page
 * View email logs and manage email communications
 */
export default function AdminEmails() {
  const { emailLogs } = useAdmin();
  const [expandedEmail, setExpandedEmail] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredEmails = filter === 'all' ? emailLogs : emailLogs.filter((e) => e.status === filter);

  const stats = {
    totalEmails: emailLogs.length,
    sentEmails: emailLogs.filter((e) => e.status === 'sent').length,
    failedEmails: emailLogs.filter((e) => e.status === 'failed').length,
    openRate: emailLogs.length > 0 ? '85%' : 'N/A',
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />

      <div className="container-main py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Email Management</h1>
          <p className="text-gray-600">Track and manage all email communications</p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
            <p className="text-gray-600 text-sm font-semibold">Total Emails</p>
            <p className="text-3xl font-bold text-gray-800">{stats.totalEmails}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
            <p className="text-gray-600 text-sm font-semibold">Sent Successfully</p>
            <p className="text-3xl font-bold text-green-600">{stats.sentEmails}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-500">
            <p className="text-gray-600 text-sm font-semibold">Failed</p>
            <p className="text-3xl font-bold text-red-600">{stats.failedEmails}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-purple-500">
            <p className="text-gray-600 text-sm font-semibold">Open Rate</p>
            <p className="text-3xl font-bold text-purple-600">{stats.openRate}</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {['all', 'sent', 'failed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-2 rounded-lg font-semibold transition whitespace-nowrap ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)} (
              {status === 'all'
                ? emailLogs.length
                : emailLogs.filter((e) => e.status === status).length}
              )
            </button>
          ))}
        </div>

        {/* Email List */}
        {filteredEmails.length > 0 ? (
          <div className="space-y-4">
            {filteredEmails.reverse().map((email) => (
              <div key={email.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Email Header */}
                <div
                  className="p-6 border-b cursor-pointer hover:bg-gray-50"
                  onClick={() =>
                    setExpandedEmail(expandedEmail === email.id ? null : email.id)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">📧</span>
                        <div>
                          <p className="font-bold text-gray-800">Order #{email.orderId}</p>
                          <p className="text-gray-600 text-sm">{email.customerEmail}</p>
                          <p className="text-gray-600 text-sm">
                            {new Date(email.sentAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                          email.status === 'sent'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {email.status.charAt(0).toUpperCase() + email.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Email Details (Expandable) */}
                {expandedEmail === email.id && (
                  <div className="p-6 bg-gray-50 space-y-4">
                    <div>
                      <p className="text-gray-600 text-sm font-semibold">Subject</p>
                      <p className="font-semibold text-gray-800">{email.subject}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm font-semibold mb-2">Email Body</p>
                      <div className="bg-white rounded p-4 border border-gray-200">
                        <p className="text-gray-700">{email.body}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-600 text-sm">Recipient</p>
                        <p className="font-semibold text-gray-800">{email.customerEmail}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Sent At</p>
                        <p className="font-semibold text-gray-800">
                          {new Date(email.sentAt).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Status</p>
                        <p
                          className={`font-semibold ${
                            email.status === 'sent' ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {email.status.charAt(0).toUpperCase() + email.status.slice(1)}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Opens</p>
                        <p className="font-semibold text-gray-800">3 opens</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-2xl text-gray-600 mb-4">📧 No emails yet</p>
            <p className="text-gray-500">Send order confirmations to create email logs</p>
          </div>
        )}
      </div>
    </div>
  );
}
