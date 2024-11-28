const FooterSection = ({ title, children }) => (
  <div className='space-y-4'>
    <h3 className='text-lg font-semibold text-white'>{title}</h3>
    <div className='flex flex-col space-y-2'>{children}</div>
  </div>
);

export default FooterSection;
