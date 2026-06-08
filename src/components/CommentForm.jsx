const CommentForm = () => {
  return (
    <section className="max-w-4xl mx-[200px]">
      {/* Blog Title */}
      <h1 className="sport-condensed text-[70px] font-bold text-[#132238] leading-none">
        Hello World!
      </h1>

      {/* Blog Description */}
      <p className="mt-5 text-[16px] text-[#666666]">
        Welcome to WordPress. This is your first post. Edit or delete it, then
        start writing!
      </p>

      {/* One Response */}
      <h2 className="sport-condensed mt-10 text-[52px] font-bold text-[#132238]">
        One Response
      </h2>

      {/* Comment */}
      <div className="mt-8 flex gap-5">
        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-yellow-400 text-2xl">
          👤
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#132238]">Admin</span>
            <span className="text-gray-500">says:</span>
          </div>

          <p className="mt-3 max-w-[700px] text-[15px] leading-7 text-[#666666]">
            Hi, this is a comment.
            <br />
            To get started with moderating, editing and deleting comments,
            please visit the Comments screen in the dashboard.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-12"></div>

      {/* Leave A Reply Heading */}
      <h2 className="sport-condensed text-[52px] font-bold text-[#132238] leading-none">
        Leave A Reply
      </h2>

      {/* Description */}
      <p className="mt-4 mb-8 text-[15px] text-gray-600">
        Your email address will not be published. Required fields are marked *
      </p>

      {/* Form */}
      <form className="space-y-5 py-10">
        {/* Comment */}
        <div>
          <label className="block text-[15px] text-[#444] mb-2">
            Comment *
          </label>

          <textarea
            rows={8}
            className="w-full border border-gray-400 px-4 py-3 outline-none focus:border-gray-600 resize-none"
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-[15px] text-[#444] mb-2">Name *</label>

          <input
            type="text"
            className="w-full h-[48px] border border-gray-400 px-4 outline-none focus:border-gray-600"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[15px] text-[#444] mb-2">Email *</label>

          <input
            type="email"
            className="w-full h-[48px] border border-gray-400 px-4 outline-none focus:border-gray-600"
          />
        </div>

        {/* Website */}
        <div>
          <label className="block text-[15px] text-[#444] mb-2">Website</label>

          <input
            type="text"
            className="w-full h-[48px] border border-gray-400 px-4 outline-none focus:border-gray-600"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="saveInfo"
            className="w-4 h-4 border border-gray-400"
          />

          <label htmlFor="saveInfo" className="text-[14px] text-gray-600">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="sport-condensed mt-3 bg-[#00d26a] hover:bg-[#00bc60] text-black font-bold uppercase tracking-wider px-8 py-3 transition-all duration-300"
        >
          Post Comment
        </button>
      </form>
    </section>
  );
};

export default CommentForm;
