
interface Props {
    status: boolean
}

export default function AdminOrderStatus({ status }: Props) {

    if (status) return (
        <span className="inline-block text-xs px-3 py-1 font-medium rounded-3xl bg-green-50 text-green-400">
            Complete
        </span>
    )

    return (
        <span className="inline-block text-xs px-3 py-1 font-medium rounded-3xl bg-orange-50 text-orange-400">
            Pending
        </span>
    )
}
