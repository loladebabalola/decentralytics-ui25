This component handles the following;

AIMS:

I-The user views a list of DAOs matching the search keywords and filter criteria, after the user enters keywords in the search bar or (selects filters).

II-If no results are found, the system displays a message such as “No DAOs match your
criteria.”

III- If the database query fails, the system notifies the user of an error and prompts them to retry.

IV-The user selects a specific DAO by clicking on its entry.

OUTCOME:
** The user is redirected to the selected DAO profile.

**Files that uses tbis component
**`dashboard.tsx`, `home page or / `

This is a parent container using the searchCapsule compoenent responsible to debouncing the search text.
Data is fetched in this component using TanstackQuery, for fetching, revalidation and caching effectively.
 
check the files for TanStack query setup 
** `lib/query-cliet.ts` and `lib/providers/query-provider.ts`

**For developemnt purposes, static data is used in place of fetched data from the server or API route,
so a litle simulation is assumed for consistency with useQuery;
//simulating API function and response
const fetchDAOs = async (): Promise<DaoData[]> => {
  // pretend this is async for consistency with useQuery API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(OrganizationLists.daos ?? []);
    }, 300); // simulate a delay
  });
};

**Followed by using useQuery to fetcha and filter through the DAO list

const { data: daos, isFetching, isError } = useQuery({
    queryKey: ["dao-search", query],
    queryFn: () => fetchDAOs().then(res => 
    res.filter(dao => dao.dao_name.toLowerCase().includes(query.toLowerCase())) ?? []),
    enabled: !!query,
    staleTime: 1000 * 60 * 10,
});

***This component displays an error message if there's no matching result based on this logic;
{!isFetching && daos?.length === 0 && (
<p className="text-red-500 text-sm">
    No DAOs match your criteria.
</p>
)}

***on encountering an Error panel shows an error message prompting the user to search something new
 {isError && (
<p className="text-red-500 text-sm">Something went wrong. Try again.</p>
)}

***When the use is typing or has finished typing in accordance to the debounce logic in the search bar, `SearchCapsule.tsx`, it shortly shows a "fetching..." message
{isFetching && <p className="text-gray-500 text-sm">Searching...</p>}



**These paired with the syncing of the input and query state between the searchBar and its parent container SearchCapsuleContainer to search through the dao list in memory(for mock ups), satisfies I, II and III.

Satisfying aim IV.

**From the search results in the dropdown, the user can select any Dao of choice, on clicking any DAO from the list, a nextjs custom hook useTransition , whic provides us is isPending state to show a loading spinner or loading information while transitioning to the selected DAO page;
const [isPending, startTransition] = useTransition();

**Then a function is passed to the list to handle the transition, we dont eant to call this fucniton inline to avoid reating a new instance on every render.

**
<ul className="list-disc pl-5 text-sm space-y-5">
    {daos.map(item =>(
    <li className="list-none text-white" key={item.rank} onClick={() => handleNavigation(item.dao_name)}>
        {item.dao_name}
    </li>
    ))}
    {isPending && <LoadingSpinner />} `LoadingSpinner.tsx`
</ul>**

//onClick function logic
const handleNavigation = (daoName: string) => {
    startTransition(() => {
    router.push(`/auth/dao/dao-detail/${daoName}`);
    });
};

