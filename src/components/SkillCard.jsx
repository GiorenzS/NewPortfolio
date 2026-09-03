function SkillCard({ name }) {
  return (
    <div className="inline-flex w-fit items-center rounded-lg border border-[#e5e5e5] bg-white px-3.5 py-2 font-mono text-[16px] text-[#444444] transition-colors duration-200 hover:border-[#bdbdbd] hover:bg-[#fafafa]">
      <span>{name}</span>
    </div>
  );
}

export default SkillCard;