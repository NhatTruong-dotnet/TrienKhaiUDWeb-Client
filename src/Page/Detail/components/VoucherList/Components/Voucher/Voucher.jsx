import './Voucher.css'

function Voucher(props) {
    return (
        <div style={{ position: 'relative', margin: '0 5px' }}>
            <div>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='350'
                    height='104'
                    viewBox='0 0 524 145.001'
                    className='svg-bg'
                >
                    <path
                        id='Frame_voucher_Web'
                        d='M110,144H12A12,12,0,0,1,0,132V12A12,12,0,0,1,12,0h98a12.02,12.02,0,0,0,12,11.971A12.02,12.02,0,0,0,134,0H511a12,12,0,0,1,12,12V132a12,12,0,0,1-12,12H134v-.03a12,12,0,0,0-24,0V144Z'
                        transform='translate(0.5 0.5)'
                        fill='#fff'
                        stroke='rgba(0,0,0,0)'
                        strokeMiterlimit='10'
                        strokeWidth='1'
                    />
                </svg>
            </div>

            <div className='content'>
                <div className='left'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='104.554'
                        height='125.395'
                        viewBox='0 0 104.554 125.395'
                        className='backgroundIcon'
                    >
                        <path
                            id='Frame_icon_web'
                            d='M95.424,124.4H47.593l-33.592,0a12,12,0,0,1-12-12V12A12,12,0,0,1,14,0H80.785l.255,0H95.424a10.364,10.364,0,0,0,10.129,10.165l-.005,4.374a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.814v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.911v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9V55.22a2.907,2.907,0,1,0,0,5.813v2.324a2.907,2.907,0,1,0,0,5.813V71.5a2.907,2.907,0,0,0-2.06.852,2.874,2.874,0,0,0-.855,2.05,2.917,2.917,0,0,0,2.915,2.912v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.912,2.912,0,0,0,2.915,2.9v2.324a2.907,2.907,0,1,0,0,5.814V95.9a2.907,2.907,0,1,0,0,5.814v2.324a2.906,2.906,0,0,0-2.06.852,2.876,2.876,0,0,0-.855,2.051,2.916,2.916,0,0,0,2.915,2.911l0,3.987A10.328,10.328,0,0,0,95.423,124.2c0,.065,0,.131,0,.2h0Z'
                            transform='translate(-1.501 0.499)'
                            fill='#48A7F8'
                            stroke='rgba(0,0,0,0)'
                            strokeMiterlimit='10'
                            strokeWidth='1'
                        />
                    </svg>
                    <img
                        src='https://www.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_ewallet.svg?q=10077'
                        alt='icon'
                        className='iconType'
                    />
                </div>
                <div className='right'>
                    <div className='header'>
                        <div className='text'>VNPAY: GIẢM NGAY20K</div>
                        <div className='link'>Chi tiết</div>
                    </div>
                    <div className='rightContent'>
                        Nhập mã “QRFHS20”: Giảm 20k, đơn hàng 40k thanh toán qua
                        VNPAY - Nhập mã tại App Banking
                    </div>
                </div>
            </div>
        </div>

        // <div id='aux-container'></div>
    )
}

export default Voucher
