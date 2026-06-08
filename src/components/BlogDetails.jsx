const BlogDetails = () => {
  const comments = [
    {
      id: 1,
      author: "Admin",
      message:
        "Hi, this is a comment. To get started with moderating, editing and deleting comments, please visit the comments screen in the dashboard.",
    },
  ];

  return (
    <section className="bg-[#f3f3f6] py-16 pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-4">
        {/* Page Heading Section */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-[#00C853] text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight pb-5">
            Blog Details
          </h2>

          {/* Watermark Text */}
          <h1 className="absolute left-1/2 top-[-10px] md:top-[-20px] -translate-x-1/2 text-[50px] sm:text-[80px] md:text-[130px] lg:text-[180px] font-bold text-white opacity-60 whitespace-nowrap pointer-events-none select-none">
            Athletic Aim
          </h1>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.08)] rounded-sm">
        {/* Blog Content */}
        <h1 className="sport-condensed text-5xl font-bold text-slate-900 mb-4">
          Hello World!
        </h1>

        <p className="text-gray-600 mb-12">
          Welcome to WordPress. This is your first post. Edit or delete it,
          then start writing!
        </p>

        {/* Comments Section */}
        <h2 className="sport-condensed text-4xl font-semibold text-slate-900 mb-8">
          One Response
        </h2>

        {comments.map((comment) => (
          <div
            key={comment.id}
            className="flex gap-5 border-b border-gray-200 pb-8 mb-12"
          >
            <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-xl">
              👤
            </div>

            <div>
              <h4 className="font-semibold text-lg text-slate-900">
                {comment.author}
              </h4>

              <p className="text-gray-600 mt-3 leading-7">
                {comment.message}
              </p>
            </div>
          </div>
        ))}

        {/* Reply Form */}
        <form className="space-y-5">
          {/* Comment */}
          <div>
            <label htmlFor="comment" className="block mb-2 font-medium text-slate-800">
              Comment *
            </label>

            <textarea
              id="comment"
              rows="8"
              placeholder="Write your comment..."
              className="w-full border border-gray-300 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-slate-800">
              Name *
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-slate-800">
              Email *
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className="block mb-2 font-medium text-slate-800">
              Website
            </label>

            <input
              id="website"
              type="text"
              placeholder="Website URL"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="save-info"
              className="w-4 h-4"
            />

            <label
              htmlFor="save-info"
              className="text-gray-600 text-sm"
            >
              Save my name, email, and website in this browser
              for the next time I comment.
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md transition-all duration-300"
          >
            Post Comment
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;