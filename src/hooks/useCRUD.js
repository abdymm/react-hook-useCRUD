import { useState } from "react";

export default function useCRUD(initialDatas, initialData) {
  const [datas, setDatas] = useState(initialDatas);
  const [data, setData] = useState(initialData);

  const onAddData = data => {
    setDatas([...datas, data]);
  };

  const onDeleteData = id => {
    setDatas(datas.filter(data => data.id !== id));
  };

  const onEditData = user => {
    setData(user);
  };

  const onUpdateData = (id, updatedData) => {
    setDatas(datas.map(data => (data.id === id ? updatedData : data)));
  };

  return [
    datas,
    setDatas,
    data,
    setData,
    onAddData,
    onEditData,
    onUpdateData,
    onDeleteData
  ];
}
