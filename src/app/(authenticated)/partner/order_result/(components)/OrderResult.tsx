"use client";

import { CardTitle } from '@/components/ui/card';
import { usePayment } from '@/hooks/usePayment';
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const OrderResult = () => {
  const { fetchVNPayStatus } = usePayment();
  const [paymentStatus, setPaymentStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handlePaymentStatus = (status: string) => {
    if (status === '00' || (status.data && status.data.return_code === 1)) {
      setPaymentStatus('completed');
    } else {
      setPaymentStatus('failed');
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentStatus = await fetchVNPayStatus();
        handlePaymentStatus(paymentStatus?.code);
      } catch (error) {
        console.error('Error fetching payment status:', error);
        setPaymentStatus('failed');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-2xl max-h-lvh">
        <CardTitle className='p-4'>
          <p className='font-bold text-2xl text-center '>
            {loading ? 'Đang xử lý giao dịch...' : paymentStatus === 'completed' ? 'Thanh toán thành công' : 'Thanh toán thất bại'}
          </p>
        </CardTitle>
        <CardBody className='p-4'>
          {loading ? (
            <p className="text-center">Giao dịch của bạn đang được xử lý ...</p>
          ) : paymentStatus === 'completed' ? (
            <p className="text-center text-green-600">
              Bạn đã thanh toán thành công dịch vụ Quảng cáo trên Skylark
            </p>
          ) : (
            <p className="text-center text-red-600">
              Đã xảy ra lỗi trong quá trình thanh toán.
            </p>
          )}
        </CardBody>
        <CardFooter className="flex justify-center">
          <Button className='w-full bg-blue-400 text-white font-bold' onClick={() => {
            if (paymentStatus === 'completed') {
              router.push('/partner/place_order');
            } else if (paymentStatus === 'failed') {
              router.push('/partner/place_order');
            } else {

            }
          }}>
            {loading ? 'VUI LÒNG CHỜ' : paymentStatus === 'completed' ? 'QUAY TRỞ VỀ TRANG CHÍNH' : 'QUAY TRỞ VỀ TRANG CHÍNH'}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default OrderResult;