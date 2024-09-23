import TableNavBtn from "./TableNavBtn";

interface Props {
  totalPage: number,
  currentPage: number
}

export default function TableNav({ totalPage, currentPage }: Props) {

  const pages = Array.from({ length: totalPage }, (_, i) => i + 1)

  return (
    <div className="flex items-center gap-1 justify-center mt-4 ">
      {
        pages.map(page => (
          <TableNavBtn 
            href={`/admin/products?page=${page}`} 
            active={currentPage === page}>{page}</TableNavBtn>))
      }
    </div>
  )
}
