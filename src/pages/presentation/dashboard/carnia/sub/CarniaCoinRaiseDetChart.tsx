import { auto } from "@popperjs/core";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Button from "../../../../../components/bootstrap/Button";

const CarniaCoinRaiseDetChart = () => {
  return (
    <div>
      <div className='d-flex justify-content-between align-items-center my-3'>
        <div className='col-4'>
          <Button
            // color='primary'
            isLink
            icon='ArrowBackIosNew'
            size='lg'
            // icon='Summarize'
            tag='a'
            // href={`../${demoPagesMenu.sales.subMenu.salesList.path}`}>
            to="/"
            />		
        </div>
        <div className='col-4 d-flex justify-content-center h3'>
          MileVerse
        </div>
        <div className='col-4 d-flex justify-content-end'>
          <div className='me-4'>
            {/* 코인 정보 */}
          </div>
        </div>
      </div>

      <AdvancedRealTimeChart
        theme="dark"
        width={460}
        height={518}
        symbol="BINANCE:BTCUSDT"
        interval="D"
        timezone="Asia/Seoul"
        style="1"
        locale="kr"
        toolbar_bg="#f1f3f6"
        allow_symbol_change={false}
        container_id="tradingview_dcf24"
      ></AdvancedRealTimeChart>
    </div>
  );
};

export default CarniaCoinRaiseDetChart;
