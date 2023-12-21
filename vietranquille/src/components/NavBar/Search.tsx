import { Input } from "@/components/ui/input"

const HandelChange = (e) => {
  console.log("change", e.target.value);

}

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="rechercher..."
        className="md:w-[100px] lg:w-[300px]"
        onChange={(e) => HandelChange(e)}
      />
    </div>
  )
}

export default Search