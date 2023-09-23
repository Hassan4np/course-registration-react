import PropTypes from 'prop-types';

const Home = ({carditems,totalCredit,remaing,totalprice}) => {
    let remaings = 20;
    return (
        <div className="w-1/4 ml-3 p-5 ">
           <div className="bg-[#FFF] border rounded-lg px-5 ">
           <h3 className="text-lg font-bold text-[#2F80ED] mt-5 border-b-2 py-4 mb-2">Credit Hour Remaining {(20-totalCredit)} hr</h3>
            <div className="">
                <h3 className=" text-black text-lg font-bold mb-3">Course Name: </h3>
                <div className="min-w-[400px] border-b-2 py-3">
                        {
                            carditems.map((item,idx)=><h6 key={idx}>{idx+1}.{item.title}</h6>)
                        }                              
                </div>
              
            </div>
            <div>
                <h3 className=" text-base font-medium border-b-2 p-2 text-[#1C1B1BCC] ">Total Credit Hour : {totalCredit} </h3>
            </div>
            <div>
               <h3 className=" text-base font-semibold border-b-2 p-5 text-[#1C1B1BCC]">Total Price : {totalprice}  USD </h3>
            </div>
           </div>
        </div>
    );
};
Home.propTypes = {
    carditems: PropTypes.array,
    totalCredit:PropTypes.number,
    remaing:PropTypes.number,
    totalprice:PropTypes.number
  };
export default Home;