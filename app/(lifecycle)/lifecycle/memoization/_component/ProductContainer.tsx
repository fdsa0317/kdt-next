"use client"

import { useCallback, useMemo, useState } from "react";
import Amount from "./Amount";

export default function ProductContainer() {

    console.log("부모 랜더링! 👩‍🦲")
    const [like, setLike] = useState<number>(0)
    const [amount, setAmount] = useState<number>(1)
    const [coupon, setCoupon] = useState<number>(0)
    
    const totlaPrice = useMemo(() => {
        return amount * 12500 - coupon * 1000
    }, [amount, coupon])

    // 부모에서 자식에게 props로 넘겨줄 때
    const handleSubtractAmountClick = useCallback(() => setAmount((prev) => prev - 1), [])
    const handleAddAmountClick = useCallback(() => setAmount((prev) => prev + 1), [])
    const handleSubtractCouponClick = useCallback(() => setCoupon((prev) => prev - 1), [])
    const handleAddCouponClick = useCallback(() => setCoupon((prev) => prev + 1), [])

    return (
        <div className="w-125 h-87.5 mx-auto my-5">
            <div className="border border-gray-300 p-7.5">
                <p>[책]여름과 루비</p>
                <p>총 가격: {totlaPrice.toLocaleString()}원</p>
                <button 
                    onClick={() => setLike(like + 1)}
                    className="p-2 bg-blue-500 rounded mt-2 mb-2 text-white"
                >좋아요 {like}</button>
            </div>
            <Amount
                amount={amount}
                coupon={coupon}
                handleSubtractAmountClick={handleSubtractAmountClick}
                handleAddAmountClick={handleAddAmountClick}
                handleSubtractCouponClick={handleSubtractCouponClick}
                handleAddCouponClick={handleAddCouponClick}
            />
        </div>
    );
}