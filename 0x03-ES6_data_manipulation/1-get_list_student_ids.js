function getListStudentIds(arr_obj) {
  if (!Array.isArray(arr_obj)) {
    return [];
  }
  return arr_obj.map((student) => student.id);
}

export default getListStudentIds;
