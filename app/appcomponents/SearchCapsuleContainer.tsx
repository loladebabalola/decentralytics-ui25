import { useState, useTransition } from "react";
import SearchCapsule from "./SearchCapsule";
import { useQuery } from "@tanstack/react-query";
import { DaoData } from "../utils/interface";
import { OrganizationLists } from "../utils/data";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "./LoadingSpinner";

//simulating API function and response
const fetchDAOs = async (): Promise<DaoData[]> => {
  // pretend this is async for consistency with useQuery API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(OrganizationLists.daos ?? []);
    }, 300); // simulate a delay
  });
};


const SearchCapsuleContainer = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [query, setQuery] = useState("");

    const { data: daos, isFetching, isError } = useQuery({
      queryKey: ["dao-search", query],
      queryFn: () => fetchDAOs().then(res => 
        res.filter(dao => dao.dao_name.toLowerCase().includes(query.toLowerCase())) ?? []),
      enabled: !!query,
      staleTime: 1000 * 60 * 10,
    });

    const handleNavigation = (daoName: string) => {
      startTransition(() => {
        router.push(`/auth/dao/dao-detail/${daoName}`);
      });
    };
      
    return (
  
    <div className="p-4 max-w-xl mx-auto relative">
      <SearchCapsule
      onSearch={(q) => setQuery(q)}
      placeholder="Search..."
      debounceMs={400}
      />
      {query.trim() !== "" && (isFetching || daos || isError) &&  (
        <div className=" rounded p-4 absolute top-[100%] left-0 w-full h-auto 
         max-h-[200px] overflow-y-auto bg-[#11171D] border border-[#222B35]">
          {isFetching && <p className="text-gray-500 text-sm">Searching...</p>}

          {isError && (
            <p className="text-red-500 text-sm">Something went wrong. Try again.</p>
          )}

          {!isFetching && daos?.length === 0 && (
            <p className="text-red-500 text-sm">
              No DAOs match your criteria.
            </p>
          )}

          {!isFetching && daos && daos.length > 0 && (
            <ul className="list-disc pl-5 text-sm space-y-5">
              {daos.map(item => (
                <li className="list-none text-white" key={item.rank} onClick={() => handleNavigation(item.dao_name)}>
                  {item.dao_name}
                </li>
              ))}
              {isPending && <LoadingSpinner />}
            </ul>
          )}
        </div>
      )}
    </div>
    )
}

export default SearchCapsuleContainer;
