import InfoCard from '../InfoCard'
import { Users } from 'lucide-react'

export default function InfoCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <InfoCard
        title="Personalized Service"
        description="We take time to understand your unique financial needs."
        icon={Users}
      />
    </div>
  )
}
