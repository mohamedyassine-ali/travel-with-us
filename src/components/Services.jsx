import { 
  TruckIcon, 
  KeyIcon, 
  MapPinIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      icon: TruckIcon,
      title: "Tourist Transfers",
      description: "Safe and professional transportation from airports to hotels or any destination in Tunisia. Our experienced drivers ensure punctual and pleasant travel.",
      features: [
        { icon: MapPinIcon, text: "Airport & Hotel Transfers" },
        { icon: ClockIcon, text: "24/7 Availability" },
        { icon: ShieldCheckIcon, text: "Safe & Reliable" }
      ]
    },
    {
      icon: KeyIcon,
      title: "Car Rentals",
      description: "Choose from a wide selection of well-maintained vehicles at competitive prices. Daily, weekly, and monthly rental options available.",
      features: [
        { icon: TruckIcon, text: "Wide Vehicle Selection" },
        { icon: CurrencyDollarIcon, text: "Competitive Prices" },
        { icon: ClockIcon, text: "Flexible Rental Periods" }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional transportation solutions for your needs in Tunisia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover group"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <feature.icon className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary-600">
                <p className="text-sm font-semibold text-primary-800 mb-2">
                  For reservations or more details, contact us via WhatsApp:
                </p>
                <a
                  href="https://wa.me/21622669510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-whatsapp-600 hover:text-whatsapp-700 font-semibold transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
                  </svg>
                  +216 22 669 510
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 