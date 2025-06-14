The goal for this component is to: Find a specific DAO filtered and based on criteria.

*The preconditons to be met are given that:
 The user is on the page with the search bar accessible.

File(s) that use this component:
** `searchCapsuleContainer.tsx`.

libraries/modules used in this component
** `lodash/debounce`

This component can be reused across pages, with custom content or behavior per instance, basically it an encapsulated component thathandles its own logic

it has the following structure;
type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
  buttonLabel?: string;
  debounceMs?: number;
}; `interface.tsx`

it contains an input state, making it a client component
On every keystroke of the user's keyboard, the native input elements gets these keys as the value, this is great, but the search component is not meant to make a request per stroke, its not great for performance, instead **Lodash** library comes in handy, for easy and fine tuned control, less verbose nature, and most especially lighweight.

debouncedSearch Allows debounced control while still supporting immediate search on submit too
It also Delays calling onSearch while typing;

**
const debouncedSearch = useCallback(
  debounce((value: string) => { //delay
    onSearch(value.trim());
  }, debounceMs),//delayValue after the comma
  [onSearch, debounceMs]
);
**

onSearch is a callback function as a prop, it passes the input state on trigger so it can be used in the parent component later for fetching and displaying the lists of related search items.


Then, useEffect is used to effect the changes caued by the entering text or typing into the search bar by the user, updating the parent container consuming the input query from the search bar.
**
 useEffect(() => {
    debouncedSearch(input);
    return () => {
    debouncedSearch.cancel(); // Cancel any pending debounced calls on unmount or query change
    };
}, [input, debouncedSearch]);
**

This is for when the user is typing, if the user has finshed typing, the button can also trigger it

 const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
    debouncedSearch.cancel(); // Cancel pending debounce
    onSearch(input.trim());   // Trigger immediate search
};

with the debounced search logic, we can ensure this search component can ansure the request or db logic or better still the onSearch callback funtion isnt fired on every keystrock, only on pressing the search button,then sets a valid delay time after the user last typed,updating the input state.
