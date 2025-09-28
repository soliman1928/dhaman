import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-furniture-transportation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="furniture-page" dir="rtl">
      <!-- Add structured content for SEO -->
      <div class="seo-content-hidden" style="display: none;">
        <h1>{{ seoTitle }}</h1>
        <p>{{ seoDescription }}</p>
        <div itemscope itemtype="https://schema.org/MovingCompany">
          <span itemprop="name">مؤسسة الضمان الذهبي لنقل الأثاث</span>
          <span itemprop="telephone">0559160622</span>
          <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <span itemprop="addressCountry">SA</span>
            <span itemprop="addressRegion">جدة</span>
          </div>
        </div>
      </div>

      <header>
        <div class="container">
          <h1 class="logo">مؤسسة الضمان الذهبي لنقل الاثاث - 0559160622</h1>
          <p class="tagline">نقل عفش مع الفك والتركيب والتغليف والضمان - في جدة وجميع أنحاء المملكة العربية السعودية</p>
        </div>
      </header>

      <!-- Fixed Contact Icons -->
      <div class="fixed-contact-icons" [class.hidden]="contactIconsHidden">
        <a href="tel:0559160622" class="contact-icon phone-icon" [class.hidden]="contactIconsHidden" title="اتصل بنا">
          <i class="fas fa-phone"></i>
        </a>
        <a href="https://wa.me/966559160622" target="_blank" class="contact-icon whatsapp-icon" [class.hidden]="contactIconsHidden" title="واتساب">
          <i class="fab fa-whatsapp"></i>
        </a>
        <button class="contact-icon close-icon" (click)="toggleContactIcons()" title="إخفاء/إظهار">
          <i class="fas fa-times" *ngIf="!contactIconsHidden"></i>
          <i class="fas fa-phone-alt" *ngIf="contactIconsHidden"></i>
        </button>
      </div>

      <div class="container">
        <!-- Main content sections with proper headings for SEO -->
        <section class="contact">
          <h2>اتصل بنا الآن للحصول على أفضل خدمة نقل عفش</h2>
          <p><i class="fas fa-phone"></i> هاتف: 0559160622</p>
          <br>
          <a href="https://wa.me/966559160622" target="_blank" class="btn-primary">
            اطلب خدمة الآن
          </a>
        </section>

        <!-- Enhanced SEO section with more structured content -->
        <section class="seo-section">
          <h2 class="seo-title">أفضل شركة نقل عفش متخصصة في جدة والمملكة العربية السعودية</h2>

          <div class="seo-image-container">
            <div class="seo-image">
              <div class="seo-image-content">
                <div class="seo-image-logo">الضمان الذهبي لنقل الإثاث</div>
                <div class="seo-image-text">اضمن عفشك بأفضل خدمة نقل في جدة والمملكة</div>
              </div>
            </div>
          </div>

          <div class="seo-content">
            <h3>شركة نقل عفش جدة - الخيار الأمثل لنقل آمن ومضمون</h3>
            <p>
              إذا كنت تبحث عن <strong>شركة نقل عفش في جدة</strong> موثوقة ومحترفة، فإن مؤسسة الضمان الذهبي هي الخيار الأمثل لك. 
              نحن نقدم خدمات <strong>نقل الأثاث في جدة</strong> بأعلى معايير الجودة والأمان، مع فريق من الفنيين المتخصصين 
              في <strong>فك وتركيب العفش</strong> وخدمات <strong>تغليف الأثاث</strong> المحترفة.
            </p>

            <h3>خدمات نقل العفش المتكاملة في جميع مدن المملكة</h3>
            <p>
              تشمل خدماتنا <strong>نقل عفش الرياض</strong> و<strong>نقل عفش مكة المكرمة</strong> و<strong>نقل عفش المدينة المنورة</strong> 
              بالإضافة إلى خدمات <strong>نقل المكاتب</strong> و<strong>نقل الأجهزة الكهربائية</strong>. نحن نستخدم أحدث الأساليب 
              في التغليف والنقل لضمان وصول عفشك بحالة ممتازة.
            </p>

            <h3>لماذا نحن أفضل شركة نقل عفش في السعودية؟</h3>
            <ul>
              <li>✓ فريق فنيين محترفين مدربين على أعلى مستوى</li>
              <li>✓ سيارات نقل مجهزة ومقفولة لحماية العفش</li>
              <li>✓ خدمات فك وتركيب شاملة لجميع أنواع الأثاث</li>
              <li>✓ تغليف احترافي بمواد عالية الجودة</li>
              <li>✓ أسعار تنافسية مع ضمان على الخدمة</li>
              <li>✓ خدمة عملاء متاحة 24/7</li>
            </ul>

            <div class="cities-service">
              <h3>مناطق خدماتنا في المملكة العربية السعودية</h3>
              <div class="cities-grid">
                <div class="city-item">
                  <h4>نقل عفش جدة</h4>
                  <p>خدمة نقل عفش متكاملة في جدة مع فنيين متخصصين</p>
                </div>
                <div class="city-item">
                  <h4>نقل عفش الرياض</h4>
                  <p>أفضل شركة نقل أثاث في الرياض بأسعار مناسبة</p>
                </div>
                <div class="city-item">
                  <h4>نقل عفش مكة المكرمة</h4>
                  <p>خدمات نقل العفش في مكة مع الضمان الشامل</p>
                </div>
              </div>
            </div>

            <div class="seo-keywords">
              <h4>خدماتنا المتخصصة:</h4>
              <div class="keywords-list">
                <span class="keyword" *ngFor="let keyword of keywords">{{ keyword }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Rest of your existing sections... -->
        <section class="services">
          <h2 class="service-title">خدماتنا المتكاملة لنقل العفش</h2>
          <p>نقدم في شركتنا خدمات نقل العفش المتكاملة التي تشمل الفك والتركيب والتغليف بأسعار مناسبة مع ضمان على الخدمة. نحن نستخدم سيارات مقفولة مجهزة خصيصاً لنقل العفش لحماية أغراضكم أثناء التنقل بين مدن المملكة العربية السعودية.</p>

          <div class="service-list">
            <div class="service-item" *ngFor="let service of services">
              <div class="service-img">
                <img [src]="service.image" [alt]="service.title + ' - ' + service.description">
              </div>
              <div class="service-content">
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <footer>
        <div class="container">
          <div class="social-icons">
            <a href="#" aria-label="فيسبوك"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="تويتر"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="انستغرام"><i class="fab fa-instagram"></i></a>
            <a href="https://wa.me/966559160622" aria-label="واتساب"><i class="fab fa-whatsapp"></i></a>
          </div>
          <p>مؤسسة الضمان الذهبي لنقل الاثاث - خدمات نقل عفش مع الفك والتركيب والتغليف والضمان في جميع أنحاء المملكة العربية السعودية</p>
          <p>جميع الحقوق محفوظة ©2024</p>
        </div>
      </footer>
    </div>
  `,
  styles: [`
    /* تنسيقات عامة */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .furniture-page {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    /* Fixed Contact Icons Styles */
    .fixed-contact-icons {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .contact-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-size: 24px;
      color: white;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      border: none;
      cursor: pointer;
    }

    .phone-icon {
      background-color: #25d366;
    }

    .phone-icon:hover {
      background-color: #20b954;
      transform: scale(1.1);
      color: white;
    }

    .whatsapp-icon {
      background-color: #25d366;
    }

    .whatsapp-icon:hover {
      background-color: #20b954;
      transform: scale(1.1);
      color: white;
    }

    .close-icon {
      background-color: #8e44ad;
    }

    .close-icon:hover {
      background-color: #7d3c98;
      transform: scale(1.1);
    }

    /* ترويسة الصفحة */
    header {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/images/logo.png');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 40px 0;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .logo {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 15px;
    }

    .tagline {
      font-size: 20px;
      margin-bottom: 20px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    /* قسم SEO الجديد */
    .seo-section {
      background-color: white;
      border-radius: 8px;
      padding: 40px;
      margin: 40px 0;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    }

    .seo-title {
      color: #1a5fb4;
      border-bottom: 2px solid #1a5fb4;
      padding-bottom: 15px;
      margin-bottom: 30px;
      text-align: center;
      font-size: 32px;
    }

    .seo-image-container {
      width: 100%;
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
    }

    .seo-image {
      width: 100%;
      max-width: 800px;
      height: 400px;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1a5fb4 0%, #0d3d6b 100%);
      position: relative;
    }

    .seo-image-content {
      text-align: center;
      color: white;
      padding: 20px;
      z-index: 2;
    }

    .seo-image-logo {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 15px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .seo-image-text {
      font-size: 24px;
      opacity: 0.9;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }

    .seo-image::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
      border-radius: 8px;
    }

    .seo-content {
      line-height: 1.8;
      font-size: 18px;
    }

    .seo-content h3 {
      color: #1a5fb4;
      margin: 25px 0 15px;
      font-size: 24px;
    }

    .seo-content p {
      margin-bottom: 20px;
      color: #444;
    }

    .seo-keywords {
      background-color: #f0f7ff;
      padding: 20px;
      border-radius: 8px;
      margin: 30px 0;
      border-right: 4px solid #1a5fb4;
    }

    .keywords-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 15px;
    }

    .keyword {
      background-color: #1a5fb4;
      color: white;
      padding: 8px 15px;
      border-radius: 20px;
      font-size: 14px;
    }

    /* قسم الخدمات */
    .services {
      background-color: white;
      width: 100%;
      border-radius: 8px;
      padding: 30px;
      margin: 30px 0;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    }

    .service-title {
      color: #1a5fb4;
      border-bottom: 2px solid #1a5fb4;
      padding-bottom: 10px;
      margin-bottom: 30px;
      text-align: center;
      font-size: 28px;
    }

    .service-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin-top: 20px;
    }

    .service-item {
      background-color: #f8f9fa;
      padding: 0;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .service-item:hover {
      transform: translateY(-5px);
    }

    .service-img {
      height: 200px;
      overflow: hidden;
    }

    .service-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }

    .service-item:hover .service-img img {
      transform: scale(1.05);
    }

    .service-content {
      padding: 20px;
    }

    /* Company Logo Styling */
    .company-logo {
      max-height: 300px;
      width: auto;
      transition: transform 0.3s ease;
    }

    .company-logo:hover {
      transform: scale(1.05);
    }

    /* قسم لماذا نحن */
    .why-us {
      background: linear-gradient(rgba(233, 247, 254, 0.9), rgba(233, 247, 254, 0.9)), url('/assets/images/why-us-bg.jpg');
      background-size: cover;
      background-position: center;
      padding: 60px 30px;
      border-radius: 8px;
      margin: 40px 0;
      text-align: center;
      position: relative;
    }

    .why-us:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #e9f7fe;
      z-index: -1;
      border-radius: 8px;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }

    .feature {
      text-align: center;
      padding: 25px 15px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .feature i {
      font-size: 50px;
      color: #1a5fb4;
      margin-bottom: 20px;
    }

    /* معرض الصور */
    .gallery {
      margin: 50px 0;
    }

    .gallery-title {
      color: #1a5fb4;
      text-align: center;
      margin-bottom: 30px;
      font-size: 28px;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
    }

    .gallery-item {
      height: 250px;
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }

    .gallery-item:hover img {
      transform: scale(1.1);
    }

    /* أسعار وتغطية */
    .pricing-coverage {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 30px;
      margin: 40px 0;
    }

    .pricing, .coverage {
      background-color: white;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    }

    .coverage-map {
      margin-top: 20px;
      text-align: center;
    }

    .coverage-map img {
      max-width: 100%;
      border-radius: 8px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    /* الاتصال */
    .contact {
      background: linear-gradient(rgba(26, 95, 180, 0.9), rgba(13, 61, 107, 0.9)), url('https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 60px 40px;
      border-radius: 8px;
      text-align: center;
      margin: 40px 0;
    }

    .btn-primary {
      background-color: #ff6b00;
      color: white;
      padding: 15px 35px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 20px;
      display: inline-block;
      text-decoration: none;
    }

    .btn-primary:hover {
      background-color: #e55d00;
      transform: translateY(-2px);
    }

    /* التذييل */
    footer {
      background-color: #0d3d6b;
      color: white;
      text-align: center;
      padding: 30px;
      margin-top: 50px;
    }

    .social-icons {
      margin: 20px 0;
    }

    .social-icons a {
      color: white;
      font-size: 24px;
      margin: 0 10px;
      transition: color 0.3s;
    }

    .social-icons a:hover {
      color: #ff6b00;
    }

    .visit-logs {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
    }

    .fixed-contact-icons.hidden .phone-icon,
    .fixed-contact-icons.hidden .whatsapp-icon {
      display: none;
    }

    .contact-icon.hidden {
      display: none;
    }

    /* التجاوب مع الشاشات المختلفة */
    @media (max-width: 768px) {
      .pricing-coverage {
        grid-template-columns: 1fr;
      }

      header {
        padding: 30px 0;
      }

      .logo {
        font-size: 28px;
      }

      .tagline {
        font-size: 18px;
      }

      .seo-image {
        height: 300px;
      }

      .seo-image-logo {
        font-size: 28px;
      }

      .seo-image-text {
        font-size: 18px;
      }

      .seo-content {
        font-size: 16px;
      }

      .keywords-list {
        justify-content: center;
      }

      .fixed-contact-icons {
        right: 10px;
        bottom: 10px;
      }

      .contact-icon {
        width: 50px;
        height: 50px;
        font-size: 20px;
      }

      .company-logo {
        margin-top: 20px;
        max-height: 200px;
      }
    }
  `]
})
export class FurnitureTransportationComponent implements OnInit {

   visitCount = 0;
  contactIconsHidden = false;

  seoTitle = 'الضمان الذهبي لنقل العفش - أفضل شركة نقل أثاث في المملكة العربية السعودية';
  seoDescription = 'شركة متخصصة في نقل العفش مع خدمات الفك والتركيب والتغليف والضمان في جدة والرياض وجميع مدن المملكة. فنيون محترفون وأسعار تنافسية. اتصل الآن: 0559160622';

  keywords = [
    'نقل عفش جدة',
    'شركة نقل أثاث الرياض',
    'فك وتركيب عفش',
    'تغليف العفش',
    'نقل عفش مكة',
    'نقل عفش المدينة المنورة',
    'نقل عفش الدمام',
    'نقل عفش الخبر',
    'نقل المكاتب',
    'تخزين العفش',
    'فك وتركيب المطابخ',
    'فك وتركيب المكيفات',
    'أفضل شركة نقل عفش',
    'أسعار نقل العفش',
    'افضل شركة نقل العفش فى جده',
    'احسن شركة نقل العفش فى السعودية'
  ];

  services = [
    {
      title: 'فك وتركيب العفش',
      description: 'فنيون متخصصون محترفون في فك وتركيب جميع أنواع غرف النوم، المطابخ، المكيفات، الستائر، النجف، والسخانات.',
      image: '/assets/images/1.png'
    },
    {
      title: 'تغليف العفش',
      description: 'نستخدم مواد تغليف عالية الجودة لحماية عفشكم من الخدوش والتلف أثناء عملية النقل.',
      image: '/assets/images/cover.jpeg'
    },
    {
      title: 'نقل العفش',
      description: 'سيارات مقفولة ومجهزة بشكل خاص لنقل العفش إلى جميع أنحاء المملكة العربية السعودية.',
      image: '/assets/images/tran.jpg'
    },
    {
      title: 'خدمة الضمان',
      description: 'نقدم ضماناً على خدماتنا لضمان رضاكم التام عن جودة العمل المقدم.',
      image: '/assets/images/quality.png'
    }
  ];

  features = [
    {
      icon: 'fas fa-truck-moving',
      title: 'سيارات مجهزة',
      description: 'سيارات نقل مقفولة ومجهزة خصيصاً لنقل العفش بأمان'
    },
    {
      icon: 'fas fa-user-cog',
      title: 'فنيون متخصصون',
      description: 'فريق من الفنيين المحترفين في فك وتركيب جميع أنواع العفش'
    },
    {
      icon: 'fas fa-tag',
      title: 'أسعار مناسبة',
      description: 'أسعارنا تنافسية وتحدد بعد المعاينة من قبل المندوب'
    },
    {
      icon: 'fas fa-award',
      title: 'جودة مضمونة',
      description: 'نضمن لكم خدمة عالية الجودة من البداية حتى النهاية'
    }
  ];

  galleryImages = [
    { src: '/assets/images/gallery1.jpeg', alt: 'نقل عفش في الرياض' },
    { src: '/assets/images/gallery2.jpeg', alt: 'تغليف العفش' },
    { src: '/assets/images/gallery3.jpeg', alt: 'فك وتركيب' },
    { src: '/assets/images/gallery4.jpeg', alt: 'سيارة نقل مجهزة' },
    { src: '/assets/images/gallery5.jpeg', alt: 'مواد التغليف' },
    { src: '/assets/images/gallery6.jpeg', alt: 'فنيون محترفون' }
  ];

  serviceCities = [
    'جدة',
    'الرياض',
    'حائل',
    'مكة المكرمة',
    'المدينة المنورة',
    'الدمام',
    'الخبر',
    'وغيرها من المدن والمناطق'
  ];

   constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

   ngOnInit(): void {
    // this.updateVisitCount();
    this.setAdvancedSEOMetadata();
    
    // Only run browser-specific code in browser
    if (isPlatformBrowser(this.platformId)) {
      this.addStructuredData();
    }
  }

   private setAdvancedSEOMetadata(): void {
    // Set dynamic title
    this.titleService.setTitle(this.seoTitle);
    
    // Update meta description
    this.metaService.updateTag({
      name: 'description',
      content: this.seoDescription
    });

    // Add additional meta tags
    this.metaService.updateTag({
      name: 'keywords',
      content: 'نقل عفش جدة, شركة نقل أثاث الرياض, فك وتركيب عفش, نقل عفش مع الضمان, تغليف العفش'
    });

    // Canonical URL
    this.metaService.updateTag({
      rel: 'canonical',
      href: 'https://www.dhaman-move.online'
    });
  }

  private addStructuredData(): void {
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MovingCompany",
        "name": "مؤسسة الضمان الذهبي لنقل الأثاث",
        "telephone": "+966559160622",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "SA",
          "addressRegion": "Makkah Province",
          "addressLocality": "جدة"
        },
        "areaServed": ["جدة", "الرياض", "مكة المكرمة", "المدينة المنورة"],
        "serviceType": ["نقل العفش", "فك وتركيب الأثاث", "تغليف العفش"]
      });
      document.head.appendChild(script);
    }
  }

  private setPageMetadata(): void {
    // Set page title for browser tab
    this.titleService.setTitle('الضمان الذهبي لنقل الأثاث - أفضل شركة نقل عفش في جدة والسعودية');
    
    // Set favicon
    this.setFavicon('/assets/images/logo.png');
    
    // Set meta description
    this.metaService.updateTag({
      name: 'description',
      content: 'مؤسسة الضمان الذهبي لنقل الأثاث - خدمات نقل العفش مع الفك والتركيب والتغليف والضمان في جدة وجميع أنحاء المملكة العربية السعودية. اتصل الآن: 0559160622'
    });
  }

  private setFavicon(iconUrl: string): void {
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = iconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  toggleContactIcons(): void {
    this.contactIconsHidden = !this.contactIconsHidden;
  }

}