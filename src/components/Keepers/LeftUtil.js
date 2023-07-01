import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../shared/context/auth-context";

const LeftUtil = ({ conv, user }) => {
  const [data, setData] = useState();
  const auth = useContext(AuthContext);
  const token = auth.token;

  useEffect(() => {
    const freindId = conv.members.find((m) => m !== user);

    const getFreind = async () => {
      const responce = await fetch(
        `https://backend-project-git-master-shreyanshchachaundiya.vercel.app/api/users/${freindId}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const res = await responce.json();
      if (!responce.ok) {
        throw new Error(res.message);
      }
      console.log(res.user);
      setData(res.user);
    };
    getFreind();
  }, []);

  return (
    <div className="z-20 flex">
      <div className="flex text-left align-middle pl-[10%] text-[18px] text-[#707070] mb-6 z-40 w-[280px] cursor-pointer">
        <img src="../icons/man.png" className="h-[30px] mr-[5px]" />
        {data?.name}
      </div>
    </div>
  );
};

export default LeftUtil;
