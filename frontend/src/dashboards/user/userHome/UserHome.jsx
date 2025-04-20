import "./userhome.scss";
import { BarChart, CountCard, Loader, PieChart } from "../../../components";
import { useEffect, useState } from "react";
import { STATUSES, getUserDashboardStats } from "../../../http";

const UserHome = () => {
  const [status, setStatus] = useState(STATUSES.IDLE);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setStatus(STATUSES.LOADING);
    try {
      const { data } = await getUserDashboardStats();
      setData(data);
      // console.log(data);
      setStatus(STATUSES.IDLE);
    } catch (error) {
      console.log(error);
      setStatus(STATUSES.ERROR);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (status === STATUSES.LOADING) {
    return <Loader />;
  }

  return (
    <div className="user__home__container">
      {/* COUNTER CARDS */}
      <div className="card__wrapper">
        <CountCard
          heading={"Borrowed Books"}
          count={data?.numberOfBorrowedBooks}
          link={"borrowed-books"}
        />
        <CountCard
          heading={"Reserved Books"}
          count={data?.numberOfReservedBooks}
          link={"reserved-books"}
        />
        <CountCard
          heading={"Returned Books"}
          count={data?.numberOfReturnedBooks}
          link={"returned-books"}
        />
        <CountCard
          heading={"Overdue Books"}
          count={data?.numberOfOverDueBooks}
          link={"borrowed-books"}
        />
      </div>
    </div>
  );
};

export default UserHome;
