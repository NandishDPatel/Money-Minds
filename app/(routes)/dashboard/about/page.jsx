import React from "react";

const Upgrade = () => {
  return (
    <div className="p-10">
      <h1 className="rounded-md p-2 font-bold text-2xl bg-yellow-400">
        Purpose of creating "Money Minds"
      </h1>
      <div className="">
        <h3 className="rounded-md p-2 font-bold text-xl mt-5 border-b-2 bg-green-400">
          + Motivation:
        </h3>
        <p className="p-4">
          Created to help individuals gain <strong>better control</strong> over
          their <strong>personal finances</strong> by offering an intuitive and
          feature-rich <strong>budget management platform.</strong> The app
          allows users to create multiple budgets tailored to different goals,
          track their daily expenses, and visualize their spending habits
          through <strong>interactive charts.</strong> Our goal with "Money
          Minds" is to simplify this process, offering a{" "}
          <strong>user-friendly experience</strong> where users can easily
          create, manage, and review their budgets and expenses — all in one
          place. Whether someone is saving for a big purchase, managing monthly
          household expenses, or simply trying to become{" "}
          <strong>more financially aware.</strong>
        </p>
      </div>
      <div className="">
        <h3 className="rounded-md p-2 font-bold text-xl mt-5 bg-blue-300">
          + Key features:
        </h3>
        <ul className="list-disc">
          <div className="ms-10">
            <li>Real time chart integration using Recharts library</li>
            <li>
              Attractive UI and UX with Tailwind CSS and ShadCn components
            </li>
            <li>Very smooth and easy to use interface</li>
            <li>Secure authentication with Clerk for login and signup</li>
            <li>Creation of multiple budgets and multiple expenses</li>
          </div>
        </ul>
      </div>
      <div className="">
        <h3 className="rounded-md p-2 font-bold text-xl mt-5 bg-gray-300">
          + Learning Outcomes:
        </h3>
        <ul className="list-disc">
          <div className="ms-10">
            <li>Learned the new technology Next JS</li>
            <li>
              First time used Clerk for authentication and Drizzle ORM for
              database
            </li>
            <li>Used Tailwind CSS for styling</li>
            <li>First time used Recharts library to create chart</li>
            <li>Got to know about the Skeleton Effect for loading </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Upgrade;
