'use client'

import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about',
    submenu: [
      { name: 'Who We Are?', href: '/about/who-we-are' },
      { name: 'Mission and Values', href: '/about/mission' },
      { name: 'Infrastructure', href: '/about/infrastructure' },
      { name: 'Courts and Clients', href: '/about/courts-clients' },
    ]
  },
  {
    name: 'Practice Areas',
    href: '/practice',
    submenu: [
      { name: 'Specialized Services', href: '/practice/specialized' },
      { name: 'Other Services', href: '/practice/other' },
    ]
  },
  {
    name: 'International Associations',
    href: '/international',
    submenu: [
      { name: 'Century International Gold Quality Era Award', href: '/international/award' },
      { name: 'International Co-operation Agreements', href: '/international/agreements' },
    ]
  },
  { name: 'Legal Education', href: '/education' },
  {
    name: 'Media Coverage',
    href: '/media',
    submenu: [
      { name: 'TV Channels Coverage', href: '/media/tv' },
      { name: 'Print Media Coverage', href: '/media/print' },
      { name: 'Magazines', href: '/media/magazines' },
    ]
  },
  { name: 'News', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-[88px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center space-x-1 px-4 py-4 text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 min-w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 animate-in slide-in-from-top-2 duration-200">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 animate-in slide-in-from-top-4 duration-300">
            {navItems.map((item) => (
              <div key={item.name} className="py-1">
                <a
                  href={item.href}
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}