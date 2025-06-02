'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Scale,
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Users,
  Briefcase,
  Globe,
  GraduationCap,
  Newspaper,
  Phone,
  Tv
} from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/', icon: Home, priority: 'high' },
  {
    name: 'About Us',
    href: '/about',
    icon: Users,
    priority: 'high',
    submenu: [
      { name: 'Who We Are?', href: '/about/who-we-are' },
      { name: 'Mission and Values', href: '/about/mission' },
      { name: 'Infrastructure', href: '/about/infrastructure' },
      { name: 'Courts and Clients', href: '/about/courts-clients' },
    ]
  },
  {
    name: 'Practice Areas',
    href: '/ourservices',
    icon: Briefcase,
    priority: 'high',
    // submenu: [
    //   { name: 'Specialized Services', href: '/practice/specialized' },
    //   { name: 'Other Services', href: '/practice/other' },
    // ]
  },
  {
    name: 'International',
    href: '/international',
    icon: Globe,
    priority: 'medium',
    // submenu: [
    //   { name: 'Century International Gold Quality Era Award', href: '/international/award' },
    //   { name: 'International Co-operation Agreements', href: '/international/agreements' },
    // ]
  },
  { name: 'Legal Education', href: '/education', icon: GraduationCap, priority: 'medium' },
  {
    name: 'Media Coverage',
    href: '/medias',
    icon: Tv,
    priority: 'low',
    submenu: [
      { name: 'TV Channels Coverage', href: '/medias/tv' },
      { name: 'Print Media Coverage', href: '/medias/print' },
      { name: 'Magazines', href: '/medias/magazines' },
    ]
  },
  { name: 'News', href: '/news', icon: Newspaper, priority: 'medium' },
  { name: 'Contact Us', href: '/contact', icon: Phone, priority: 'high' },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null)
  const [visibleItems, setVisibleItems] = useState<typeof navItems>([])
  const [hiddenItems, setHiddenItems] = useState<typeof navItems>([])
  
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout>()

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setMobileOpenDropdown(null)
  }, [pathname])

  // Handle responsive navigation based on screen size
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      
      if (screenWidth >= 1024) {
        // Large screens - show all items
        setVisibleItems(navItems)
        setHiddenItems([])
      } else if (screenWidth >= 768) {
        // Medium screens - show high priority items + some medium
        const highPriority = navItems.filter(item => item.priority === 'high')
        const mediumPriority = navItems.filter(item => item.priority === 'medium').slice(0, 2)
        const visible = [...highPriority, ...mediumPriority]
        setVisibleItems(visible)
        setHiddenItems(navItems.filter(item => !visible.includes(item)))
      } else {
        // Small screens - mobile menu handles everything
        setVisibleItems([])
        setHiddenItems(navItems)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleDropdownEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setOpenDropdown(itemName)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  const toggleMobileDropdown = (itemName: string) => {
    setMobileOpenDropdown(prev => prev === itemName ? null : itemName)
  }

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }
// sticky top-[88px]
  return (
    <nav className="bg-white shadow-md sticky top-[82px] z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
  <Link href="/" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
    <Scale className="w-8 h-8" />
  </Link>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" ref={navRef}>
            {visibleItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-blue-900 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4 mr-1.5" />}
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>

                {/* Desktop Dropdown */}
                {item.submenu && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                          isActive(subItem.href)
                            ? 'text-blue-900 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* More menu for hidden items */}
            {hiddenItems.length > 0 && (
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('more')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200">
                  More
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>

                {openDropdown === 'more' && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    {hiddenItems.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className={`flex items-center px-4 py-2 text-sm transition-colors duration-200 ${
                            isActive(item.href)
                              ? 'text-blue-900 bg-blue-50'
                              : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                          }`}
                        >
                          {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-6 border-l border-gray-200">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-4 py-1.5 text-xs transition-colors duration-200 ${
                                  isActive(subItem.href)
                                    ? 'text-blue-900 bg-blue-50'
                                    : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                                }`}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1 max-h-96 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex items-center flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-blue-900 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <ChevronRight 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileOpenDropdown === item.name ? 'rotate-90' : ''
                        }`} 
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.submenu && mobileOpenDropdown === item.name && (
                  <div className="ml-6 mt-1 space-y-1 border-l-2 border-blue-100 pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                          isActive(subItem.href)
                            ? 'text-blue-900 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}