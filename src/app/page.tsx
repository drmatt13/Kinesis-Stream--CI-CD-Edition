"use client";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-20">
        <h1 className="text-2xl font-bold mb-8">
          Kinesis Stream: CI/CD Edition
        </h1>

        <video
          src="/kinesis.mp4"
          controls={true}
          className="max-w-full w-[48rem]"
        ></video>
        <a
          href="https://github.com/drmatt13/ci-cd-kinesis-react-demo"
          className="text-blue-600 underline cursor-pointer mt-8 text-2xl hover:text-blue-700 visited:text-purple-600"
        >
          github repo link
        </a>
        <div className="mt-12 max-w-[90vw]">
          <p>
            This project serves a multifaceted purpose: to demonstrate advanced
            CI/CD capabilities, expertise in Kinesis data streaming, and
            proficiency in front-end design using React. Within the visual
            showcase, React features five clickable data streaming functions
            which are showcased on the left. Though they share the same
            underlying Lambda function, each sends a distinct colored payload
            when toggled, each represented by a distinct color. On the opposite
            side, a singular polling function extracts this data, adhering to
            the order of the sent batches. For instance, if blue payloads are
            sent in multiple batches followed by different colors, polling would
            animate these blue batches sequentially, preserving their order, and
            then progress through the subsequent colors. This visual
            representation not only highlights the precision of data streaming
            but also emphasizes the importance of payload sequencing.
          </p>
          <p className="mt-6">
            Beyond just showcasing functionality, the project emphasizes the
            intricate choreography between different AWS services. By leveraging
            Lambda in tandem with Kinesis, it accentuates the synergy possible
            in AWS{"'"}s ecosystem, underpinning the foundation of real-time
            data handling.
          </p>
        </div>
        <div
          className="max-w-[90vw] mt-16 p-4 shadow-lg shadow-black/30 cursor-pointer bg-white rounded-xl"
          onClick={() => window.open("/architecture.svg")}
        >
          <img src="/architecture.svg" alt="architecture.svg" />
        </div>
        <div className="mt-16 max-w-[90vw]">
          <p>
            The architectural SVG presents the blueprint of the entire
            operation. Originating from a GitHub repository, it illustrates the
            workflow: cloning the SAM project, uploading it to a personal
            CodeCommit repository, initializing an S3 bucket for the React app,
            setting up an IAM role for CodeBuild, and establishing the CodeBuild
            project. With the inclusion of a buildspec within the repository, it
            facilitates the streamlined deployment of the React application and
            the AWS resources.
          </p>
          <p className="mt-6">
            The culmination of this setup sees the deployment of the API Gateway
            and the twin Lambda functions, each optimized for a specific task,
            working in conjunction with a Kinesis data stream. Additionally,
            DynamoDB plays a pivotal role, particularly in the polling function,
            ensuring consistent data tracking and retrieval. This entire
            endeavor underscores the possibilities of AWS services when combined
            efficiently and effectively. Kinesis Stream: CI/CD Edition
          </p>
        </div>
      </div>
      <footer>
        <div className="flex flex-col items-center justify-center mt-12 md:mt-20 bg-black/10 w-full backdrop-blur h-28">
          <p className="text-xl font-bold mt-6 mb-2">Made by Matthew Sweeney</p>
          <div className="flex flex-row space-x-4 mb-4">
            <a
              href="
                https://www.linkedin.com/in/drmatt13/"
              className="text-blue-600 underline cursor-pointer hover:text-blue-700 visited:text-purple-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
