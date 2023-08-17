import Bars from "./components/Bars"

const statArr = [
  {
    loc: 'Lagos',
    users: 1767988,
    color: 'bg-green-500',
    width: 'w-[80%]'
  },
  {
    loc: 'Rivers',
    users: 1544097,
    color: 'bg-green-500',
    width: 'w-[79%]'
  },
  {
    loc: 'Ogun',
    users: 1222988,
    color: 'bg-green-500',
    width: 'w-[70%]'
  },
  {
    loc: 'Oyo',
    users: 967001,
    color: 'bg-lime-300',
    width: 'w-[65%]'
  },
  {
    loc: 'Delta',
    users: 767988,
    color: 'bg-lime-300',
    width: 'w-[58%]'
  },
  {
    loc: 'FCT',
    users: 509111,
    color: 'bg-lime-300',
    width: 'w-[50%]'
  },
  {
    loc: 'Borno',
    users: 408999,
    color: 'bg-indigo-300',
    width: 'w-[65%]'
  },
  {
    loc: 'Edo',
    users: 400008,
    color: 'bg-indigo-300',
    width: 'w-[50%]'
  },
  {
    loc: 'Cross River',
    users: 386908,
    color: 'bg-indigo-300',
    width: 'w-[45%]'
  },
  {
    loc: 'Akwa Ibom',
    users: 98897,
    color: 'bg-amber-300',
    width: 'w-[17%]'
  },
]

const StateData = () => {
  return (
    <>
      <div className="mt-2 text-neutral-700 text-lg font-semibold leading-relaxed">Top States</div>
      {statArr.map((item) => (
        <Bars key={ item.loc } color={item.color} width={item.width} users={item.users} loc={item.loc} /> 
      ))}
    </>
  )
}

export default StateData