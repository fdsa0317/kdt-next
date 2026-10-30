interface AmountProps {
    amount: number;
    coupon: number;
    handleSubtractAmountClick: () => void,
    handleAddAmountClick: () => void,
    handleSubtractCouponClick: () => void,
    handleAddCouponClick: () => void,
}

export default function Amount({
    amount,
    coupon,
    handleSubtractAmountClick,
    handleAddAmountClick,
    handleSubtractCouponClick,
    handleAddCouponClick
}: AmountProps) {
    return (
        <div className="border border-blue-300 h-15 flex justify-center items-center p-5 gap-4">
            {amount > 1 && (
                <button className="w-10 h-10 bg-purple-300" onClick={handleSubtractAmountClick}>-</button>
            )}
            <p>수량: {amount}</p>
            <button className="w-10 h-10 bg-purple-300" onClick={handleAddAmountClick}>-</button>

            {coupon > 0 && (
                <button className="w-10 h-10 bg-purple-300" onClick={handleSubtractCouponClick}>-</button>
            )}
            <p>쿠폰: {amount}</p>
            <button className="w-10 h-10 bg-purple-300" onClick={handleAddCouponClick}>-</button>
        </div>
    );
}