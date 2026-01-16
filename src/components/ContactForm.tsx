import React, { useState } from 'react';
import { Send, Mail, User, Building, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    context: '',
    interest: '',
    ideas: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with both recipients
    const recipients = 'mcyprien@stanford.edu,ishig@stanford.edu';
    const subject = encodeURIComponent('FORGE AI Film Festival Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Context: ${formData.context}\n\n` +
      `What draws you to this:\n${formData.interest}\n\n` +
      `What are you thinking:\n${formData.ideas}`
    );
    
    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', context: '', interest: '', ideas: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">{t('contact.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}>
                <Send className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-3xl mb-4">{t('contact.success.title')}</h3>
              <p className="text-gray-400 text-lg">
                {t('contact.success.message')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    {t('contact.name')} *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                      style={{ 
                        borderColor: 'rgb(55, 65, 81)',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#FF00FF'}
                      onBlur={(e) => e.target.style.borderColor = 'rgb(55, 65, 81)'}
                      placeholder="Antoine Doinel"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    {t('contact.email')} *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                      style={{ 
                        borderColor: 'rgb(55, 65, 81)',
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#FF00FF'}
                      onBlur={(e) => e.target.style.borderColor = 'rgb(55, 65, 81)'}
                      placeholder="antoine@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="context" className="block text-sm text-gray-400 mb-2">
                  {t('contact.context')}
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="context"
                    name="context"
                    value={formData.context}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                    style={{ 
                      borderColor: 'rgb(55, 65, 81)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FF00FF'}
                    onBlur={(e) => e.target.style.borderColor = 'rgb(55, 65, 81)'}
                    placeholder={t('contact.context.placeholder')}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="interest" className="block text-sm text-gray-400 mb-2">
                  {t('contact.interest')}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                    style={{ 
                      borderColor: 'rgb(55, 65, 81)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FF00FF'}
                    onBlur={(e) => e.target.style.borderColor = 'rgb(55, 65, 81)'}
                    placeholder={t('contact.interest.placeholder')}
                  />
                </div>
              </div>

              <div className="mb-8">
                <label htmlFor="ideas" className="block text-sm text-gray-400 mb-2">
                  {t('contact.ideas')}
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    id="ideas"
                    name="ideas"
                    required
                    value={formData.ideas}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors resize-none"
                    style={{ 
                      borderColor: 'rgb(55, 65, 81)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#FF00FF'}
                    onBlur={(e) => e.target.style.borderColor = 'rgb(55, 65, 81)'}
                    placeholder={t('contact.ideas.placeholder')}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                style={{ background: 'linear-gradient(to right, #FF00FF, #FF00FF)' }}
              >
                <span className="text-lg">{t('contact.submit')}</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}