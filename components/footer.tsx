import Image from "next/legacy/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  const t = await getTranslations("Footer");
  return (
    <footer className='md:mx-40 mx-4 '>
      <div className='bg-white rounded-t-2xl overflow-hidden relative sm:px-8 md:py-24'>
        {/* Background Image */}
        <div className='absolute inset-0 w-full h-full z-0'>
          <Image
            priority
            alt='Background shape'
            layout='fill'
            objectFit='cover'
            src={"/footer_images/layer.png"}
          />
        </div>

        {/* Content */}
        <div className='relative z-10 py-6 md:py-12'>
          <div className='flex flex-wrap md:flex-nowrap justify-between gap-8'>
            {/* Left Column */}
            <div className='w-full md:w-1/3'>
              {/* for large screens */}
              <div className='mb-6 flex items-center justify-center md:justify-start max-md:hidden'>
                <Image
                  src={"/footer_images/mock-exam-logo.png"}
                  alt='Mock Exam Logo'
                  width={155}
                  height={45}
                />
              </div>
              {/* for small screens */}
              <div className='mb-6 max-md:flex items-center justify-center md:justify-start md:hidden'>
                <Image
                  src={"/footer_images/mock-exam-logo.png"}
                  alt='Mock Exam Logo'
                  width={115}
                  height={30}
                />
              </div>
              <p className='text-[#1F3B5F] mb-6 md:mb-16 md:w-80 max-md:tex-base max-md:text-center w-full'>
                បង្កើតដោយសិស្សនៃវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជាជួយប្អូនៗសិស្សទី១២ដើម្បីប្រលងចូលតាមដើម្បីប្រលងចូលតាម
              </p>

              <div className="flex flex-col items-start max-md:items-center">
                <p className='text-[#1F3B5F] mb-6 md:mb-6 md:w-80 text-xl max-md:tex-base w-full max-md:text-center'>
                  ទំនាក់ទំនងមកកាន់យើង
                </p>
                <div className='flex flex-wrap gap-4'>
                  {[
                    { name: "facebook", url: "https://facebook.com" },
                    { name: "telegram", url: "https://t.me" },
                    { name: "youtube", url: "https://youtube.com" },
                    { name: "instagram", url: "https://instagram.com" },
                    { name: "tik-tok", url: "https://tiktok.com" },
                  ].map((platform) => (
                    <Link key={platform.name} href={platform.url} target='_blank'>
                      <Image
                        src={`/footer_images/${platform.name}.png`}
                        alt={platform.name}
                        width={30}
                        height={30}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Center Column - Illustration */}
            <div className='w-full md:w-1/3 flex justify-center items-center py-6 md:py-0'>
              <Image
                src={"/footer_images/book.png"}
                alt='Document'
                width={248}
                height={243}
              />
            </div>

            {/* Right Column - Form */}
            <div className='w-full md:w-1/3 flex flex-col justify-between md:pl-8'>
              <div className='invisible'>
                <Image
                  src={"/footer_images/mock-exam-logo.png"}
                  alt='Mock Exam Logo'
                  width={166}
                  height={54}
                  className='opacity-0'
                />
              </div>
              <div className='mt-auto'>
                <p className='text-[#1F3B5F] mb-2'>{t("Recommendation")}</p>
                {/* Input container with relative positioning */}
                <div className='relative w-full md:w-auto'>
                  <input
                    type='text'
                    placeholder={t("comment")}
                    className='w-full px-4 py-2 pr-16 border border-gray-200 rounded-md focus:outline-none'
                  />
                  {/* Submit button inside input field */}
                  <button className='absolute right-1 top-1 bottom-1 bg-[#0162A3] hover:bg-[#003D7A] text-white px-4 rounded-md'>
                    {t("Submit")}
                  </button>
                </div>
              </div>

              <div className='mt-6 md:mt-auto pt-6 flex justify-end'>
                <Image
                  src={"/footer_images/2.0.png"}
                  alt='Version 2.0'
                  width={137}
                  height={55}
                />
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className='border-t border-gray-300 mt-10' />
          <div className='text-center text-gray-400 text-l mt-6'>
            {t("Copyright")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
