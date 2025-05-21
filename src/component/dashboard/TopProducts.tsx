
// components/TopProducts.jsx
// import { Badge } from "@components/ui/cbad"
import { Card, CardContent } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
import { ArrowRight } from "lucide-react"

export default function TopProducts() {
  return (
    <div className="border border-gray-400 rounded-md grid col-span-2 p-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Top Products</h2>
        <button className="flex items-center text-sm text-orange-600 hover:underline">
          See Details <ArrowRight className="ml-1 w-4 h-4" />
        </button>
      </div>

      {/* Highlight Card */}
      <Card className="w-auto">
        <CardContent className="p-4 space-y-2">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-100 p-2 rounded">
              <img src="/icon-placeholder.png" alt="icon" className="w-6 h-6" />
            </div>
            <span className="font-medium">Blid Shorts</span>
          </div>
          <div className="text-xl font-bold text-gray-800">$4,730.33</div>
          <div className="space-y-1">
            {/* <Progress value={90} className="h-2 bg-gray-200" /> */}
            <p className="text-xs text-green-600">90% targets achieved</p>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="text-xs text-gray-500 border-b">
            <tr>
              <th className="py-2">Product</th>
              <th className="py-2">Sales</th>
              <th className="py-2">Revenue</th>
              <th className="py-2">Stock</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-medium text-gray-700">Blid Shorts</td>
              <td className="py-2">127 pcs</td>
              <td className="py-2">$1,890</td>
              <td className="py-2">120</td>
              <td className="py-2">
                {/* <Badge variant="outline" className="text-green-600 border-green-600">
                  In Stock
                </Badge> */}
              </td>
            </tr>
            <tr>
              <td className="py-2 font-medium text-gray-700">T Shirts _Midi</td>
              <td className="py-2">540 pcs</td>
              <td className="py-2">$2,889</td>
              <td className="py-2">100</td>
              <td className="py-2">
                {/* <Badge variant="outline" className="text-red-600 border-red-600">
                  Out of stock
                </Badge> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

