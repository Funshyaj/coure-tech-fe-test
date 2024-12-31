import { MdOutlineCancel } from "react-icons/md";
interface Props {
  toggleModal: () => void;
  children: React.ReactNode;
}

const ModalContainer = ({ toggleModal, children }: Props) => {
  return (
    <div
      className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm overflow-y-scroll"
      onClick={toggleModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-[999] bg-white p-4 md:rounded-lg shadow-lg max-w-md w-full h-full md:h-[unset]"
      >
        <div className="z-[999] relative pt-5">
          <MdOutlineCancel
            onClick={toggleModal}
            size={35}
            color="gray"
            className="cursor-pointer absolute top-2 right-2"
          />

          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
