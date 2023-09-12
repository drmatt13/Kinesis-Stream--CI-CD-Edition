"use client";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col items-center pt-12 lg:pt-16 pb-10 md:pb-12 px-6 sm:px-10 text-sm sm:text-base">
        <h1 className="text-lg lg:text-2xl font-bold mb-12">
          Kinesis Stream: CI/CD Edition
        </h1>

        <video
          src="/kinesis.mp4"
          controls={true}
          className="max-w-full md:w-[90%] lg:w-[75%]"
        ></video>
        <a
          href="https://github.com/drmatt13/ci-cd-kinesis-react-demo"
          className="text-blue-600 underline cursor-pointer mt-8 text-base lg:text-xl hover:text-blue-700 visited:text-purple-600"
        >
          github repository
        </a>
        <div className="mt-8 max-w-[90vw]">
          <p>
            This project serves a multifaceted purpose: to demonstrate advanced
            CI/CD capabilities, expertise in Kinesis data streaming, and
            proficiency in front-end design using React. Within the visual
            showcase, the React frontend offers five interactive data streaming
            functions displayed on the left. Moreover, meticulous React state
            management ensures the frontend remains resilient and user-centric.
            Instead of mere binary states for the data streaming functions, an
            advanced object-based state system is employed. This allows for
            multiple statuses, such as {"'"}running{"'"}, {"'"}stopped{"'"}, and{" "}
            {"'"}shutting down{"'"}, guaranteeing that user interactions—like
            toggling functions on and off—flow smoothly and don{"'"}t disrupt
            the animations or overwhelm the system. Regarding these data
            streaming functions, each one, while relying on the same underlying
            Lambda function, has its unique behavior: periodically dispatching a
            payload with a randomized value when toggled on, identifiable by a
            unique color. On the right, a singular polling function extracts
            this data, preserving the order of the sent batches. For instance,
            if blue payloads are transmitted across multiple batches followed by
            other shades, polling first retrieves all the blue sequences before
            moving on to the subsequent colors, ensuring the original order of
            data transmission is maintained. To ensure the integrity of this
            polling process, the system adopts the {"'"}trim-horizon{"'"}{" "}
            starting position of Kinesis Data Streams. This ensures that the
            polling starts from the oldest available data. Meanwhile, DynamoDB
            is employed to consistently track the shard iterator{"'"}s position,
            guaranteeing that subsequent reads are seamless and maintain the
            data{"'"}s sequential integrity. This holistic approach not only
            underscores the precision of data streaming but also accentuates the
            significance of payload sequencing. By introducing the context of
            the data streaming functions first, I hope it clarifies the sequence
            of events and actions described in the paragraph.
          </p>

          <p className="mt-6">
            Beyond its evident functionalities, this project epitomizes the art
            of Infrastructure as Code (IaC) through CloudFormation and the
            agility of CI/CD processes. It showcases the rapid deployment and
            seamless teardown capabilities that businesses greatly value. Using
            Lambda with Kinesis, I{"'"}ve designed a streamlined data flow that
            maximizes efficiency, emphasizing the practical applications and
            potential of the AWS toolkit. This swift and modular deployment,
            empowered by CI/CD and CloudFormation, ensures that real-time data
            processing is not just efficient but also scalable and adaptable to
            changing business needs. In essence, this project is both a
            testament to the transformative power of AWS services and an
            endorsement of the modern deployment strategies that drive today
            {"'"}s most agile tech enterprises.
          </p>
        </div>
        <div
          className="mt-12 sm:mt-14 cursor-pointer bg-white"
          onClick={() => window.open("/architecture.svg")}
        >
          <img src="/architecture.svg" alt="architecture.svg" />
        </div>
        <div className="italic text-xs lg:text-sm">^ click to expand</div>
        <div className="mt-12 sm:mt-14 max-w-[90vw]">
          <p>
            The provided SVG paints a comprehensive picture, outlining both the
            setup and AWS architectural components of the project. Setting up
            the environment and replicating this architecture is made
            user-friendly, with guidance available in the linked GitHub
            repository. By walking through the tutorial, users can redeploy this
            robust architecture on AWS, ensuring a hands-on understanding of the
            system{"'"}s intricacies and utility.
          </p>
          <p className="mt-6">
            The journey starts with a GitHub repository, guiding users
            step-by-step through the process: from cloning the SAM project to
            uploading it to their own CodeCommit repository. Necessary
            resources, such as an S3 bucket for the React app and an IAM role
            for CodeBuild, are laid out in the walkthrough. The repository even
            offers a built-in buildspec, streamlining the deployment of both the
            React app and associated AWS resources. With this design, I aim to
            demystify the intricacies of cloud architectures, ensuring that both
            tech-savvy individuals and newcomers alike can navigate and
            understand the setup with ease.
          </p>
          <p className="mt-6">
            At its core, this project is more than just lines of code and cloud
            components—it{"'"}s a tangible testament to what I bring to the
            table. Using widely recognized AWS tools, I{"'"}ve built a system
            that effectively manages and displays streaming data in real-time.
            This showcases my adeptness in harnessing the power of AWS services
            like Lambda for data input, DynamoDB for ensuring data consistency,
            and API Gateway for seamless communication. More importantly, it
            underscores my commitment to creating user-centric solutions that
            are not just efficient but also intuitive. For recruiters and
            potential employers, this translates to a proven capability to
            innovate, optimize, and drive results in any tech-driven
            environment.
          </p>
        </div>
      </div>
    </>
  );
}
