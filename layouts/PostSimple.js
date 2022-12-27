import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import { BlogSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import formatDate from "@/lib/utils/formatDate";
// import Comments from '@/components/comments'
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import { HiOutlinePencil, HiOutlineClock, HiOutlineEye } from "react-icons/hi";
import { BsCalendarDate } from "react-icons/bs";

export default function PostLayout({
  frontMatter,
  authorDetails,
  next,
  prev,
  children,
}) {
  const { slug, date, title, summary, readingTime } = frontMatter;

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/snippets/${frontMatter.slug}`}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="mx-auto max-w-3xl">
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      <BsCalendarDate className="mr-1 -mt-1 inline h-4 w-4" />{" "}
                      {formatDate(date)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="px-8 py-8">
                <div className="grid gap-8 items-start justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                      <span className="flex items-center space-x-5">
                        {/* <HiOutlinePencil className="h-5 w-5" />
                        <span className="text-primary-400 group-hover:text-gray-100 transition duration-200">
                          {readingTime.words} words{" "}
                        </span> */}

                        <HiOutlineClock className="h-5 w-5" />
                        <span className="text-primary-400 group-hover:text-gray-100 transition duration-200">
                          {readingTime.text}
                        </span>
                        <Link
                          href="/snippets"
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          &#10550; Back to the notes
                        </Link>
                      </span>{" "}
                    </button>
                    {/*  */}

                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0"
            style={{ gridTemplateRows: "auto 1fr" }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">
                {children}
              </div>
            </div>
            {/* <Comments frontMatter={frontMatter} /> */}
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/snippets/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/snippets/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
