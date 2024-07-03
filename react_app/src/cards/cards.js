const Cards = () => {
    return (
        <div class="mt-[20px] flex px-[30px] justify-between">
            <div class="flex items-center">
                <h2 class="font-bold text-xl">Brackets</h2>
                <i class="fa-regular fa-heart text-boz-kimi ml-[50px]"></i>
                <span class="h-[16px] w-px opacity-10 bg-black mx-[10px]"></span>
                <div class="flex items-center">
                    <img src="./img/globe.png" alt="globe" width="16px" />
                    <span class="ml-[5px] text-boz-kimi">Public</span>
                </div>
                <span class="h-[16px] w-px opacity-10 bg-black mx-[10px]"></span>
                <i class="fa-regular fa-hard-drive text-boz-kimi"></i>
            </div>
            <div class="flex items-center">
                <div class="profiles flex">
                    <img src="../nav/huseyn.jpeg" class="w-[40px] h-[40px] border rounded-full" />
                    <img src="../nav/huseyn.jpeg" alt="" class="w-[40px] h-[40px] border rounded-full" />
                    <img src="../nav/huseyn.jpeg" alt="" class="w-[40px] h-[40px] border rounded-full" />
                    <img src="../nav/huseyn.jpeg" alt="" class="w-[40px] h-[40px] border rounded-full" />
                    <img src="../nav/huseyn.jpeg" alt="" class="w-[40px] h-[40px] border rounded-full" />
                </div>
                <h2 class="ml-[40px]">Menu</h2>
            </div>
        </div>
    );
};

export default Cards